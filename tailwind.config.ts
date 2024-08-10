import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      accent: '#800000',
      dark: '#001126',
      light: '#b3c9d9',
      primary: '#243949',
      secondary: '#489eba',
      white: '#f5f5f5',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      dropShadow: {
        header: '3px 3px 3px rgba(128, 0, 0)',
      },
    },
  },
  plugins: [],
} satisfies Config;

//   --border-radius: 10px;
