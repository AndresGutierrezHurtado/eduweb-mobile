/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./layouts/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: "#38bdf8",
                "primary-content": "#020617",
                "base-100": "#0f172a",
                "base-200": "#1e293b",
                "base-300": "#334155",
                "base-content": "#f0f9ff",
            },
            fontFamily: {
                Alegreya: ["alegreya-sans"],
            },
        },
    },
    darkMode: "class",
    plugins: [],
};
