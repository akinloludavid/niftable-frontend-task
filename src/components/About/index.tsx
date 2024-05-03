import React from 'react'
import Button from '../Button'

function About() {
    return (
        <section className='bg-black py-[120px] xl:py-[136px] xl:px-[140px] md:px-[120px] grid grid-cols-2 gap-12'>
            <div className='flex flex-col gap-[48px]'>
                <h2 className='uppercase font-monument md:text-[48px] xl:text-[68px] text-white leading-[75px]'>
                    creon pass nft
                </h2>
                <div className='bg-gradient-to-r from-[#3D8BFF] via-[#AB23FF] to-[#AB23FF] text-transparent bg-clip-text'>
                    <p>
                        The Creon NFT pass unlocks access to AI projects, the
                        Creon launchpad, and a ticket to generate passive income
                        through AI-driven tools
                    </p>
                </div>
                <ul className='flex flex-col gap-2'>
                    <li className='px-4 py-3 border-[1px] border-[#13171D] w-fit rounded-[6px] text-white text-[18px] font-satoshi_regular font-normal'>
                        Pre-launch investment opportunities for upcoming AI
                        projects
                    </li>
                    <li className='px-4 py-3 border-[1px] border-[#13171D] w-fit text-white text-[18px] font-satoshi_regular font-normal'>
                        Free and early access to Creon built AI projects
                    </li>
                    <li className='px-4 py-3 border-[1px] border-[#13171D] w-fit text-white text-[18px] font-satoshi_regular font-normal'>
                        Higher allocation limits on the Creon AI Launchpad
                    </li>
                    <li className='px-4 py-3 border-[1px] border-[#13171D] w-fit text-white text-[18px] font-satoshi_regular font-normal'>
                        Revenue share distribution from Creon built AI projects
                    </li>
                </ul>
                <Button variant='primary' className='w-[440px]'>
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
        </section>
    )
}

export default About
