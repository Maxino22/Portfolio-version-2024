/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
	darkMode: 'class',
	theme: {
		extend: {
			spacing: {
				'9/16': '56.25%',
				0.75: '0.1875rem',
				'content-sm': 'calc(100vh - 4.5rem)',
				content: 'calc(100vh - 4rem)',
			},
			lineHeight: {
				11: '2.75rem',
				12: '3rem',
				13: '3.25rem',
				14: '3.5rem',
			},
			letterSpacing: {
				tightest: '-.075em',
			},
			fontSize: {
				'8.5xl': '7rem',
			},
			fontFamily: {
				sans: ['Be Vietnam Pro', ...defaultTheme.fontFamily.sans],
			},
			gradientColorStops: {
				// https://coolors.co/2d00f7-6a00f4-8900f2-a100f2-b100e8-bc00dd-d100d1-db00b6-e500a4-f20089
				'gradient-1-start': '#66bb6a',
				'gradient-1-end': '#26a69a',
				'gradient-2-start': '#ff4d4d',
				'gradient-2-end': '#f9cb28',
				'gradient-3-start': '#A100F2',
				'gradient-3-end': '#2D00F7',
			},
			colors: {
				// Generated from https://colors.eva.design/
				primary: {
					100: '#DAFBDF',
					200: '#B7F7C8',
					300: '#8FE9AF',
					400: '#6DD49C',
					500: '#41B883',
					600: '#2F9E77',
					700: '#20846B',
					800: '#146A5E',
					900: '#0C5854',
				},
				success: {
					100: '#E4FCDB',
					200: '#C3FAB9',
					300: '#99F193',
					400: '#74E377',
					500: '#49D159',
					600: '#35B34F',
					700: '#249647',
					800: '#17793D',
					900: '#0E6437',
				},
				info: {
					100: '#CCFCFF',
					200: '#99F2FF',
					300: '#66E2FF',
					400: '#3FCEFF',
					500: '#00AEFF',
					600: '#0087DB',
					700: '#0065B7',
					800: '#004793',
					900: '#00337A',
				},
				warning: {
					100: '#FEF1CF',
					200: '#FDE09F',
					300: '#FBC96F',
					400: '#F8B24B',
					500: '#F48E11',
					600: '#D1700C',
					700: '#AF5508',
					800: '#8D3D05',
					900: '#752D03',
				},
				danger: {
					100: '#FFDCD3',
					200: '#FFB1A8',
					300: '#FF7D7C',
					400: '#FF5C6A',
					500: '#FF264D',
					600: '#DB1B50',
					700: '#B7134F',
					800: '#930C4A',
					900: '#7A0747',
				},
				'spotify-green': '#1DB954',
				green: colors.emerald,
				yellow: colors.amber,
				purple: colors.violet,
				gray: colors.neutral,
			},
			keyframes: {
				shrink: {
					'0% , 100%': {
						height: '0.75rem',
					},
					'50%': {
						height: '0.375rem',
					},
				},
				expand: {
					'0% , 100%': {
						height: '0.375rem',
					},
					'50%': {
						height: '0.75rem',
					},
				},
				'gradient-foreground-1': {
					'0%, 16.667%, 100%': {
						opacity: 1,
					},
					'33.333%, 83.333%': {
						opacity: 0,
					},
				},
				'gradient-background-1': {
					'0%, 16.667%, 100%': {
						opacity: 0,
					},
					'25%, 91.667%': {
						opacity: 1,
					},
				},
				'gradient-foreground-2': {
					'0%, 100%': {
						opacity: 0,
					},
					'33.333%, 50%': {
						opacity: 1,
					},
					'16.667%, 66.667%': {
						opacity: 0,
					},
				},
				'gradient-background-2': {
					'0%, to': {
						opacity: 1,
					},
					'33.333%, 50%': {
						opacity: 0,
					},
					'25%, 58.333%': {
						opacity: 1,
					},
				},
				'gradient-foreground-3': {
					'0%, 50%, 100%': {
						opacity: 0,
					},
					'66.667%, 83.333%': {
						opacity: 1,
					},
				},
				'gradient-background-3': {
					'0%, 58.333%, 91.667%, 100%': {
						opacity: 1,
					},
					'66.667%, 83.333%': {
						opacity: 0,
					},
				},
			},
			animation: {
				shrink: 'shrink 1.5s infinite',
				expand: 'expand 1.5s infinite',
				'gradient-background-1': 'gradient-background-1 8s infinite',
				'gradient-foreground-1': 'gradient-foreground-1 8s infinite',
				'gradient-background-2': 'gradient-background-2 8s infinite',
				'gradient-foreground-2': 'gradient-foreground-2 8s infinite',
				'gradient-background-3': 'gradient-background-3 8s infinite',
				'gradient-foreground-3': 'gradient-foreground-3 8s infinite',
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		plugin(function ({ addVariant, e, postcss }) {
			addVariant('firefox', ({ container, separator }) => {
				const isFirefoxRule = postcss.atRule({
					name: '-moz-document',
					params: 'url-prefix()',
				})
				isFirefoxRule.append(container.nodes)
				container.append(isFirefoxRule)
				isFirefoxRule.walkRules((rule) => {
					rule.selector = `.${e(
						`firefox${separator}${rule.selector.slice(1)}`
					)}`
				})
			})
		}),
	],
}
