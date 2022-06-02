module.exports = {
  mode: "jit",
  darkMode: false, 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    plugins: [
      require('@tailwindcss/forms'),
      // ...
    ],
    extend: {
      fontFamily: {
        ud: ["BIZ UDPGothic"],
        noto:["Noto Sans JP"],
      },
      colors:{
        'company-black': '#070707',
      },
      backgroundImage: {
        "hero-monomonitoring": "url('/images/Monom/Top2.png')",
        "Intro-monomonitoring": "url('/images/Monom/Intro.png')",
        "Propose-monomonitoring": "url('/images/Monom/Propose.png')",
        "Content1-monomonitoring": "url('/images/Monom/thumbnail-1.png')",
        "Content2-monomonitoring": "url('/images/Monom/thumbnail-2.jpeg')",
        "hero-ichi": "url('/images/Ichi/Top.png')",
        "Tool-ichi": "url('/images/Ichi/Tool-bg.png')",
        "Hito-top": "url('/images/Hito/Hito-top.jpeg')",
        "Hito-Price": "url('/images/Hito/Price-bg.png')",
        "Home-bg": "url('/images/Home/solution.png')",
        "Home-contact": "url('/images/Home/Contact-image.png')",
        "Cmpany-bg": "url('/images/Company/company-bg.jpeg')",
        "Home-bg51": "url('/images/Home/51.png')",
        "Home-bg52": "url('/images/Home/52.png')",
        "Home-bg53": "url('/images/Home/53.png')",


      },
    },
  },
  plugins: [],
}