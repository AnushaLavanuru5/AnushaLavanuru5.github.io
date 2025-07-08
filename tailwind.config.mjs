/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['media'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			screens: {
				sm: "100%",
				md: "100%",
				lg: "520px",
				xl: "620px"
			},
			padding: {
                DEFAULT: '2rem', 
                sm: '1rem',      
                md: '2rem',      
                lg: '2rem',      
                xl: '2rem',     
            },
		},
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
			colors: {
				// Light mode colors
				'light-theme': '#E9EBEC',
				'primary-light': '#D58A94',
				'primary-hover-light': '#B06A73',

				// Dark mode colors
				'dark-theme': '#0C151D',
				'primary-dark': '#D58A94',
				'primary-hover-dark': '#B06A73',

				// Neutrals
				'n200': '#d7d9da',
				'n900': '#222222',
				'n700': '#171F26',
				'n500': '#555555',
			},
    	}
    },
	plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
}
