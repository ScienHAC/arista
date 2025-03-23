import type { Config } from "tailwindcss"

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"*.{js,ts,jsx,tsx,mdx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				gold: {
					DEFAULT: "#D4AF37",
					light: "#F5E7A3",
					dark: "#A38A28",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				arista: {
					orange: "#FF7A00",
					gold: "#FFD700",
					silver: "#C0C0C0",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				marquee: {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(-100%)" },
				},
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
				pulse: {
					"0%, 100%": { boxShadow: "0 0 0 0 rgba(212, 175, 55, 0.4)" },
					"50%": { boxShadow: "0 0 0 15px rgba(212, 175, 55, 0)" },
				},
				"slide-up": {
					from: { transform: "translateY(20px)", opacity: "0" },
					to: { transform: "translateY(0)", opacity: "1" },
				},
				"slide-down": {
					from: { transform: "translateY(-20px)", opacity: "0" },
					to: { transform: "translateY(0)", opacity: "1" },
				},
				"fade-in": {
					from: { opacity: "0" },
					to: { opacity: "1" },
				},
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				},
				'infinite-scroll-reverse': {
					from: { transform: 'translateX(-100%)' },
					to: { transform: 'translateX(0)' },
				},
				"pulse-ring": {
					"0%": { transform: "scale(0.8)", opacity: "0" },
					"50%": { opacity: "0.5" },
					"100%": { transform: "scale(1.5)", opacity: "0" },
				},
				ripple: {
					"0%": { transform: "scale(0)", opacity: "1" },
					"100%": { transform: "scale(4)", opacity: "0" },
				},
				thinking: {
					"0%": { opacity: "0.3" },
					"50%": { opacity: "1" },
					"100%": { opacity: "0.3" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				marquee: "marquee 25s linear infinite",
				float: "float 6s ease-in-out infinite",
				pulse: "pulse 2s infinite",
				"slide-up": "slide-up 0.5s ease-out",
				"slide-down": "slide-down 0.5s ease-out",
				"fade-in": "fade-in 0.5s ease-out",
				'infinite-scroll': 'infinite-scroll 60s linear infinite',
				'infinite-scroll-reverse': 'infinite-scroll-reverse 72s linear infinite',
				"pulse-ring": "pulse-ring 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
				ripple: "ripple 1s linear forwards",
				thinking: "thinking 1.5s ease-in-out infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

