import { classNames } from '@/utils/helpers'
import React from 'react'

export default function GradientText({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <span
            className={classNames(
                'bg-gradient-to-r from-[#3D8BFF] via-[#AB23FF] to-[#AB23FF]  text-transparent bg-clip-text',
                className,
            )}
        >
            {children}
        </span>
    )
}
