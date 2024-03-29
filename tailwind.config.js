module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/typography"),
      // ...
    ],
    extend: {
      fontFamily: {
        ud: ["BIZ UDPGothic"],
        noto: ["Noto Sans JP"],
      },
      colors: {
        "company-black": "#070707",
      },
      backgroundImage: {
        "hero-monomonitoring": "url('/images/Monom/Top2.png')",
        "Intro-monomonitoring": "url('/images/Monom/Intro.png')",
        "Propose-monomonitoring": "url('/images/Monom/Propose.png')",
        "Content1-monomonitoring": "url('/images/Monom/thumbnail-1.png')",
        "Content2-monomonitoring": "url('/images/Monom/thumbnail-2.jpeg')",
        "hero-ichi": "url('/images/Ichi/Top.png')",
        "Tool-ichi": "url('/images/Ichi/Tool-bg-mini.png')",
        "Hito-top": "url('/images/Hito/Hito-top-mini.png')",
        "Hito-Price": "url('/images/Hito/Price-bg-mini.png')",
        "Home-bg": "url('/images/Home/tokyo.jpg')",
        "Home-contact": "url('/images/Home/contact-image-min-min.png')",
        "Company-bg": "url('/images/Company/company-bg-min.png')",
        "Job-hero": "url('/images/Job/job-hero-image.png')",
        "Job-aboutus-hero": "url('/images/Job/about-us.png')",
        "Job-solutions-hero": "url('/images/Job/solution-dark.png')",
        "Job-staff-hero": "url('/images/Job/staff.png')",
        "Job-system-hero": "url('/images/Job/system.png')",
        "Job-privacy-hero": "url('/images/Job/sky.png')",
        "Job-application-hero": "url('/images/Job/application-hero.png')",
        "sixdof-top-bg": "url('/images/Sixdof/top-6dof.png')",
        "sixdof-colorbit-bg": "url('/images/Home/colorbit.png')",
        "sixdof-vrk-bg": "url('/images/Sixdof/6dof-website.png')",
        "sixdof-content-bg": "url('/images/Sixdof/sixdof-white.png')",
      },
      animation: {
        "fade-in-bottom":
          "fade-in-bottom 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "fade-in-bottom2":
          "fade-in-bottom 2.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
      },
      keyframes: {
        "fade-in-bottom": {
          "0%": {
            transform: "translateY(50px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },

          "fade-in-bottom2": {
            "0%": {
              transform: "translateY(50px)",
              opacity: "0",
            },
            to: {
              transform: "translateY(0)",
              opacity: "1",
            },
          },
        },
      },
      plugins: [require("@tailwindcss/typography")],
    },
  },
};
