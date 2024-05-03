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
        <div
            className={classNames(
                'bg-gradient-to-r from-[#3D8BFF] via-[#AB23FF] to-[#AB23FF] font-satoshi_regular text-transparent bg-clip-text',
                className,
            )}
        >
            <p>{children}</p>
        </div>
    )
}
