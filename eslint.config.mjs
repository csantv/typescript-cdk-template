// @ts-check
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

// noinspection JSUnusedGlobalSymbols
export default [
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            "@stylistic": stylistic
        },
        rules: {
            "@stylistic/quotes": ["error", "double"],
            "@stylistic/semi": ["error", "always"],
            "@stylistic/no-extra-semi": ["error"],
            "@stylistic/indent": ["error", 4],
            "@stylistic/no-trailing-spaces": ["error"],
            "@stylistic/eol-last": ["error", "always"],
            "@stylistic/max-len": ["error", 120],
            "eqeqeq": ["error", "always"],
            "@typescript-eslint/no-misused-promises": [
                "error",
                {
                    "checksVoidReturn": false
                }
            ],
        }
    }
];
