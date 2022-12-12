module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        64: "64px",
        150: "150px",
        240: "240px",
        280: "280px",
      },
      height: {
        45: "45px",
        80: "80px",
        160: "160px",
      },
      minWidth: {
        210: "210px",
      },
      screens: {
        xs: "450px",
        sm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1900px",
      },
      colors: {
        primary: "#848484",
        primaryTextWhite: '#f1f1f1',
        themeGreen: '#48e12e',
        textColor: "#515151",
        headingColor: "#2e2e2e",
        inputPlaceholder: '#848484',
        primaryGreen: '#49e12e',
        inputBg: 'rgba(0,0,0,0.5)',
        leftBg: 'rgba(34,34,34,0.6)',
        boxShadow1: '0px 0px 20px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}