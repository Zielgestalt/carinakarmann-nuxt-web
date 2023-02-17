const { normalize } = require('path')
const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')
const theme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd'
    ],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active']
  },
  theme: {
    fontFamily: {
      display: ['"Dancing Script"', 'sans-serif'],
      body: ['"Open Sans"', 'sans-serif'],
      sans: ['"Open Sans"', 'sans-serif']
      // 'sans': ['"Source Sans Pro"', "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif"]
    },
    // fontSize: {
    //   DEFAULT: '1rem',
    //   xs: '0.75rem',
    //   sm: '0.875rem',
    //   base: '1rem',
    //   lg: '1.125rem',
    //   xl: '1.25rem',
    //   '2xl': '1.5rem',
    //   '3xl': 'clamp(1.75rem, 1vw + 1rem, 2rem)',
    //   '4xl': 'clamp(2.25rem, 3vw + 1rem, 3.5rem)',
    //   '5xl': 'clamp(3rem, 8vw + 1rem, 6.875rem)',
    // },
    colors: {
      white: colors.white,
      black: colors.black,
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        DEFAULT: '#ED2883',
        inverse: '#ffffff',
        hover: '#CA1167',
        50: "#FDE7F2",
        100: "#FBD5E7",
        200: "#F8AACF",
        300: "#F480B6",
        400: "#F0519B",
        500: "#ED2883",
        600: "#CA1167",
        700: "#9B0D4F",
        800: "#680935",
        900: "#34041A"
      },
      secondary: {
        DEFAULT: '#69D5FF',
        inverse: '#ffffff',
        hover: '#009AD6',
        50: "#F0FBFF",
        100: "#E0F6FF",
        200: "#C2EEFF",
        300: "#A3E5FF",
        400: "#85DCFF",
        500: "#69D5FF",
        600: "#1FBFFF",
        700: "#009AD6",
        800: "#00668F",
        900: "#003347"
      },
      gray: {
        DEFAULT: '#36362C',
        inverse: '#ffffff',
        hover: '#919178',
        50: "#EDEDE9",
        100: "#DADAD2",
        200: "#B6B6A5",
        300: "#919178",
        400: "#626250",
        500: "#36362C",
        600: "#2A2A22",
        700: "#22221B",
        800: "#161612",
        900: "#0B0B09"
      },
      danger: colors.red,
      success: colors.green,
      warning: colors.yellow
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    extend: {
      fontSize: {
        h1: 'clamp(3rem, 8vw + 1rem, 4.875rem)',
        h2: 'clamp(2.25rem, 4vw + 1rem, 2.5rem)',
        h3: 'clamp(1.5rem, 1vw + 1rem, 2rem)',
        h4: '1.5rem'
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            lineHeight: '1.35',
            h1: {
              fontSize: theme('fontSize.h1'),
              lineHeight: '1',
              fontWeight: 400,
              fontFamily: theme('fontFamily.display').join(', '),
            },
            h2: {
              fontSize: theme('fontSize.h2'),
              fontWeight: 400,
              lineHeight: '1',
              fontFamily: theme('fontFamily.display').join(', '),
            },
            h3: {
              fontSize: theme('fontSize.h3'),
              fontWeight: 400,
              lineHeight: '1',
              fontFamily: theme('fontFamily.body').join(', '),
            },
            h4: {
              fontSize: theme('fontSize.h4'),
              lineHeight: '1',
              fontFamily: theme('fontFamily.body').join(', '),
              textTransform: 'uppercase'
            },
            '--tw-prose-bullets': theme('colors.primary[500]')
          }
        },
        xl: {
          css: {
            lineHeight: '1.25',
            // h1: {
            //   fontSize: theme('fontSize.h1'),
            //   lineHeight: '0.875',
            //   fontFamily: theme('fontFamily.headline').join(', '),
            // },
            // h2: {
            //   fontSize: theme('fontSize.h2'),
            //   lineHeight: '1',
            //   fontFamily: theme('fontFamily.display').join(', '),
            // },
            // h3: {
            //   fontSize: theme('fontSize.h3'),
            //   lineHeight: '1',
            //   fontFamily: theme('fontFamily.body').join(', '),
            // },
            // h4: {
            //   fontSize: theme('fontSize.h4'),
            //   lineHeight: '1',
            //   fontFamily: theme('fontFamily.body').join(', '),
            //   textTransform: 'uppercase'
            // }
          }
        }
      })
    }
  },

  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: '17px' }
      })
    }),
    plugin(function ({ addComponents, config }) {
      // console.log('Config: ', config('theme.colors.primary'))
      addComponents({
        // Buttons
        '.btn': {
          position: 'relative',
          border: '1px solid currentColor',
          padding: '1.25rem 1.5rem',
          borderRadius: '9999px',
          fontWeight: '300',
          textAlign: 'center',
          display: 'inline-block',
          letterSpacing: '0.1em',
          // fontFamily: config('theme.fontFamily.display').join(', '),
          textTransform: 'uppercase',
          textDecoration: 'none',
          cursor: 'pointer',
          transition: 'background-color .25s, border-color .25s, color .25s',
          '&:disabled': {
            opacity: '0.8',
            cursor: 'not-allowed'
          },
          '&.btn-small': {
            padding: '.75rem 1rem',
            fontSize: '0.875em'
          },
          '&.btn-large': {
            fontSize: '1.25em'
          },
        },
        '.btn-primary': {
          backgroundColor: config('theme.colors.primary.DEFAULT'),
          borderColor: config('theme.colors.primary.DEFAULT'),
          color: config('theme.colors.primary.inverse'),
          '&.outlined': {
            borderColor: config('theme.colors.primary.hover'),
            color: config('theme.colors.primary.hover'),
            backgroundColor: config('theme.colors.primary.inverse')
          },
          '&:hover': {
            borderColor: config('theme.colors.primary.hover'),
            backgroundColor: config('theme.colors.primary.hover'),
            color: config('theme.colors.primary.inverse')
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            width: '50%',
            height: '2rem',
            borderRadius: '100%',
            backgroundColor: config('theme.colors.primary.DEFAULT'),
            top: '-12px',
            right: '8%'
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '50%',
            height: '2rem',
            borderRadius: '100%',
            backgroundColor: config('theme.colors.primary.DEFAULT'),
            bottom: '-12px',
            left: '8%'
          }
        },
        '.btn-secondary': {
          backgroundColor: config('theme.colors.secondary.DEFAULT'),
          borderColor: config('theme.colors.secondary.DEFAULT'),
          color: config('theme.colors.secondary.inverse'),
          '&.outlined': {
            borderColor: config('theme.colors.secondary.hover'),
            color: config('theme.colors.secondary.hover'),
            backgroundColor: config('theme.colors.secondary.inverse')
          },
          '&:hover': {
            borderColor: config('theme.colors.secondary.hover'),
            backgroundColor: config('theme.colors.secondary.hover'),
            color: config('theme.colors.secondary.inverse')
          }
        }
      })
    })
  ]
}
