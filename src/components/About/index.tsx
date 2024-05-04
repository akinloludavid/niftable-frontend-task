import React from 'react'
import Button from '../Button'
import Container from '../Container'
import GradientText from '../GradientText'

function About() {
    return (
        <Container className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div className='flex flex-col gap-[48px]'>
                <h2 className='uppercase font-monument text-[32px] md:text-[48px] 3xl:text-[68px] text-white leading-[48px]'>
                    creon pass nft
                </h2>
                <GradientText className='w-full md:w-[80%]'>
                    <p>
                        The Creon NFT pass unlocks access to AI projects, the
                        Creon launchpad, and a ticket to generate passive income
                        through AI-driven tools
                    </p>
                </GradientText>
                <ul className='flex flex-col gap-2'>
                    <li className='px-4 py-3 border-[1px] border-[#13171D] w-fit rounded-[6px] text-white text-[18px] font-satoshi_regular font-normal'>
                        Pre-launch investment opportunities for upcoming AI
                        projects
                    </li>
                    <li className='px-4 py-3 border-[1px] border-[#13171D] w-fit rounded-[6px] text-white text-[18px] font-satoshi_regular font-normal'>
                        Free and early access to Creon built AI projects
                    </li>
                    <li className='px-4 py-3 border-[1px] border-[#13171D] w-fit rounded-[6px] text-white text-[18px] font-satoshi_regular font-normal'>
                        Higher allocation limits on the Creon AI Launchpad
                    </li>
                    <li className='px-4 py-3 border-[1px] border-[#13171D] w-fit rounded-[6px] text-white text-[18px] font-satoshi_regular font-normal'>
                        Revenue share distribution from Creon built AI projects
                    </li>
                </ul>
                <Button variant='primary' className='w-full lg:w-[440px]'>
                    Buy Creon Pass
                </Button>
            </div>
            <div className=''>
                <video autoPlay loop muted>
                    <source
                        src='/assets/videos/nft-video.mp4'
                        type='video/mp4'
                    ></source>
                    Your browser does not support the video tag.
                </video>
            </div>
        </Container>
    )
}

export default About
