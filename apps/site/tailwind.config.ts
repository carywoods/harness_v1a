import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#007AFF', // System Blue
          charcoal: '#121212', // Deep Charcoal
        },
      },
      letterSpacing: {
        tighter: '-0.04em',
      },
    },
  },
  plugins: [],
};
export default config;
