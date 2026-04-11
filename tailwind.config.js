/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './datenschutz.html',
    './impressum.html',
    './presse.html',
    './rueckgabe.html',
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gantari', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        pax: {
          blue:   '#342268',
          purple: '#662D91',
          gold:   '#F7941D',
          gold2:  '#F99C25',
          deep:   '#342268',
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        pax: {
          primary:   '#342268',
          secondary: '#662D91',
          accent:    '#F7941D',
          neutral:   '#1a1a2e',
          'base-100': '#ffffff',
          info:    '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error:   '#f87272',
        },
      },
      'light',
    ],
    defaultTheme: 'pax',
    logs: false,
  },
}
