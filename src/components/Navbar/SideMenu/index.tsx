import Button from '@/components/Button'
import { classNames } from '@/utils/helpers'
import Link from 'next/link'
import { navLinks } from '../navLinks'
import { FaTimes } from 'react-icons/fa'
export default function SideMenu({ onClose }: { onClose: () => void }) {
    return (
        <>
            <div
                onClick={onClose}
                className='absolute w-screen h-screen inset-0 bg-black opacity-70'
            ></div>
            <aside className='bg-black h-screen fixed right-0 top-0 z-[9999] pl-6 pt-6'>
                <div className='pr-4 flex items-center justify-between gap-4'>
                    <Button variant='secondary' className='text-white'>
                        Connect
                    </Button>
                    <button
                        className='rounded-[6px] bg-blue h-12 w-12 flex items-center justify-center'
                        onClick={onClose}
                    >
                        <FaTimes className='text-white text-[16px]' />
                    </button>
                </div>
                <section className='flex flex-col mt-8'>
                    {navLinks.map(nav => (
                        <li
                            key={nav.label}
                            className='font-satoshi_regular text-white flex gap-1 font-medium py-4 border-y-grey-line border-y-[1px]'
                        >
                            <Link href={nav.comingSoon ? '#':'#creon-pass'}>{nav.label}</Link>
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
                </section>
            </aside>
        </>
    )
}
