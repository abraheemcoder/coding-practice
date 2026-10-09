# React + TypeScript + Vite Setup Guide

A professional, production-ready baseline for building modern React applications with:

- React
- TypeScript
- Vite
- ESLint
- typescript-eslint
- Prettier
- React Hooks linting
- React Refresh linting
- JSX accessibility linting
- Git
- npm
- VS Code

This guide focuses on a **maintainable, type-safe, linted, formatted, and production-buildable** React application.

---

# 0. Prerequisites

Install:

- Node.js
- npm
- Git
- VS Code

## Install Node.js

Download Node.js from the official website:

https://nodejs.org/en/download

Check the installation:

```bash
node -v
npm -v
```

> Use a current supported Node.js LTS release. Vite currently requires Node.js `20.19+` or `22.12+` or newer supported versions.

---

## Install Git

Download Git for Windows:

https://git-scm.com/install/windows

Check the installation:

```bash
git --version
```

---

# 1. Create the React + TypeScript Project

Vite provides an official React + TypeScript template.

Create the project:

```bash
npm create vite@latest react-project-name -- --template react-ts --eslint
```

The `react-ts` template creates a React + TypeScript project.

The `--eslint` option tells the current Vite scaffolder to use ESLint instead of its default Oxlint setup for React templates.

> If your version of `create-vite` doesn't accept `--eslint`, select **ESLint** when the interactive prompt appears.

---

# 2. Move Into the Project

```bash
cd react-project-name
```

---

# 3. Install Dependencies

If the scaffolder did not install dependencies automatically:

```bash
npm install
```

---

# 4. Start the Development Server

```bash
npm run dev
```

Vite starts a development server with Hot Module Replacement (HMR).

Open the URL shown in the terminal, usually:

```text
http://localhost:5173
```

Vite's `dev` command starts the development server, while `build` creates the production bundle and `preview` locally serves the production build.

---

# 5. Understand the Initial Project Structure

A current Vite React TypeScript project contains approximately:

```text
react-project-name/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

Current Vite's React TypeScript template uses **TypeScript project references**:

```text
tsconfig.json
    │
    ├── tsconfig.app.json
    │
    └── tsconfig.node.json
```

The root `tsconfig.json` references the application and Vite configuration projects.

---

# 6. Understand the TypeScript Configuration

Do **not** replace the current Vite TypeScript configuration with a simple single `tsconfig.json` unless you have a specific reason.

The current Vite template separates:

```text
tsconfig.app.json
    ↓
React application

tsconfig.node.json
    ↓
Vite configuration

tsconfig.json
    ↓
Project references
```

This allows TypeScript to type-check the application and tooling configuration separately.

---

# 7. Recommended `tsconfig.app.json`

The current Vite React TypeScript template uses settings similar to:

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",

    "target": "ES2023",
    "lib": ["ES2023", "DOM"],
    "module": "ESNext",
    "types": ["vite/client"],

    "allowArbitraryExtensions": true,
    "skipLibCheck": true,

    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",

    "noEmit": true,
    "jsx": "react-jsx",

    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },

  "include": ["src"]
}
```

These settings are based on the current official Vite React TypeScript template.

### Important options

#### `target`

```json
"target": "ES2023"
```

Controls the JavaScript language target TypeScript uses for type-checking/transformation behavior.

---

#### `lib`

```json
"lib": ["ES2023", "DOM"]
```

Provides TypeScript type definitions for:

- modern JavaScript
- browser APIs

---

#### `module`

```json
"module": "ESNext"
```

Uses modern ECMAScript modules.

---

#### `moduleResolution`

```json
"moduleResolution": "bundler"
```

Uses module resolution appropriate for modern bundlers such as Vite.

---

#### `jsx`

```json
"jsx": "react-jsx"
```

Uses the modern JSX transform.

You don't need to manually import React in every JSX/TSX file.

---

#### `noEmit`

```json
"noEmit": true
```

TypeScript performs type checking but does not generate JavaScript.

Vite handles the application build/transformation process.

---

#### `noUnusedLocals`

```json
"noUnusedLocals": true
```

Reports unused local variables.

---

#### `noUnusedParameters`

```json
"noUnusedParameters": true
```

Reports unused function parameters.

---

#### `noFallthroughCasesInSwitch`

```json
"noFallthroughCasesInSwitch": true
```

Helps prevent accidental fall-through between `switch` cases.

---

# 8. Keep `tsconfig.node.json`

The Vite configuration itself is also TypeScript:

```text
vite.config.ts
```

The current template therefore has a separate Node/Vite TypeScript configuration.

Do not remove `tsconfig.node.json` unless you understand the consequences for your Vite configuration.

---

# 9. TypeScript Project References

The root `tsconfig.json` should reference the application and Node/Vite configurations.

Typical structure:

```json
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ]
}
```

TypeScript's `tsc -b` command understands project references and builds referenced projects in the correct order.

---

# 10. Configure `main.tsx`

A robust application entry point can use an explicit root-element check:

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Root element with id "root" was not found.');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

### Why `StrictMode`?

React recommends using `StrictMode` for newly created applications.

It enables additional development-only checks that help identify:

- impure rendering
- missing Effect cleanup
- missing ref cleanup
- deprecated API usage

These checks run only during development and do not affect production behavior.

---

# 11. ESLint

The current Vite template already provides an ESLint configuration when ESLint is selected during scaffolding.

Modern ESLint uses **flat configuration**.

The configuration file is:

```text
eslint.config.js
```

ESLint supports flat configuration files such as:

```text
eslint.config.js
eslint.config.mjs
eslint.config.cjs
```

and expects the configuration in the project root.

---

# 12. Install TypeScript ESLint

For a manual ESLint setup, install:

```bash
npm install --save-dev eslint @eslint/js typescript-eslint
```

`typescript-eslint` provides TypeScript-aware ESLint support and configurations.

---

# 13. Enable Strict Type-Aware ESLint Rules

For a serious TypeScript project, I recommend going beyond:

```js
tseslint.configs.strict;
```

and using:

```js
tseslint.configs.strictTypeChecked;
```

Type-aware linting can catch problems that ordinary syntax-based linting cannot detect. It requires TypeScript type information and therefore has additional performance cost.

Example:

```js
tseslint.configs.strictTypeChecked;
```

You can additionally use:

```js
tseslint.configs.stylisticTypeChecked;
```

if you want TypeScript-aware stylistic rules.

---

# 14. ESLint React Configuration

For a React project, ESLint should also understand:

- React Hooks
- React Refresh
- JSX accessibility

The Vite ESLint template already uses:

```text
eslint-plugin-react-hooks
eslint-plugin-react-refresh
```

for React-specific linting.

For accessibility-focused React development, add:

```bash
npm install --save-dev eslint-plugin-jsx-a11y
```

`eslint-plugin-jsx-a11y` provides JSX accessibility rules and a flat recommended configuration.

---

# 15. Professional ESLint Configuration

A production-oriented ESLint configuration can look like:

```js
import js from "@eslint/js";
import globals from "globals";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  globalIgnores(["dist/", "coverage/", "node_modules/"]),

  {
    files: ["**/*.{ts,tsx}"],

    extends: [
      js.configs.recommended,

      tseslint.configs.strictTypeChecked,

      reactHooks.configs.flat.recommended,

      reactRefresh.configs.vite,

      jsxA11y.flatConfigs.recommended,
    ],

    languageOptions: {
      globals: globals.browser,

      parserOptions: {
        projectService: true,
      },
    },
  },

  {
    files: ["vite.config.ts"],

    languageOptions: {
      globals: globals.node,

      parserOptions: {
        projectService: true,
      },
    },
  },

  eslintConfigPrettier,
]);
```

### Important

The exact React/Vite ESLint configuration can evolve as the ecosystem changes. The important architecture is:

```text
ESLint
  │
  ├── JavaScript recommended rules
  │
  ├── TypeScript strict type-aware rules
  │
  ├── React Hooks rules
  │
  ├── React Refresh rules
  │
  ├── JSX accessibility rules
  │
  └── Prettier conflict prevention
```

TypeScript ESLint specifically documents `projectService: true` for type-aware linting.

---

# 16. Run ESLint

Run ESLint:

```bash
npm run lint
```

Or directly:

```bash
npx eslint .
```

---

# 17. Automatically Fix ESLint Problems

Some ESLint problems can be automatically fixed:

```bash
npx eslint . --fix
```

You can also create:

```json
"lint:fix": "eslint . --fix"
```

and run:

```bash
npm run lint:fix
```

---

# 18. Install Prettier

Install Prettier locally and save the exact version:

```bash
npm install --save-dev --save-exact prettier
```

Prettier recommends installing it locally and using `--save-exact` so the project uses the exact formatter version.

---

# 19. Install `eslint-config-prettier`

Install:

```bash
npm install --save-dev eslint-config-prettier
```

`eslint-config-prettier` disables ESLint rules that conflict with or are unnecessary when using Prettier.

Keep it **last** in the ESLint configuration:

```js
extends: [
  // ESLint/TypeScript/React configurations...
  eslintConfigPrettier,
]
```

---

# 20. Create `.prettierrc`

Create:

```text
.prettierrc
```

Recommended configuration:

```json
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "all",
  "tabWidth": 2,
  "printWidth": 80
}
```

These are reasonable defaults. Prettier should remain responsible for formatting rather than creating a large collection of formatting rules in ESLint.

---

# 21. Create `.prettierignore`

Create:

```text
.prettierignore
```

Add:

```text
node_modules/
dist/
coverage/
```

Prettier supports `.prettierignore` for excluding generated or dependency files.

---

# 22. Add Formatting Scripts

Add these scripts to `package.json`:

```json
{
  "scripts": {
    "format": "prettier . --write",
    "format:check": "prettier . --check"
  }
}
```

### Format the project

```bash
npm run format
```

### Check formatting without changing files

```bash
npm run format:check
```

The second command is particularly useful in CI.

---

# 23. Environment Variables

Vite supports environment files such as:

```text
.env
.env.local
.env.development
.env.development.local
.env.production
.env.production.local
```

Vite loads these according to the current mode. `.env.local` and mode-specific `.local` files are intended to remain local and are ignored by Git.

---

# 24. Important Security Rule for Vite `.env`

**Do not put secrets in frontend environment variables.**

For example:

```env
VITE_API_KEY=secret
```

is **not a secure secret**.

Variables beginning with:

```text
VITE_
```

are exposed to client-side code and bundled into the application. Anyone using your website can potentially inspect those values.

Therefore:

```text
❌ Database passwords
❌ Private API keys
❌ Secret tokens
❌ Service-account credentials
❌ Private encryption keys
```

must **not** be placed in `VITE_*` variables.

Use a backend/server/serverless function for secrets.

---

# 25. Recommended Environment File Strategy

For local development:

```text
.env.local
```

Example:

```env
VITE_API_BASE_URL=https://api.example.com
```

For a public example:

```text
.env.example
```

Example:

```env
VITE_API_BASE_URL=
```

Commit:

```text
.env.example
```

Do not commit:

```text
.env.local
.env.development.local
.env.production.local
```

---

# 26. Environment Variable Typing

Create or update:

```text
src/vite-env.d.ts
```

For custom environment variables, you can extend Vite's environment types:

```ts
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

Then:

```ts
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
```

This gives TypeScript awareness of your custom environment variable.

---

# 27. `.gitignore`

Make sure your `.gitignore` contains:

```gitignore
node_modules/
dist/
coverage/

.env.local
.env.*.local
```

You can also ignore local editor/OS files when appropriate:

```gitignore
.vscode/*
!.vscode/extensions.json
!.vscode/settings.json

.DS_Store
Thumbs.db
```

### Important

Do not blindly ignore every `.env` file.

A non-secret `.env` containing public configuration may intentionally be committed.

The important rule is:

```text
Never commit actual secrets.
```

---

# 28. Git Initialization

If Git was not initialized automatically:

```bash
git init
```

Check:

```bash
git status
```

Create the initial commit:

```bash
git add .
git commit -m "chore: initialize React TypeScript project"
```

---

# 29. Recommended `package.json` Scripts

A professional baseline:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier . --write",
    "format:check": "prettier . --check",
    "type-check": "tsc -b --pretty",
    "preview": "vite preview"
  }
}
```

### What each command does

| Script                 | Purpose                                                           |
| ---------------------- | ----------------------------------------------------------------- |
| `npm run dev`          | Start Vite development server                                     |
| `npm run build`        | Type-check/build TypeScript projects and create production bundle |
| `npm run lint`         | Run ESLint                                                        |
| `npm run lint:fix`     | Automatically fix supported ESLint problems                       |
| `npm run format`       | Format project with Prettier                                      |
| `npm run format:check` | Verify formatting without modifying files                         |
| `npm run type-check`   | Run TypeScript project type-check/build                           |
| `npm run preview`      | Locally preview the production build                              |

The `tsc -b` approach matches the current Vite TypeScript project's project-reference structure. TypeScript's build mode is specifically designed to work with referenced projects.

---

# 30. Why `build` Uses `tsc -b && vite build`

Use:

```json
"build": "tsc -b && vite build"
```

instead of only:

```json
"build": "vite build"
```

because the first command performs the TypeScript project check/build:

```text
tsc -b
   ↓
TypeScript validation
   ↓
vite build
   ↓
Production bundle
```

Vite itself focuses on transforming/bundling the application. Keeping an explicit TypeScript check in the build command ensures TypeScript errors can fail the build pipeline.

Vite's production build is created with:

```bash
vite build
```

and the resulting `dist` directory is suitable for static hosting.

---

# 31. Production Build

Create the production build:

```bash
npm run build
```

Expected output:

```text
dist/
```

The production application is generated inside:

```text
dist/
```

Vite's production build produces assets intended to be deployed to a static hosting service.

---

# 32. Preview the Production Build Locally

After building:

```bash
npm run preview
```

This locally serves the contents of `dist`.

> `vite preview` is for **local previewing**, not for serving your production application to real users. Vite explicitly documents that it is not intended to be a production server.

---

# 33. Recommended Pre-Push Validation

Before pushing code to GitHub, run:

```bash
npm run type-check
```

Then:

```bash
npm run lint
```

Then:

```bash
npm run format:check
```

Then:

```bash
npm run build
```

Recommended workflow:

```text
Code
 │
 ▼
npm run type-check
 │
 ▼
npm run lint
 │
 ▼
npm run format:check
 │
 ▼
npm run build
 │
 ▼
npm run preview
 │
 ▼
Git commit
 │
 ▼
Git push
```

---

# 34. One-Command Quality Check

For local development, you can add:

```json
{
  "scripts": {
    "check": "npm run type-check && npm run lint && npm run format:check",
    "check:fix": "npm run lint:fix && npm run format"
  }
}
```

Then:

```bash
npm run check
```

performs:

```text
TypeScript
    ↓
ESLint
    ↓
Prettier
```

This is useful for catching problems before committing.

---

# 35. Recommended Final `package.json`

Your final scripts should look approximately like:

```json
{
  "name": "react-project-name",
  "private": true,
  "version": "0.0.0",
  "type": "module",

  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier . --write",
    "format:check": "prettier . --check",
    "type-check": "tsc -b --pretty",
    "check": "npm run type-check && npm run lint && npm run format:check",
    "check:fix": "npm run lint:fix && npm run format",
    "preview": "vite preview"
  }
}
```

The Vite React template itself uses `"type": "module"` and the `dev`, `build`, and `preview` scripts shown above.

---

# 36. Final Project Structure

A professional baseline can look like:

```text
react-project-name/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── .env.example
├── .env.local
├── .gitignore
├── .prettierignore
├── .prettierrc
│
├── eslint.config.js
│
├── index.html
├── package-lock.json
├── package.json
│
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
│
└── vite.config.ts
```

---

# 37. Recommended Development Architecture

The responsibility of each tool should remain clear:

```text
                 React
                   │
                   ▼
             UI Components
                   │
                   ▼
              TypeScript
                   │
          ┌────────┴────────┐
          ▼                 ▼
       ESLint            Prettier
          │                 │
          │                 │
     Code quality       Formatting
          │                 │
          └────────┬────────┘
                   ▼
                 Vite
                   │
          ┌────────┴────────┐
          ▼                 ▼
     Dev Server        Production Build
          │                 │
          ▼                 ▼
         HMR               dist/
```

---

# 38. Tool Responsibilities

### React

Responsible for:

```text
UI
Components
State
Events
Rendering
```

### TypeScript

Responsible for:

```text
Static type checking
Type safety
Developer tooling
Compile-time errors
```

### Vite

Responsible for:

```text
Development server
HMR
Asset processing
Production bundling
```

### ESLint

Responsible for:

```text
Code-quality problems
Potential bugs
TypeScript-aware linting
React Hooks rules
React Refresh rules
Accessibility rules
```

### Prettier

Responsible for:

```text
Code formatting
Consistent style
Whitespace
Quotes
Line wrapping
```

### Git

Responsible for:

```text
Version control
History
Branches
Collaboration
```

---

# 39. Important Production Rules

## Rule 1 — Keep TypeScript Local

Use:

```bash
npm install -D typescript
```

Do not depend on a global TypeScript installation for the project.

---

## Rule 2 — Keep ESLint Local

Install ESLint as a project development dependency.

Do not depend on a global ESLint installation.

---

## Rule 3 — Keep Prettier Local

Use:

```bash
npm install --save-dev --save-exact prettier
```

This gives the repository a known formatter version.

---

## Rule 4 — Don't Use ESLint as Your Formatter

ESLint:

```text
Finds code-quality problems
```

Prettier:

```text
Formats code
```

Use both, but give them different responsibilities.

---

## Rule 5 — Don't Put Secrets in `VITE_*`

Anything exposed through Vite's client environment can become part of the browser bundle.

Therefore:

```text
VITE_SECRET_KEY=...
```

is **not secret**.

Use a backend for private credentials.

---

## Rule 6 — Don't Commit `node_modules`

Use:

```gitignore
node_modules/
```

Dependencies are restored with:

```bash
npm ci
```

in CI/production environments when a lockfile is available.

---

## Rule 7 — Don't Commit Build Output Unless Required

Normally:

```gitignore
dist/
```

Build it when needed:

```bash
npm run build
```

---

## Rule 8 — Don't Disable TypeScript Strictness Without a Reason

Avoid weakening TypeScript simply because an error is inconvenient.

Prefer understanding and fixing the underlying type problem.

---

# 40. Production/CI Validation Checklist

Before merging or deploying:

```bash
npm ci
```

Then:

```bash
npm run type-check
```

```bash
npm run lint
```

```bash
npm run format:check
```

```bash
npm run build
```

If all four succeed:

```text
✓ TypeScript
✓ ESLint
✓ Prettier
✓ Production build
```

the project has passed the basic static quality gate.

---

# 41. Complete Setup Workflow

```text
Install Node.js
       │
       ▼
Install Git
       │
       ▼
Create React + TypeScript + Vite project
       │
       ▼
Select ESLint
       │
       ▼
npm install
       │
       ▼
Understand tsconfig.app.json
       │
       ▼
Understand tsconfig.node.json
       │
       ▼
Configure ESLint
       │
       ▼
Enable strict type-aware linting
       │
       ▼
Add React Hooks / Refresh rules
       │
       ▼
Add JSX accessibility rules
       │
       ▼
Install Prettier
       │
       ▼
Install eslint-config-prettier
       │
       ▼
Configure .prettierrc
       │
       ▼
Configure environment variables
       │
       ▼
Configure .gitignore
       │
       ▼
Configure npm scripts
       │
       ▼
npm run type-check
       │
       ▼
npm run lint
       │
       ▼
npm run format:check
       │
       ▼
npm run build
       │
       ▼
npm run preview
       │
       ▼
Git commit
       │
       ▼
Git push
```

---

# Quick Command Reference

| Purpose                             | Command                                                         |
| ----------------------------------- | --------------------------------------------------------------- |
| Create React + TS + Vite project    | `npm create vite@latest my-app -- --template react-ts --eslint` |
| Enter project                       | `cd my-app`                                                     |
| Install dependencies                | `npm install`                                                   |
| Start development server            | `npm run dev`                                                   |
| Type-check                          | `npm run type-check`                                            |
| Run ESLint                          | `npm run lint`                                                  |
| Fix ESLint issues                   | `npm run lint:fix`                                              |
| Format project                      | `npm run format`                                                |
| Check formatting                    | `npm run format:check`                                          |
| Run all checks                      | `npm run check`                                                 |
| Build production app                | `npm run build`                                                 |
| Preview production build            | `npm run preview`                                               |
| Initialize Git                      | `git init`                                                      |
| Check Git status                    | `git status`                                                    |
| Stage files                         | `git add .`                                                     |
| Commit                              | `git commit -m "message"`                                       |
| Install exact lockfile dependencies | `npm ci`                                                        |

---

# Final Recommended Stack

```text
React
  +
TypeScript
  +
Vite
  +
ESLint
  +
typescript-eslint
  +
React Hooks ESLint
  +
React Refresh ESLint
  +
JSX Accessibility ESLint
  +
Prettier
  +
Git
  +
npm
```

This provides a strong baseline for a **modern, type-safe, maintainable React application** without unnecessarily adding framework-specific or architectural dependencies before they are actually needed.
