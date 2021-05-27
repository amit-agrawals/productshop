module.exports = {
    // @see https://tailwindcss.com/docs/upcoming-changes
    // mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false,
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
