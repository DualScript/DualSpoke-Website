// ESLint 9 flat config. Replaces .eslintrc.json, since Next.js 16 removed `next lint`.
// Same rule sets as before: Next core web vitals plus Next TypeScript rules.
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  // Build output and generated types are never linted.
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
