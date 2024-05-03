import Image from 'next/image'
import Container from '../Container'
import GradientText from '../GradientText'
import { comingSoon } from './data'

export default function ComingSoon() {
    return (
        <Container>
            <div className='grid grid-cols-3 gap-8'>
                {comingSoon.map(feature => (
                    <div
                        key={feature.name}
                        className='bg-[#13171D99] rounded-[6px] p-8 pb-12 flex flex-col'
                    >
                        <h4 className='font-normal font-monument md:text-[32px] xl:text-[38px] text-white mb-6'>
                            {feature.name}
                        </h4>
                        <GradientText className='mb-12'>
                            {feature.title}
                        </GradientText>
                        <div className='mt-auto'>
                            <Image
                                src={feature.img}
                                alt={feature.title}
                                width={400}
                                height={220}
                                className='w-[100%]'
                            />
                            <p className='text-[18px] mt-8 font-normal font-satoshi_regular text-white'>
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
}
