# Local TypeScript Setup Guide

This guide explains how to set up **TypeScript locally inside a project** using Node.js and npm.

> **Recommended:** Install TypeScript locally for projects. This keeps the TypeScript version tied to the project and allows reproducible builds across different machines.

---

## 0. Install Node.js

TypeScript's npm package requires Node.js.

Download and install Node.js from the official website:

https://nodejs.org/en/download

### Check Node.js and npm versions

```bash
node -v
npm -v
```

---

## 1. Create a Project Folder

Create a folder for your TypeScript project:

```bash
mkdir my-typescript-project
cd my-typescript-project
```

---

## 2. Initialize npm

Create a `package.json` file:

```bash
npm init -y
```

This initializes npm and creates the project's package configuration file.

Initial project structure:

```text
my-typescript-project/
└── package.json
```

---

## 3. Install TypeScript Locally

Install TypeScript as a development dependency:

```bash
npm install --save-dev typescript
```

Short form:

```bash
npm i -D typescript
```

The `-D` / `--save-dev` flag adds TypeScript to `devDependencies` in `package.json`.

Example:

```json
{
  "devDependencies": {
    "typescript": "^6.0.0"
  }
}
```

> The exact version will depend on the version installed when you run the command.

TypeScript officially recommends a per-project installation for project development.

---

## 4. Check the TypeScript Installation

Because TypeScript is installed locally, use `npx` to run the project's TypeScript compiler:

```bash
npx tsc -v
```

or:

```bash
npx tsc --version
```

You can also run:

```bash
tsc -v
```

if your environment happens to resolve a global `tsc`, but **for this local setup, prefer `npx tsc`** so you explicitly use the project's TypeScript installation.

---

## 5. Create `tsconfig.json`

Create the TypeScript configuration file:

```bash
npx tsc --init
```

This creates:

```text
tsconfig.json
```

`tsconfig.json` defines the root of the TypeScript project and contains the compiler options used when compiling the project.

---

## 6. Create the `src` Folder

Create a `src` folder and an `index.ts` file:

```text
my-typescript-project/
├── src/
│   └── index.ts
├── package.json
├── package-lock.json
├── node_modules/
└── tsconfig.json
```

---

## 7. Write TypeScript Code

Open `src/index.ts` and write your TypeScript code.

Example:

```ts
const message: string = "Hello, TypeScript!";

console.log(message);
```

---

## 8. Configure `tsconfig.json`

Configure the source and output directories.

A basic configuration:

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "noEmitOnError": true
  }
}
```

### `rootDir`

```json
"rootDir": "./src"
```

Tells TypeScript that your source files are inside the `src` directory.

### `outDir`

```json
"outDir": "./dist"
```

Tells TypeScript to place generated JavaScript files inside the `dist` directory.

TypeScript preserves the source directory structure inside `outDir`.

### `noEmitOnError`

```json
"noEmitOnError": true
```

Prevents TypeScript from generating output files when compilation errors are reported.

The default value is `false`, so explicitly setting it to `true` is useful when you don't want potentially invalid JavaScript emitted from a failed build.

---

## 9. Compile TypeScript

Compile the entire project using the local TypeScript compiler:

```bash
npx tsc
```

Because `tsconfig.json` exists, TypeScript reads the project's configuration and compiles the project accordingly.

After compilation:

```text
my-typescript-project/
├── src/
│   └── index.ts
├── dist/
│   └── index.js
├── node_modules/
├── package-lock.json
├── package.json
└── tsconfig.json
```

---

## 10. Run the Generated JavaScript

Run the compiled JavaScript using Node.js:

```bash
node dist/index.js
```

Output:

```text
Hello, TypeScript!
```

### TypeScript execution flow

```text
src/index.ts
      │
      ▼
TypeScript Compiler
      │
      ▼
dist/index.js
      │
      ▼
Node.js
```

TypeScript is compiled into JavaScript, and Node.js executes the generated JavaScript.

---

# 11. Add npm Scripts

Instead of repeatedly typing `npx tsc`, create convenient npm scripts in `package.json`.

Add:

```json
{
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "start": "node dist/index.js"
  }
}
```

### `build`

```json
"build": "tsc"
```

Run:

```bash
npm run build
```

Compiles the TypeScript project once.

### `dev`

```json
"dev": "tsc --watch"
```

Run:

```bash
npm run dev
```

Continuously watches TypeScript files and recompiles them when they change.

### `start`

```json
"start": "node dist/index.js"
```

Run:

```bash
npm start
```

Runs the compiled JavaScript.

---

# 12. Create `.gitignore`

Create a `.gitignore` file in the project root:

```text
my-typescript-project/
├── src/
├── dist/
├── node_modules/
├── .gitignore
├── package-lock.json
├── package.json
└── tsconfig.json
```

Add:

```gitignore
node_modules/
dist/
.env
```

### Why ignore these?

#### `node_modules/`

Contains installed npm packages.

It should not normally be committed because dependencies can be restored using:

```bash
npm install
```

#### `dist/`

Contains generated JavaScript files.

It can normally be regenerated using:

```bash
npm run build
```

#### `.env`

May contain environment variables and secrets.

Never commit sensitive credentials or API keys to Git.

---

# 13. Configure ES Modules

If you want to use modern ECMAScript modules with Node.js, add:

```json
"type": "module"
```

to `package.json`.

Example:

```json
{
  "name": "my-typescript-project",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "start": "node dist/index.js"
  },
  "devDependencies": {
    "typescript": "^6.0.0"
  }
}
```

`"type": "module"` tells Node.js to treat `.js` files in that package as ES modules.

> **Important:** `"type": "module"` is a Node.js package setting. It is not a TypeScript compiler option.

For a modern Node.js + TypeScript project, module configuration should also be considered in `tsconfig.json`; don't add `"type": "module"` as a replacement for TypeScript's `module` / module-resolution configuration.

---

# Useful Local TypeScript Commands

## Check TypeScript Version

```bash
npx tsc -v
```

---

## Create `tsconfig.json`

```bash
npx tsc --init
```

---

## Compile the Project

```bash
npx tsc
```

---

## Type-Check Without Generating JavaScript

```bash
npx tsc --noEmit
```

`--noEmit` prevents TypeScript from generating JavaScript or other compiler output.

---

## Watch Mode

```bash
npx tsc --watch
```

Short form:

```bash
npx tsc -w
```

Or use the npm script:

```bash
npm run dev
```

---

## Stop Watch Mode

Press:

```text
Ctrl + C
```

in the terminal.

---

## Compile a Specific TypeScript File

You can technically run:

```bash
npx tsc src/index.ts
```

However, **don't use this as your normal project build command**.

When you provide input files directly to `tsc`, the `tsconfig.json` configuration is ignored.

Therefore, for a project, prefer:

```bash
npx tsc
```

or:

```bash
npm run build
```

---

# Important: Local vs Global TypeScript

For this project, TypeScript is installed locally:

```bash
npm install -D typescript
```

Therefore, these are the commands you should normally use:

```bash
npx tsc
```

or:

```bash
npm run build
```

You **do not need**:

```bash
npm install -g typescript
```

for this project.

### Why?

A local installation allows the project to control its own TypeScript version.

```text
Project A
└── TypeScript 6.x

Project B
└── TypeScript 7.x
```

Each project can use the version it requires without depending on one global TypeScript installation. This is one of the main reasons TypeScript recommends project-wide installations for codebases.

---

# Final Project Structure

After completing the setup:

```text
my-typescript-project/
│
├── src/
│   └── index.ts
│
├── dist/
│   └── index.js
│
├── node_modules/
│
├── .gitignore
├── package-lock.json
├── package.json
└── tsconfig.json
```

---

# Complete Workflow

```text
Install Node.js
      ↓
Create project
      ↓
npm init -y
      ↓
npm install -D typescript
      ↓
npx tsc --init
      ↓
Configure tsconfig.json
      ↓
Create src/index.ts
      ↓
Write TypeScript
      ↓
npm run build
      ↓
dist/index.js
      ↓
npm start
      ↓
Node.js executes JavaScript
```

---

# Quick Command Reference

| Purpose                          | Command                     |
| -------------------------------- | --------------------------- |
| Check Node.js                    | `node -v`                   |
| Check npm                        | `npm -v`                    |
| Initialize npm                   | `npm init -y`               |
| Install TypeScript locally       | `npm install -D typescript` |
| Check TypeScript                 | `npx tsc -v`                |
| Create `tsconfig.json`           | `npx tsc --init`            |
| Compile project                  | `npx tsc`                   |
| Compile project using npm script | `npm run build`             |
| Watch mode                       | `npx tsc --watch`           |
| Watch mode using npm script      | `npm run dev`               |
| Type-check only                  | `npx tsc --noEmit`          |
| Run compiled JavaScript          | `node dist/index.js`        |
| Run compiled project             | `npm start`                 |
| Stop watch mode                  | `Ctrl + C`                  |

---

# Recommended Professional Setup

For a simple Node.js + TypeScript project, the core setup is:

### `package.json`

```json
{
  "name": "my-typescript-project",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "start": "node dist/index.js"
  },
  "devDependencies": {
    "typescript": "^6.0.0"
  }
}
```

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "noEmitOnError": true
  }
}
```

### Development workflow

```bash
npm run dev
```

### Production/build workflow

```bash
npm run build
```

### Run compiled application

```bash
npm start
```

This gives you a clean:

```text
src/
  ↓
TypeScript
  ↓
dist/
  ↓
JavaScript
  ↓
Node.js
```

setup while keeping TypeScript **local, reproducible, and project-specific**.
