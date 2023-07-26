/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }

  module.exports = {
    theme: {
      extend: {
        backgroundImage: {
          'hero-pattern': "url('/images/banner1.png')",
          'hero-pattern': "url('/images/banner2.png')",
          'hero-pattern': "url('/images/banner3.png')",
          'hero-pattern': "url('/images/banner4.png')",
        }
      }
    }
  }