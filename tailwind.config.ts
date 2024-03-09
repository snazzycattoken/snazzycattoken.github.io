import { type Config } from 'tailwindcss'
import formsPlugin from '@tailwindcss/forms'
import headlessuiPlugin from '@headlessui/tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['1rem', { lineHeight: '1.5rem' }],
      sm: ['1.125rem', { lineHeight: '2rem' }],
      base: ['1.25rem', { lineHeight: '1.75rem' }],
      lg: ['1.5rem', { lineHeight: '2rem' }],
      xl: ['2rem', { lineHeight: '3rem' }],
      '2xl': ['2.5rem', { lineHeight: '3rem' }],
      '3xl': ['3rem', { lineHeight: '1' }],
      '4xl': ['3.75rem', { lineHeight: '1' }],
      '5xl': ['4.5rem', { lineHeight: '1' }],
      '6xl': ['6rem', { lineHeight: '1' }],
      '7xl': ['8rem', { lineHeight: '1' }],
      '8xl': ['10rem', { lineHeight: '1' }],
      '9xl': ['12rem', { lineHeight: '1' }],
    },
    extend: {
      animation: {
        'fade-in': 'fade-in 0.5s linear forwards',
        marquee: 'marquee var(--marquee-duration) linear infinite',
        'spin-slow': 'spin 4s linear infinite',
        'spin-slower': 'spin 6s linear infinite',
        'spin-reverse': 'spin-reverse 1s linear infinite',
        'spin-reverse-slow': 'spin-reverse 4s linear infinite',
        'spin-reverse-slower': 'spin-reverse 6s linear infinite',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      colors: ({ colors }) => ({
        gray: colors.neutral,
      }),
      fontFamily: {
        sans: 'var(--font-inter)',
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        marquee: {
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
        'spin-reverse': {
          to: {
            transform: 'rotate(-360deg)',
          },
        },
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
  },
  plugins: [formsPlugin, headlessuiPlugin],
} satisfies Config
