const colors = require("tailwindcss/colors");

// remove new color warnings
delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];
//

module.exports = {
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                ...colors,
                light: {
                    "text-normal": colors.gray[600],
                    "text-dimmed": colors.gray[300],
                    surface: "white",
                    secondSurface: colors.gray[50],
                    elevation: colors.gray[100],
                },
                dark: {
                    "text-normal": "#aeb8c7",
                    "text-dimmed": "#768390",
                    surface: "#242324",
                    secondSurface: colors.gray[700],
                    elevation: "#2E2D2E",
                },
            },
        },
    },
    plugins: [],
};
