module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"], // Ensure JSX files are included
  theme: {
    extend: {
      fontFamily:{
        workSans: ["Work Sans", "sans-serif"],
      },
      backgroundImage:{
        'image1':"linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/src/Components/Images/sug1.jpeg')",
        'image2':"linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/src/Components/Images/sug2.jpeg')",
        'image3':"linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/src/Components/Images/sug3.jpeg')",
        'image4':"linear-gradient(rgba(0,0,0,0.68), rgba(0,0,0,0.5)), url('/src/Components/Images/main.jpeg')",
        'image5':"linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url('/src/Components/Images/bg-mobile.jpeg')",
      },
    },
  },
  plugins: [],
};
