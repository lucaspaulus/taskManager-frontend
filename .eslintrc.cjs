module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh"],

    rules: {

        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                multiline: {
                    delimiter: "semi",
                    requireLast: true,
                },
                singleline: {
                    delimiter: "semi",
                    requireLast: true,
                },
                overrides: {
                    interface: {
                        multiline: {
                            delimiter: "semi",
                            requireLast: true,
                        },
                        singleline: {
                            delimiter: "semi",
                            requireLast: true,
                        },
                    },
                },
            },
        ],
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],

        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",

        indent: "off",

        quotes: ["error", "double"],
    },
};
