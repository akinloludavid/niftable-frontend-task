'use client'
import { classNames } from '@/utils/helpers'
import Link from 'next/link'
import Button from '../Button'
import Logo from '../Logo'
import { navLinks } from './navLinks'
import { MdMenu } from 'react-icons/md'
import { useState } from 'react'
import SideMenu from './SideMenu'
export default function Navbar() {
    const [showSideMenu, setShowSideMenu] = useState(false)
    return (
        <nav className='flex fixed top-0 w-full z-[99999] items-center justify-between py-8 px-4 md:py-8 md:px-8'>
            <Logo />
            <ul className='flex hidden lg:flex items-center list-style-none text-white md:gap-6 xl:gap-[40px]'>
                {navLinks.map(nav => (
                    <li
                        key={nav.label}
                        className='font-satoshi_regular flex gap-1 font-medium'
                    >
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

                <Button
                    variant='secondary'
                    className='hidden lg:flex lg:items-center'
                >
                    Connect
                </Button>
            </ul>
            <MdMenu
                className='text-white text-[24px] cursor-pointer lg:hidden'
                onClick={() => setShowSideMenu(true)}
            />
            {showSideMenu && (
                <SideMenu onClose={() => setShowSideMenu(false)} />
            )}
        </nav>
    )
}
