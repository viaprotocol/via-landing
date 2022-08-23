const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/views/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    boxShadow: {
      black: '0 0 0 2px #212325',
      gray: '0 0 0 2px #21232514',
      bigGray: '0 0 0 4px #11121514',
      darkgray: '0 0 0 2px #21232514',
      xl: '0 4px 24px rgba(33, 35, 37, 0.12)',
      lg: '0 2px 16px rgba(0, 0, 0, 0.08)',
      md: '0 2px 4px 0 rgba(33, 35, 37, 0.08)'
    },
    extend: {
      spacing: {
        modal: '640px'
      },
      borderWidth: {
        6: '6px'
      },
      fontSize: {
        '12': '12px',
        '13': '13px',
        '15': '15px',
        '16': '16px',
        '3xl': '28px'
      },
      colors: {
        current: 'currentColor',
        green: {
          // todo: remove various green
          // only (34, 208, 102, *) will be used
          ...colors.emerald,
          100: '#22D066',
          200: '#03D954',
          light: '#61bb80',
          DEFAULT: '#418859',

          640: 'rgba(34, 208, 102, 0.64)'
        },
        blue: '#3F5DFF',
        coal: {
          DEFAULT: '#111215',
          80: 'rgba(17, 18, 21, 0.08)',
          120: 'rgba(17, 18, 21, 0.12)',
          160: 'rgba(17, 18, 21, 0.16)',
          240: 'rgba(17, 18, 21, 0.24)',
          500: 'rgba(17, 18, 21, 0.5)',
          640: 'rgba(17, 18, 21, 0.64)',
          800: 'rgba(17, 18, 21, 0.8)'
        },
        black: {
          DEFAULT: '#212325',
          40: 'rgba(33, 35, 37, 0.04)',
          80: 'rgba(33, 35, 37, 0.08)',
          120: 'rgba(33, 35, 37, 0.12)',
          160: 'rgba(33, 35, 37, 0.16)',
          240: 'rgba(33, 35, 37, 0.24)',
          400: 'rgba(33, 35, 37, 0.4)',
          500: 'rgba(33, 35, 37, 0.5)',
          640: 'rgba(33, 35, 37, 0.64)',
          800: 'rgba(33, 35, 37, 0.8)'
        },
        white: {
          DEFAULT: '#FFFFFF',
          40: 'rgba(255, 255, 255, 0.04)',
          80: 'rgba(255, 255, 255, 0.08)',
          120: 'rgba(255, 255, 255, 0.12)',
          160: 'rgba(255, 255, 255, 0.16)',
          240: 'rgba(255, 255, 255, 0.24)',
          400: 'rgba(255, 255, 255, 0.4)',
          480: 'rgba(255, 255, 255, 0.48)',
          500: 'rgba(255, 255, 255, 0.5)',
          640: 'rgba(255, 255, 255, 0.64)',
          800: 'rgba(255, 255, 255, 0.8)'
        },
        red: {
          DEFAULT: '#fd4a4a',
          light: 'rgba(253, 74, 74, 0.32)',
          640: 'rgba(253, 74, 74, 0.64)'
        },
        gray: {
          DEFAULT: '#565859',
          100: 'rgba(33, 35, 37, 0.04)',
          200: 'rgba(33, 35, 37, 0.08)',
          300: 'rgba(33, 35, 37, 0.12)'
        },
        violet: {
          DEFAULT: '#6F3FF5',
          dark: '#4C2AAA'
        },
        turquoise: {
          DEFAULT: '#00FEC0'
        },
        invalid: {
          DEFAULT: 'rgba(253, 74, 74, 0.64)'
        },
        activated: {
          DEFAULT: '#03D954'
        },
        success: {
          DEFAULT: 'rgba(153, 247, 189, 1)',
          800: 'rgba(153, 247, 189, 0.8)'
        },
        dangerous: {
          DEFAULT: 'rgba(255, 171, 171, 1)',
          800: 'rgba(255, 171, 171, 0.8)'
        }
      },
      backgroundImage: {
        'green-gradient': 'linear-gradient(to right, #1FAB58, #22D066, #1FAB58)',
        'action-gradient':
          'radial-gradient(50% 50% at 50% 50%, rgba(34, 208, 102, 0) 72.06%, #22D066 72.06%, rgba(34, 208, 102, 0) 100%)',
        'success-gradient': 'linear-gradient(60.27deg, rgba(0, 240, 255, 0.5) 27.73%, #00FF66 62.84%)',
        'error-gradient': 'linear-gradient(60.27deg, rgba(0, 102, 255, 0.3) 27.73%, #FF0909 62.84%)',
        'history-gradient': 'linear-gradient(180deg, rgba(17, 18, 21, 0.04) 0, rgba(17, 18, 21, 0) 40px)',
        'history-gradient-dark': 'linear-gradient(180deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0) 100%)'
      },
      height: {
        17: '68px'
      },
      width: {
        150: '600px',
        300: '300px'
      },
      keyframes: {
        loading: {
          '0%': {
            strokeDashoffset: 100,
            stroke: '#61BB80'
          },
          '100%': {
            strokeDashoffset: 25,
            stroke: '#61BB80'
          }
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        slide: {
          '0%': { transform: 'translateX(-200%)' },
          '100%': { transform: 'translateX(0)' }
        },
        slideBottom: {
          '0%': { transform: 'translateX(-50%) translateY(100%)' },
          '100%': { transform: 'translateX(-50%) translateY(0)' }
        },
        progress: {
          '0%': { 'background-position-x': '0%' },
          '100%': { 'background-position-x': '200%' }
        },
        progressHide: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 }
        },
        opacity: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        opacityOpen: {
          '0%': { opacity: 0, transform: 'translateY(-8px)' },
          '50%': { opacity: 0, transform: 'translateY(-8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        opacityClose: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(-8px)' }
        },
        fillBg: {
          '0%': { width: '2%' },
          '100%': { width: '85%' }
        },
        fillBgComplete: {
          '0%': { width: 'var(--computed-width)' },
          '100%': { width: '100%' }
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-100%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' }
        },
        action: {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
          '35%': { transform: 'scale(1.3)', opacity: 0.1 }
        },
        gradientMove: {
          '0%': {
            backgroundPosition: '10% 0%'
          },
          '25%': {
            backgroundPosition: '91% 100%'
          },
          '50%': {
            backgroundPosition: '10% 0%'
          },
          '100%': { backgroundPosition: '10% 0%' }
        },
        bgPartOpacity: {
          '0%': { opacity: '20%' },
          '100%': { opacity: '50%' }
        },
        bgPartPosition: {
          '0%': { transform: 'translate(-150px, 0px) scale(0.8)' },
          '25%': { transform: 'translate(0px, 150px) scale(1.0)' },
          '50%': { transform: 'translate(150px, 0px) scale(1.2)' },
          '75%': { transform: 'translate(0px, -150px) scale(1.0)' },
          '100%': { transform: 'translate(-150px, -0px) scale(0.8)' }
        }
      },
      animation: {
        loading: 'loading 15s ease-in-out infinite',
        rotate: 'rotate 0.8s linear',
        slide: 'slide 0.4s ease-out',
        slideBottom: 'slideBottom 0.4s ease-out',
        pulse: 'pulse 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        progress: 'progress 1.5s linear infinite',
        progressHide: 'progressHide 150ms ease-in 150ms 1 normal forwards',
        opacity: 'opacity 0.4s ease-out',
        opacityOpen: 'opacityOpen 0.8s ease-out forwards',
        opacityClose: 'opacityClose 0.4s ease-out forwards',
        fill: 'fillBg var(--loading-time) cubic-bezier(0.4, 0, 0.6, 1) forwards, gradientMove 2.4s linear infinite',
        completedFill: 'fillBgComplete 3s cubic-bezier(0.4, 0, 0.6, 1) forwards',
        action: 'action 1.3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        appear: 'opacity 0.25s linear',
        bgPart1:
          'bgPartOpacity 8s ease-in-out -8s infinite alternate, bgPartPosition 20s ease-in-out -3s infinite alternate',
        bgPart2:
          'bgPartOpacity 8s ease-in-out 0s infinite alternate, bgPartPosition 20s ease-in-out -17s infinite alternate',
        bgPart3:
          'bgPartOpacity 8s ease-in-out -4s infinite alternate, bgPartPosition 20s ease-in-out -14s infinite alternate',
        bgPart4:
          'bgPartOpacity 8s ease-in-out -12s infinite alternate, bgPartPosition 20s ease-in-out -7s infinite alternate'
      },
      screens: {
        screen1180: { max: '1180px' }
      },
      transitionProperty: {
        height: 'max-height'
      },
      zIndex: {
        '-10': '-10'
      }
    }
  },
  plugins: [],
}
