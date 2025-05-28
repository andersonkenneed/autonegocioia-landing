/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3CDFFF',
          50: '#F2FCFF',
          100: '#E6F9FF',
          200: '#CCF4FF',
          300: '#B3EEFF',
          400: '#99E9FF',
          500: '#3CDFFF',
          600: '#00C4F5',
          700: '#0093B8',
          800: '#00627B',
          900: '#00313E'
        },
        secondary: '#0f172a',
        gray: {
          tech: '#404B5A'
        },
        success: '#22c55e'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'hero-pattern': "url('/bg-pattern.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
    }
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.glow': {
          textShadow: '0 0 15px rgba(60, 223, 255, 0.5)',
        },
        '.highlight': {
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-2px',
            left: '0',
            width: '100%',
            height: '2px',
            background: 'currentColor',
            transform: 'scaleX(0)',
            transformOrigin: 'right',
            transition: 'transform 0.3s ease',
          },
          '&:hover::after': {
            transform: 'scaleX(1)',
            transformOrigin: 'left',
          },
        },
      }
      addUtilities(newUtilities)
    },
  ],
};