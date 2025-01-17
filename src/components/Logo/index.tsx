import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
    return (
        <Link href='/#'>
            <Image
                src='/logo.svg'
                alt='Creon logo'
                width={140}
                height={39}
                className=''
            />
        </Link>
    )
}
