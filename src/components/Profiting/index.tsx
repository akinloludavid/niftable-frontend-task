import GradientText from '../GradientText'
import Video from '../Video'

export default function Profiting() {
    return (
        <section className='bg-black py-[120px] xl:py-[136px] xl:px-[140px] md:px-[120px]'>
            <h3 className='md:text-[48px] xl:text-[68px] font-normal font-monument text-white leading-[75px'>
                PROFITTING THROUGH
            </h3>
            <section className='flex justify-end'>
                <GradientText className='font-normal text-[36px] font-monumnent uppercase'>
                    AI Innovation & Decentralization
                </GradientText>
            </section>

            <div className='flex items-center mt-24 gap-12'>
                <Video
                    src='/assets/videos/creon-logo.mp4'
                    className='w-[60%]'
                />
                <div className='flex flex-col gap-[28px]'>
                    <h5 className='font-bold text-[22px] text-white'>
                        The dynamic community driven business model of the
                        future.
                    </h5>
                    <p className='text-[18px] font-normal text-white'>
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
