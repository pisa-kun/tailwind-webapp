/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        body: "#050505",
        natsuha: "#b33e5c",
        "selected-text": "#A3A3FF",
        theme: "#783b4a",
        secondary: "#9e888e",
        badge: "#4f3e43",
        golang: "#4285F4",
        aws: "#FF9900",
        windows: "#0078D7",
        input: "#30282a",
        inputBorder: "#635357",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
}
