/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
			'forma': ['forma-djr-text'],
      'eaves': ['mr-eaves-sans'],
      'rubik': ['rubik']
		}
  },
  plugins: [],
}