import type { Config } from 'tailwindcss'

import fluid, { extract, fontSize, screens } from 'fluid-tailwind'

const config: Config = {
  content: {
    extract,
    files: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
  },
  plugins: [fluid],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
    fontSize,
    screens,
  },
  variants: {
    extend: {
      translate: ['group-hover'],
    },
  },
}

export default config
