import GradientText from '../GradientText'
import Video from '../Video'

export default function Profiting() {
    return (
        <section className='bg-black py-[120px] xl:py-[136px] px-6 xl:px-[140px] md:px-[120px]'>
            <h3 className='text-[32px] md:text-[48px] 3xl:text-[68px] font-normal font-monument text-white leading-[54px]'>
                PROFITTING THROUGH
            </h3>
            <section className='flex md:justify-end'>
                <GradientText className='font-normal break-word whitespace-wrap	text-[24px] md:text-[32px] 2xl:text-[36px] font-monument uppercase'>
                    AI Innovation & Decentralization
                </GradientText>
            </section>

            <div className='flex flex-col lg:flex-row items-center mt-12 md:mt-24 gap-12'>
                <Video
                    src='/assets/videos/creon-logo.mp4'
                    className='w-full lg:w-[60%]'
                />
                <div className='flex flex-col gap-[28px] lg:border-x-[1px] lg:border-x-grey-line lg:p-6 h-full'>
                    <h5 className='font-satoshi_bold text-[22px] text-white'>
                        The dynamic community driven business model of the
                        future.
                    </h5>
                    <p className='text-[18px] font-satoshi_regular text-white'>
                        At Creon, we blend the power of AI tools with the
                        dynamic crypto and NFT markets, utilizing an innovative
                        business model to drive profitability. This approach
                        empowers our community, as our NFT and token holders
                        directly benefit from the growth and prosperity of the
                        Creon network, creating a win-win scenario for both our
                        community and for the projects we launch.
                    </p>
                </div>
            </div>
        </section>
    )
}
