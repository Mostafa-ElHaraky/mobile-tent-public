import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import("eslint").Linter.FlatConfig[]} */
const eslintConfig = [
  // --- Next.js recommended defaults ---
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // --- Your custom overrides ---
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    rules: {
      // Allow unused vars if prefixed with "_" and make them warnings, not errors
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      // Allow temporary "any" usage as a warning
      "@typescript-eslint/no-explicit-any": "warn",

      // React Hooks dependency rule still enforced but not blocking
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];

export default eslintConfig;
