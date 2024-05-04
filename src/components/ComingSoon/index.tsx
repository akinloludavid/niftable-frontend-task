'use client'
import { classNames } from '@/utils/helpers'
import Image from 'next/image'
import { useState } from 'react'
import Container from '../Container'
import GradientText from '../GradientText'
import { comingSoon } from './data'

export default function ComingSoon() {
    const [hoverIndex, setHoverIndex] = useState(-1)
    return (
        <Container>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-12 md:gap-8'>
                {comingSoon.map((feature, index) => (
                    <div
                        key={feature.name}
                        className='relative  cursor-default'
                    >
                        <span className='px-[6px] py-[3px] absolute z-50 right-8 top-[-10px] bg-white w-fit rounded-[100px]'>
                            <p className='font-satoshi_bold text-[12px]'>
                                COMING SOON
                            </p>
                        </span>
                        <div
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(-1)}
                            className='bg-[#13171D99] overflow-x-hidden rounded-[6px] p-8 pb-12 flex flex-col relative min-h-[580px] md:min-h-[680px] xl:min-h-[640px] 2xl:min-h-[720px]'
                        >
                            <h4 className='font-normal font-monument text-[24px] md:text-[24px] 2xl:text-[38px] text-white mb-6'>
                                {feature.name}
                            </h4>
                            <GradientText className='mb-12 font-satoshi_bold'>
                                {feature.title}
                            </GradientText>
                            <div className='mt-auto absolute top-[150px] md:top-[200px]'>
                                <Image
                                    src={feature.img}
                                    alt={feature.title}
                                    width={500}
                                    height={220}
                                    className={classNames(
                                        '-ml-8 rounded-r-[6px] w-full',
                                        hoverIndex === index
                                            ? 'scale-105 ease-in duration-300'
                                            : 'ease-in-out duration-300',
                                    )}
                                />
                                <p className='text-[14px] mr-8 2xl:text-[18px] mt-8 font-normal font-satoshi_regular text-white'>
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
}
