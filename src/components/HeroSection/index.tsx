import GradientText from '../GradientText'
import Navbar from '../Navbar'
import Video from '../Video'

export default function HeroSection() {
    return (
        <main className='min-h-screen bg-black overflow-x-hidden scrollbar-hide'>
            <Video
                src='/assets/videos/main-background-video.mp4'
                className='absolute inset-0 w-full h-full object-cover max-w-[1920px] mx-auto'
            />
            <section className='relative z-10'>
                <Navbar />
                <div className='xl:px-[140px] px-6 3xl:px-[240px] md:px-[120px] mx-auto mt-[180px] sm:mt-[300px] md:mt-[350px] lg:mt-[400px]'>
                    <h1 className='text-[32px] md:text-[48px] lg:w-4/5 3xl:text-[68px] font-normal uppercase font-monument text-white leading-[54px]'>
                        The world's first platform for Tokenizing AI blockchain
                        projects
                    </h1>

                    <div className='mt-6 md:mt-[40px]'>
                        <div className='h-[1px] bg-gradient-to-r from-blue via-purple to-purple lg:flex hidden w-[660px]' />
                        <GradientText className='text-[22px] font-satoshi_bold'>
                            Hold the Creon Pass NFT and earn passive income from
                            AI Tools
                        </GradientText>
                        <div className='h-[1px] bg-gradient-to-r from-blue via-purple to-purple lg:flex hidden w-[660px]' />
                    </div>
                </div>
            </section>
        </main>
    )
}
