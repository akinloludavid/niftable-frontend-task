'use client'
import Image from 'next/image'
import { useState } from 'react'
import Container from '../Container'
import GradientText from '../GradientText'
import Launch from '../icons/Launch'
import Profit from '../icons/Profit'
import { faqs as visions } from './faqs'

export default function Mission() {
    const [faqIndex, setFaqIndex] = useState(-1)
    const [faqs, setFaqs] = useState(visions)
    const handleAccordion = (index: number) => {
        const updatedAccordions = faqs.map((faq, i) =>
            i === index ? { ...faq, open: !faq.open } : faq,
        )
        setFaqs(updatedAccordions)
    }
    return (
        <Container className='grid grid-cols-2 items-start'>
            <section>
                <h3 className='uppercase text-[38px] font-monument text-white'>
                    Our vision is to support the innovation of AI blockchain
                    projects{' '}
                    <GradientText className='text-[38px] font-monument'>
                        while prioritizing communities and democratizing profits
                    </GradientText>
                </h3>
                <Image
                    src='/creon.png'
                    alt='creon logo'
                    width={400}
                    height={300}
                    className='ml-auto'
                />
            </section>
            <section className='text-white flex flex-col gap-[30px] max-h-[720px] overflow-scroll'>
                {faqs.map((faq, index) => (
                    <details
                        key={faq.title}
                        className='pb-[30px] border-b-[1px] border-b-[#13171D]'
                    >
                        <summary
                            onMouseEnter={() => setFaqIndex(index)}
                            onMouseLeave={() => setFaqIndex(-1)}
                            onClick={() => handleAccordion(index)}
                            className='font-satoshi_bold text-[22px] flex items-center hover:text-[#3D8BFF] gap-8 cursor-pointer marker:content-none'
                        >
                            <div>{faq.icon(faq.open)}</div>
                            <div className='flex justify-between items-center w-full'>
                                <h3>{faq.title}</h3>
                                <svg
                                    className={faq.open ? 'rotate-180' : ''}
                                    width='16'
                                    height='16'
                                    viewBox='0 0 16 16'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M2 5L8 11L14 5'
                                        stroke={
                                            faqIndex === index
                                                ? '#3D8BFF'
                                                : 'white'
                                        }
                                        stroke-width='1.5'
                                    />
                                </svg>
                            </div>
                        </summary>
                        <article className='font-satoshi_regular text-[18px] pl-[132px]'>
                            <p>{faq.details}</p>
                        </article>
                    </details>
                ))}
            </section>
        </Container>
    )
}
