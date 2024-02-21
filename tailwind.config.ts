import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "brand-dark-purple": "#2a2c60",
                "brand-light-purple": "#202b3c",
                "brand-light-blue": "#67B3e4",
            },
            fontFamily: {
                urban: ['var(--font-urban)']
            },
            keyframes: {
                "fadeIn": {
                    from: {
                        "opacity": "0",
                    },
                    to: {
                        "opacity": "1",
                    },
                },
                "fadeOut": {
                    from: {
                        "opacity": "1",
                    },
                    to: {
                        "opacity": "0",
                    },
                },
            },
            animation: {
                "fadeIn": "fadeIn .25s linear forwards",
                "fadeOut": "fadeOut .25s linear forwards",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms")({
            strategy: 'class'
        }),
    ],
};
export default config;
