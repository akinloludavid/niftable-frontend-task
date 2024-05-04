import Navbar from '../Navbar'
import Video from '../Video'

export default function HeroSection() {
    return (
        <main className='min-h-screen overflow-x-hidden scrollbar-hide'>
            <Video
                src='/assets/videos/main-background-video.mp4'
                className='absolute inset-0 w-full h-full object-cover '
            />
            <section className='relative z-10'>
                <Navbar />
                <div className='xl:px-[140px] px-6 3xl:px-[240px] md:px-[120px] mx-auto mt-[200px] lg:mt-[320px]'>
                    <h1 className='text-[32px] md:text-[48px] lg:w-4/5 3xl:text-[68px] font-normal uppercase font-monument text-white leading-[48px]'>
                        The world's first platform for Tokenizing AI blockchain
                        projects
                    </h1>

                    <div className='mt-[40px]'>
                        <div className='h-[1px] bg-gradient-to-r from-[#3D8BFF] via-[#AB23FF] to-[#AB23FF] md:flex hidden w-[660px]' />
                        <div className='bg-gradient-to-r my-1 from-[#3D8BFF] via-[#AB23FF] to-[#AB23FF] text-transparent bg-clip-text'>
                            <p className='font-bold text-[22px] font-satoshi_bold'>
                                Hold the Creon Pass NFT and earn passive income
                                from AI Tools
                            </p>
                        </div>
                        <div className='h-[1px] bg-gradient-to-r from-[#3D8BFF] via-[#AB23FF] to-[#AB23FF] md:flex hidden w-[660px]' />
                    </div>
                </div>
            </section>
        </main>
    )
}
