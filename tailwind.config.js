module.exports = {
    // @see https://tailwindcss.com/docs/upcoming-changes
    // mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false,
    theme: {
        screens: {
            xs: "375px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1440px",
            "3xl": "1920px",
            print: { raw: "print" },
        },
        
        extend: {
            colors:{
                navy:{
                    DEFAULT:"#334862",
                    light:"#446084"
                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
