import Earning from '../icons/Earning'
import Launch from '../icons/Launch'
import Limitless from '../icons/Limitless'
import Profit from '../icons/Profit'

export const faqs = [
    {
        title: `Profitability and Growth`,
        details:
            'At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.',
        open: false,
        icon(active: boolean) {
            return <Profit active={active} />
        },
    },
    {
        title: `Transparent & Fair Decentralized Earnings`,
        details: `At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.`,
        open: false,
        icon(active: boolean) {
            return <Earning active={active} />
        },
    },
    {
        title: `Launching the future`,
        details: `At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.`,
        open: false,
        icon(active: boolean) {
            return <Launch active={active} />
        },
    },
    {
        title: `Limitless Possibilities of AI & Crypto`,
        details: `At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.`,
        open: false,
        icon(active: boolean) {
            return <Limitless active={active} />
        },
    },
]
