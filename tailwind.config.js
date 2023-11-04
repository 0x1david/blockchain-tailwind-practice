/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./*.html', './*.js'],
  theme: {
    extend: {  
        colors: {
            'def-blue': '#0A1828',
            'def-cyan': '#178582',
            'def-gold': '#BFA181',
        },
      },
  },
  plugins: [],
}

