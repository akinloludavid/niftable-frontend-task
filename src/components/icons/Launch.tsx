import React from 'react'

const Launch = ({ active = true }: { active?: boolean }) => {
    return (
        <svg
            width='100'
            height='114'
            viewBox='0 0 100 114'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <g clip-path='url(#clip0_14_106)'>
                <path
                    d='M14.0288 93.4964L6.69545 89.3164L6.94305 88.882L3.27639 86.792C1.55983 85.8136 0.5 83.9896 0.5 82.0137V77.8448H0V69.5069H0.5V61.169H0V52.831H0.5V44.4931H0V36.1552H0.5V31.9863C0.5 30.0104 1.55983 28.1864 3.27638 27.208L6.94305 25.118L6.69545 24.6836L14.0288 20.5036L14.2764 20.938L21.6097 16.758L21.3621 16.3236L28.6954 12.1436L28.9431 12.578L36.2764 8.39798L36.0288 7.96359L43.3621 3.78359L43.6097 4.21798L47.2764 2.12798C48.9646 1.16568 51.0354 1.16568 52.7236 2.12798L56.3903 4.21798L56.6379 3.78359L63.9712 7.96359L63.7236 8.39798L71.0569 12.578L71.3046 12.1436L78.6379 16.3236L78.3903 16.758L85.7236 20.938L85.9712 20.5036L93.3046 24.6836L93.0569 25.118L96.7236 27.208C98.4402 28.1864 99.5 30.0104 99.5 31.9863V36.1552H100V44.4931H99.5V52.831H100V61.169H99.5V69.5069H100V77.8448H99.5V82.0137C99.5 83.9896 98.4402 85.8136 96.7236 86.792L93.057 88.882L93.3046 89.3164L85.9712 93.4964L85.7236 93.062L78.3903 97.242L78.6379 97.6764L71.3046 101.856L71.0569 101.422L63.7236 105.602L63.9712 106.036L56.6379 110.216L56.3903 109.782L52.7236 111.872C51.0354 112.834 48.9646 112.834 47.2764 111.872L43.6097 109.782L43.3621 110.216L36.0288 106.036L36.2764 105.602L28.9431 101.422L28.6954 101.856L21.3621 97.6764L21.6097 97.242L14.2764 93.062L14.0288 93.4964Z'
                    stroke='url(#paint0_linear_14_106)'
                    stroke-dasharray='8 8'
                />
                <path
                    d='M16 41.5204C16 39.3467 17.1756 37.343 19.0731 36.2827L47.0731 20.6356C48.892 19.6192 51.108 19.6192 52.9269 20.6356L80.9269 36.2827C82.8244 37.343 84 39.3467 84 41.5204V72.4796C84 74.6533 82.8244 76.657 80.9269 77.7173L52.9269 93.3644C51.108 94.3808 48.892 94.3808 47.0731 93.3644L19.0731 77.7173C17.1756 76.657 16 74.6533 16 72.4796V41.5204Z'
                    fill={active ? 'white' : '#13171D'}
                />
                <path
                    opacity={active ? '1' : '0.1'}
                    d='M22 45.0366C22 42.8543 23.1849 40.8441 25.0941 39.7872L47.0941 27.6086C48.9021 26.6078 51.0979 26.6078 52.9059 27.6086L74.9059 39.7872C76.8151 40.8441 78 42.8543 78 45.0366V68.9634C78 71.1457 76.8151 73.1559 74.9059 74.2128L52.9059 86.3914C51.0979 87.3922 48.9021 87.3922 47.0941 86.3914L25.0941 74.2128C23.1849 73.1559 22 71.1457 22 68.9634V45.0366Z'
                    fill={active ? '#13171D' : 'white'}
                />
                <path
                    d='M61.8737 45.3257C61.864 45.2782 61.8409 45.2346 61.8072 45.1998C61.7735 45.1651 61.7306 45.1406 61.6836 45.1294C58.5458 44.3616 51.2959 47.0978 47.368 51.0277C46.6674 51.7232 46.0287 52.4786 45.4592 53.2851C44.2479 53.1779 43.0367 53.2674 42.0043 53.7178C39.0916 55.001 38.2436 58.3491 38.0073 59.7893C37.9939 59.8682 37.999 59.949 38.0221 60.0256C38.0452 60.1021 38.0857 60.1722 38.1405 60.2304C38.1953 60.2887 38.2628 60.3333 38.3378 60.361C38.4127 60.3887 38.4931 60.3986 38.5725 60.3899L43.2499 59.8735C43.2532 60.2265 43.2745 60.579 43.3136 60.9298C43.3372 61.1734 43.4452 61.4011 43.619 61.5733L45.4303 63.3819C45.6025 63.5556 45.8298 63.6637 46.0732 63.6875C46.4217 63.7266 46.772 63.7479 47.1226 63.7514L46.6094 68.4271C46.6008 68.5066 46.6108 68.5869 46.6385 68.6619C46.6662 68.7369 46.7108 68.8044 46.7689 68.8592C46.8271 68.914 46.8971 68.9546 46.9735 68.9778C47.0499 69.0009 47.1307 69.0061 47.2094 68.9928C48.6457 68.7622 51.9966 67.9134 53.2711 64.998C53.7211 63.9648 53.8133 62.7583 53.7093 61.5518C54.5171 60.9818 55.2737 60.3423 55.9706 59.6408C59.9109 55.7168 62.6291 48.6223 61.8737 45.3257ZM52.0395 54.9597C51.6797 54.5998 51.4346 54.1412 51.3353 53.6419C51.2359 53.1426 51.2867 52.625 51.4813 52.1546C51.6759 51.6842 52.0055 51.2821 52.4284 50.9992C52.8513 50.7164 53.3485 50.5654 53.8572 50.5654C54.3659 50.5654 54.8631 50.7164 55.286 50.9992C55.7089 51.2821 56.0385 51.6842 56.2331 52.1546C56.4277 52.625 56.4785 53.1426 56.3791 53.6419C56.2798 54.1412 56.0347 54.5998 55.6749 54.9597C55.4363 55.1988 55.153 55.3886 54.8411 55.518C54.5292 55.6474 54.1948 55.7141 53.8572 55.7141C53.5195 55.7141 53.1852 55.6474 52.8733 55.518C52.5614 55.3886 52.2781 55.1988 52.0395 54.9597Z'
                    fill='white'
                />
                <path
                    d='M45.5834 64.4688C45.2837 64.7691 44.8031 64.8861 44.2246 64.9862C42.9249 65.2077 41.7772 64.0844 42.0106 62.7702C42.0998 62.272 42.3633 61.5737 42.5274 61.4096C42.5632 61.3744 42.5871 61.3289 42.5956 61.2794C42.6041 61.2299 42.5967 61.1789 42.5746 61.1338C42.5525 61.0887 42.5168 61.0517 42.4725 61.0281C42.4282 61.0045 42.3775 60.9954 42.3278 61.0022C41.601 61.0911 40.9248 61.4207 40.4069 61.9384C39.1214 63.2252 39 68 39 68C39 68 43.7768 67.8786 45.0623 66.5918C45.5816 66.0743 45.9115 65.3969 45.999 64.669C46.0192 64.4404 45.7409 64.3042 45.5834 64.4688Z'
                    fill='white'
                />
            </g>
            <defs>
                <linearGradient
                    id='paint0_linear_14_106'
                    x1='7.45058e-07'
                    y1='57'
                    x2='100'
                    y2='57'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop stop-color='#3D8BFF' />
                    <stop offset='1' stop-color='#AB23FF' />
                </linearGradient>
                <clipPath id='clip0_14_106'>
                    <rect width='100' height='114' fill='white' />
                </clipPath>
            </defs>
        </svg>
    )
}

export default Launch
