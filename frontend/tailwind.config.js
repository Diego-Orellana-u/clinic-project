/** @type {import('tailwindcss').Config} */
import formsPlugin from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "1/5": "1fr 5fr",
      },
    },
    fontFamily: {
      rubik: ["rubik"],
    },
  },
  plugins: [formsPlugin],
};
