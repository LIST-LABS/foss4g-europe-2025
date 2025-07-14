import { defineConfig, globalIgnores } from "eslint/config";
import react from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default defineConfig([
    globalIgnores([
        "**/*.css",
        "**/*.scss",
        "**/*.svg",
        "**/*.png",
        "dist/**/*.*",
        "dist/*",
    ]),
    {
        extends: compat.extends(
            "eslint:recommended",
            "plugin:react/recommended",
            "plugin:@typescript-eslint/recommended",
            "prettier"
        ),

        plugins: {
            react,
            "@typescript-eslint": typescriptEslint,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
            },

            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",
        },

        settings: {
            react: {
                createClass: "createReactClass",
                pragma: "React",
                fragment: "Fragment",
                version: "detect",
                flowVersion: "0.53",
            },

            propWrapperFunctions: [
                "forbidExtraProps",
                {
                    property: "freeze",
                    object: "Object",
                },
                {
                    property: "myFavoriteWrapper",
                },
                {
                    property: "forbidExtraProps",
                    exact: true,
                },
            ],

            componentWrapperFunctions: [
                "observer",
                {
                    property: "styled",
                },
                {
                    property: "observer",
                    object: "Mobx",
                },
                {
                    property: "observer",
                    object: "<pragma>",
                },
            ],

            formComponents: [
                "CustomForm",
                {
                    name: "Form",
                    formAttribute: "endpoint",
                },
            ],

            linkComponents: [
                "Hyperlink",
                {
                    name: "Link",
                    linkAttribute: "to",
                },
            ],
        },

        rules: {
            "no-debugger": "warn",
            "react/prop-types": 0,
            "no-console": "warn",
            "no-unused-vars": "off",

            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                },
            ],

            "@typescript-eslint/no-explicit-any": "warn",
            "react/react-in-jsx-scope": "off",
        },
    },
]);
