import { classNames } from '@/utils/helpers'
import { IChildren } from '@/utils/types'

type IContainer = {
    className?: string
} & IChildren
export default function Container({ children, className = '' }: IContainer) {
    return (
        <section
            className={classNames(
                'bg-black py-16 py-[120px] xl:py-[136px] xl:px-[140px] lg:px-[120px] md:px-[80px] px-6',
                className,
            )}
        >
            {children}
        </section>
    )
}
