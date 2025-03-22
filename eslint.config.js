// @ts-check

import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import reactRefresh from "eslint-plugin-react-refresh";
import reactConfig from "eslint-plugin-react/configs/recommended.js";
import reactJsxRuntimeConfig from "eslint-plugin-react/configs/jsx-runtime.js";
import * as importResolver from "eslint-import-resolver-typescript";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      import: importPlugin,
      "react-refresh": reactRefresh,
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
        ...importResolver,
      },
    },
    rules: {
      "no-console": "warn",
      "no-debugger": "warn",
      "no-constant-condition": ["error", { checkLoops: false }],
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "react/no-unknown-property": ["error", {
        ignore: [
          // Three.js properties used with React Three Fiber
          "args", "position", "rotation", "castShadow", "receiveShadow",
          "intensity", "angle", "penumbra", "distance", "decay",
          "metalness", "roughness", "transparent", "opacity", "emissive",
          "emissiveIntensity",
          "color", "attach", "sprite", "scale", "depthTest", "depthWrite",
          "wireframe", "frustumCulled", "dispose", "material", "geometry",
          "map", "fog", "near", "far", "fov", "autoRotate", "autoRotateSpeed"
        ]
      }],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "import/no-cycle": "warn",
      "import/no-unresolved": "error",
      "import/no-default-export": "off",
      "import/order": [
        "error",
        {
          "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
          "pathGroups": [
            {
              "pattern": "react",
              "group": "external",
              "position": "before"
            }
          ],
          "pathGroupsExcludedImportTypes": ["react"],
          "newlines-between": "never",
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": true
          }
        }
      ],
    },
  },
  reactConfig,
  reactJsxRuntimeConfig
);
