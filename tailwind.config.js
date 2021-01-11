module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        background: "#222831",
        scdBackground:  "#30475e",
        main:  "#f2a365",
        text:  "#ececec",
      },
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
}
