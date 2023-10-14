import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-bg': "url('../../public/bg-gradient.svg')",
      },
      colors: {
        black: '#111111',
        gray: '#656262',
        lightgray: '#EFEFEF',
        white: '#FFFFFF',

        blue: '#009AF1',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      slg: '983px',
      lg: '976px',
      lgp: '1024px',
      xl: '1440px',
    },
  },
  plugins: [],
}
export default config
