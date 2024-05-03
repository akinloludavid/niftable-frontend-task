import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontWeight: {
                normal: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
                extrabold: '800',
            },
            fontFamily: {
                monument: [
                    'Monument',
                    {
                        fontFeatureSettings: '"cv11", "ss01"',
                        fontVariationSettings: '"opsz" 32',
                    },
                ],
                satoshi_bold: [
                    '"Satoshi-Bold", sans-serif',
                    {
                        fontFeatureSettings: '"cv11", "ss01"',
                        fontVariationSettings: '"opsz" 32',
                    },
                ],
                satoshi_medium: [
                    '"Satoshi-Medium"',
                    {
                        fontFeatureSettings: '"cv11", "ss01"',
                        fontVariationSettings: '"opsz" 32',
                    },
                ],
                satoshi_regular: [
                    '"Satoshi-Regular"',
                    {
                        fontFeatureSettings: '"cv11", "ss01"',
                        fontVariationSettings: '"opsz" 32',
                    },
                ],
            },
            colors: {
                white: '#ffffff',
                black: '#000000',
                purple: '#AB23FF',
            },

            spacing: {
                1: '4px',
                2: '8px',
                3: '12px',
                4: '16px',
                5: '20px',
                6: '24px',
                8: '32px',
                12: '48px',
                16: '64px',
                18: '72px',
                20: '84px',
                24: '96px',
                32: '128px',
            },
        },
    },
    plugins: [],
}
export default config
