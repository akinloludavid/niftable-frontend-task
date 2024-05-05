'use client'
import Image from 'next/image'
import { useState } from 'react'
import Container from '../Container'
import GradientText from '../GradientText'
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
        <Container className='grid lg:grid-cols-2 grid-cols-1 gap-12 items-start'>
            <section className='w-full'>
                <h3 className='uppercase text-[32px] 2xl:text-[38px] leading-[54px] font-monument text-white'>
                    Our vision is to support the innovation of AI blockchain
                    projects{' '}
                    <GradientText className='text-[32px] 2xl:text-[38px] leading-[54px] font-monument'>
                        while prioritizing communities and democratizing profits
                    </GradientText>
                </h3>
                <Image
                    src='/creon.png'
                    alt='creon logo'
                    width={400}
                    height={300}
                    className='lg:ml-auto w-full mt-4 lg:mt-0'
                />
            </section>
            <section className='text-white flex flex-col gap-[30px] max-h-[720px] overflow-scroll scrollbar-hide'>
                {faqs.map((faq, index) => (
                    <details
                        key={faq.title}
                        className='pb-[30px] border-b-[1px] border-b-grey-line'
                    >
                        <summary
                            onMouseEnter={() => setFaqIndex(index)}
                            onMouseLeave={() => setFaqIndex(-1)}
                            onClick={() => handleAccordion(index)}
                            className='font-satoshi_bold text-[22px] flex items-center hover:text-blue gap-8 cursor-pointer marker:content-none'
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
