/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		fontFamily: {
		},
		extend: {},
		
	},
	plugins: [require("daisyui")],
}
