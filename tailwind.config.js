/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#DEDFE2',
      },
      boxShadow: {
        'custom-bottom': '0px 0px 12px rgba(16, 38, 73, 0.06)',
      },
      backgroundImage: {
        'custom-gradient': "linear-gradient(81.62deg, #2870EA 8.72%, #1B4AEF 85.01%)",
      },
    },
  },
};
