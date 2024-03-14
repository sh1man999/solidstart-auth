/** @type {import('tailwindcss').Config} */
//https://daisyui.com/docs/colors/
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito"', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#4361ee',
          //"primary-content": "#ffffff",
          secondary: '#EFF4FF',
          //"secondary-content": "#E0E6ED",
          accent: '#888EA8',
          //"accent-content": "#888EA8",
          neutral: '#3b3f5c',
          //"neutral-content": "#3b3f5c",
          'base-100': '#fafafa', // Когда поле вводиться //#ffffff
          'base-200': '#ffffff',
          'base-300': '#E0E6ED',
          //"base-300": "#fafafa",
          //"base-content": "#fafafa",
          info: '#2196f3',
          'info-content': '#2196f3',
          success: '#00ab55',
          'success-content': '#ffffff',
          warning: '#e2a03f',
          'warning-content': '#ffffff',
          error: '#e7515a',
          'error-content': '#ffffff',
        },
      },
    ],
  },
  plugins: [require('daisyui'), require('@kobalte/tailwindcss')],
};
