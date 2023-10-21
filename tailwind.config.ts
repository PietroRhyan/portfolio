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
        'text-gray': '#656262',
        'text-lightgray': '#B3B3B3',
        lightgray: '#EFEFEF',
        white: '#FFFFFF',

        blue: '#009AF1',
      },
      boxShadow: {
        photo: '-6px 6px 0 0 #EFEFEF',
        'experience-card': '5px 5px 16px 0 #18151520',
        'award-card': '-5px 5px 16px 0 #18151520',
      },
    },
    screens: {
      sm: '480px',
      'custom-sm': '510px',
      md: '768px',
      slg: '845px',
      lg: '976px',
      lgp: '1024px',
      'custom-lgp': '1135px',
      xl: '1440px',
    },
  },
  plugins: [],
}
export default config
