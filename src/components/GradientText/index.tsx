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
                'bg-gradient-to-r from-blue via-purple to-purple text-transparent bg-clip-text',
                className,
            )}
        >
            {children}
        </span>
    )
}
