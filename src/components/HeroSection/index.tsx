import Navbar from '../Navbar'

export default function HeroSection() {
    return (
        <section className=''>
            <video
                autoPlay
                loop
                muted
                className='absolute inset-0 w-full h-full object-cover'
            >
                <source
                    src='/assets/videos/main-background-video.mp4'
                    type='video/mp4'
                ></source>
                Your browser does not support the video tag.
            </video>
            <section className='relative z-10 p-6 px-8'>
                <Navbar />
                <div className='xl:px-[140px] md:px-[120px] w-[1440px] mx-auto mt-[400px]'>
                    <h1 className='md:text-[48px] xl:text-[68px] font-normal font-monument text-white leading-[75px]'>
                        The world's first platform for Tokenizing AI blockchain
                        projects
                    </h1>

                    <div className='mt-[40px]'>
                        <div className='h-[1px] bg-gradient-to-r from-[#3D8BFF] via-[#AB23FF] to-[#AB23FF] w-[660px]' />
                        <div className='bg-gradient-to-r from-[#3D8BFF] via-[#AB23FF] to-[#AB23FF] text-transparent bg-clip-text'>
                            <p className='font-bold text-[22px] font-satoshi_bold'>
                                Hold the Creon Pass NFT and earn passive income
                                from AI Tools
                            </p>
                        </div>
                        <div className='h-[1px] bg-gradient-to-r from-[#3D8BFF] via-[#AB23FF] to-[#AB23FF] w-[660px]' />
                    </div>
                </div>
            </section>
        </section>
    )
}
