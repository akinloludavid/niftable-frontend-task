import { classNames } from '@/utils/helpers'
import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    variant?: 'primary' | 'secondary'
    className?: string
}
const Button = ({ children, variant, className }: ButtonProps) => {
    const variantObj = {
        primary:
            'bg-gradient-to-r from-[#3D8BFF] via-[#AB23FF] to-[#AB23FF] rounded-[6px] text-[18px] font-satoshi_bold text-white h-[54px] min-w-[320px]',
        secondary:
            'font-satoshi_bold text-[18px] rounded-[6px] border-[2px] border-white px-[30px] h-12 ',
    }
    return (
        <button
            className={classNames(
                className,
                variant ? variantObj[variant] : '',
            )}
        >
            {children}
        </button>
    )
}

export default Button
