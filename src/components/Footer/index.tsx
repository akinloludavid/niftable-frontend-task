import Image from 'next/image'

const socials = [
    {
        icon: '/assets/socials/telegram.svg',
        link: '',
    },
    {
        icon: '/assets/socials/discord.svg',
        link: '',
    },
    {
        icon: '/assets/socials/twitter.svg',
        link: '',
    },
]
export default function Footer() {
    return (
        <footer className='xl:px-[140px] md:px-[120px] flex items-center justify-between bg-black pt-6 pb-8'>
            <div className='flex items-center gap-[120px]'>
                <p className='text-white'>© Creon 2023. All rights reserved.</p>
                <section className='flex items-center gap-2'>
                    {socials.map(social => (
                        <div
                            key={social.icon}
                            className='border-[2px] border-white rounded-full w-[34px] h-[34px] flex justify-center items-center'
                        >
                            <Image
                                src={social.icon}
                                alt={'social icons'}
                                width={24}
                                height={24}
                                className='w-4 h-4'
                            />
                        </div>
                    ))}
                </section>
            </div>
            <p className='font-satoshi_regular text-[16px] text-white'>
                Powered by <span className='font-monument'>NIFTABLES</span>
            </p>
        </footer>
    )
}
