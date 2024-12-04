import { AstroBlogTailwindPaths } from 'package-name/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
        './src/**/*.{astro,html,jsx}',
        ...AstroBlogTailwindPaths,
    ],
	theme: {
		extend: {},
	},
	plugins: [],
};
