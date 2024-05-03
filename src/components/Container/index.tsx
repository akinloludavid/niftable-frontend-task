import { classNames } from '@/utils/helpers'
import { IChildren } from '@/utils/types'

type IContainer = {
    className?: string
} & IChildren
export default function Container({ children, className = '' }: IContainer) {
    return (
        <div
            className={classNames(
                'bg-black py-[120px] xl:py-[136px] xl:px-[140px] md:px-[120px]',
                className,
            )}
        >
            {children}
        </div>
    )
}
