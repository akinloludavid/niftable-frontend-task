import { classNames } from '@/utils/helpers'
import Link from 'next/link'
import Logo from '../Logo'
import { navLinks } from './navLinks'

export default function Navbar() {
    return (
        <nav className='flex justify-between'>
            <Logo />
            <ul className='flex items-center list-style-none text-white gap-[40px]'>
                {navLinks.map(nav => (
                    <li className='font-satoshi_regular flex gap-1 font-medium'>
                        <Link href={'#'}>{nav.label}</Link>
                        <span
                            className={classNames(
                                'px-1 py-[2px] bg-black h-fit rounded-[100px]',
                                nav.comingSoon ? 'block' : 'hidden',
                            )}
                        >
                            <p className='text-[10px] text-purple text-satoshi_bold'>
                                SOON
                            </p>
                        </span>
                    </li>
                ))}

                <button className='font-bold text-[18px] rounded-[6px] border-[2px] border-white px-[30px] py-3'>
                    Connect
                </button>
            </ul>
        </nav>
    )
}
