/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "backgroundbackground-3": "var(--backgroundbackground-3)",
            },
            fontFamily: {
                cormorant: ['"Cormorant Garamond"', "serif"],
                ebgaramond: ['"EB Garamond"', "serif"],
                denistina: ['"Denistina"', "cursive"],
            },
        },
    },
    plugins: [],
};
