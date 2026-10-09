# Global TypeScript Setup Guide

This guide explains how to install TypeScript globally and create a basic TypeScript project using Node.js and npm.

> **Important:** A global TypeScript installation is useful for learning, quick experiments, and using `tsc` from any directory. For professional projects, a **local project installation** of TypeScript is generally recommended because each project can use and lock its own TypeScript version.

---

## 0. Install Node.js

TypeScript's npm installation requires Node.js.

Download and install Node.js from the official website:

[Node.js Downloads](https://nodejs.org/en/download/?utm_source=chatgpt.com)

### Check Node.js and npm versions

```bash
node -v
npm -v
```

---

## 1. Install TypeScript Globally

Install TypeScript globally using npm:

```bash
npm install -g typescript
```

The `-g` flag means TypeScript is installed globally and the `tsc` command can be used from any terminal directory.

The official TypeScript documentation supports global installation for situations such as one-off experiments.

---

## 2. Check the TypeScript Installation

Check the installed TypeScript version:

```bash
tsc -v
```

or:

```bash
tsc --version
```

---

## 3. Create a Project Folder

Create a folder for your TypeScript project and move into it:

```bash
mkdir my-typescript-project
cd my-typescript-project
```

---

## 4. Initialize npm

Create a `package.json` file:

```bash
npm init -y
```

This initializes npm and creates the project's package configuration file.

The resulting structure will initially look like:

```text
my-typescript-project/
└── package.json
```

---

## 5. Create the Source Folder

Create a `src` folder:

```text
my-typescript-project/
├── src/
└── package.json
```

Create an `index.ts` file inside `src`:

```text
my-typescript-project/
├── src/
│   └── index.ts
└── package.json
```

---

## 6. Write TypeScript Code

Open `src/index.ts` and write your TypeScript code.

Example:

```ts
const message: string = "Hello, TypeScript!";

console.log(message);
```

---

## 7. Create `tsconfig.json`

Initialize a TypeScript configuration file:

```bash
tsc --init
```

This creates:

```text
tsconfig.json
```

`tsc --init` is the official TypeScript CLI command for creating a `tsconfig.json` file.

> You can also use `npx tsc --init` when TypeScript is installed locally in the project.

---

## 8. Configure `rootDir` and `outDir`

Open `tsconfig.json` and configure the source and output directories:

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  }
}
```

### What do these options mean?

#### `rootDir`

```json
"rootDir": "./src"
```

Tells TypeScript that your source TypeScript files are located inside the `src` directory.

#### `outDir`

```json
"outDir": "./dist"
```

Tells TypeScript to place generated JavaScript files inside the `dist` directory.

TypeScript preserves the source directory structure when emitting files to `outDir`.

Your project will now look like:

```text
my-typescript-project/
├── src/
│   └── index.ts
├── dist/
├── package.json
└── tsconfig.json
```

---

## 9. Compile TypeScript

Compile the project using:

```bash
tsc
```

If TypeScript is installed locally, use:

```bash
npx tsc
```

When `tsconfig.json` is present, `tsc` uses the project configuration and compiles the project's TypeScript files.

After compilation:

```text
my-typescript-project/
├── src/
│   └── index.ts
├── dist/
│   └── index.js
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

### Important

Node.js runs the generated JavaScript file:

```text
src/index.ts
      ↓
TypeScript Compiler
      ↓
dist/index.js
      ↓
Node.js
```

TypeScript itself is not directly executed by Node.js in this basic workflow.

---

# Useful TypeScript Commands

## Compile the Project

```bash
tsc
```

Using a local TypeScript installation:

```bash
npx tsc
```

---

## Compile in Watch Mode

Watch for file changes and automatically recompile:

```bash
tsc --watch
```

Short form:

```bash
tsc -w
```

With a local installation:

```bash
npx tsc --watch
```

### Stop Watch Mode

Press:

```text
Ctrl + C
```

in the terminal.

---

## Type-Check Without Generating JavaScript

Use:

```bash
tsc --noEmit
```

This checks your TypeScript code without generating JavaScript files.

With a local installation:

```bash
npx tsc --noEmit
```

---

## Compile a Specific TypeScript File

You can compile a specific `.ts` file:

```bash
tsc src/index.ts
```

However, **be careful** with this approach.

When input files are provided directly to `tsc`, the `tsconfig.json` project configuration is ignored.

Therefore, for a normal project, prefer:

```bash
tsc
```

instead of:

```bash
tsc src/index.ts
```

---

# Global TypeScript Management

## Check Global TypeScript Version

```bash
tsc -v
```

---

## Update Global TypeScript

```bash
npm update -g typescript
```

---

## Install the Latest TypeScript Version Globally

```bash
npm install -g typescript@latest
```

This explicitly installs the latest published TypeScript version.

---

## Check Where Global npm Packages Are Installed

Usually not necessary for normal TypeScript development.

### Global package directory

```bash
npm root -g
```

### Global npm prefix

```bash
npm prefix -g
```

These commands are mainly useful when troubleshooting global npm installation or PATH-related problems.

---

## Uninstall Global TypeScript

```bash
npm uninstall -g typescript
```

After uninstalling, you can verify whether `tsc` is still available:

```bash
tsc -v
```

If the command is no longer available, the global TypeScript installation was successfully removed.

---

# Final Project Structure

After completing the basic setup, your project should look similar to:

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
├── package-lock.json
├── package.json
└── tsconfig.json
```

---

# Recommended Workflow

For learning and basic TypeScript projects:

```text
Install Node.js
      ↓
Install TypeScript globally
      ↓
Create project
      ↓
npm init -y
      ↓
Create src/index.ts
      ↓
tsc --init
      ↓
Configure tsconfig.json
      ↓
tsc
      ↓
dist/index.js
      ↓
node dist/index.js
```

For **professional projects**, prefer a project-local TypeScript installation:

```bash
npm install --save-dev typescript
```

Then use:

```bash
npx tsc
```

This makes the TypeScript version a project dependency and allows the project to use a consistent version across different machines and environments.

---

## Quick Command Reference

| Purpose                          | Command                            |
| -------------------------------- | ---------------------------------- |
| Check Node.js                    | `node -v`                          |
| Check npm                        | `npm -v`                           |
| Install TypeScript globally      | `npm install -g typescript`        |
| Check TypeScript                 | `tsc -v`                           |
| Initialize npm                   | `npm init -y`                      |
| Create `tsconfig.json`           | `tsc --init`                       |
| Compile project                  | `tsc`                              |
| Compile with local TypeScript    | `npx tsc`                          |
| Watch mode                       | `tsc --watch`                      |
| Type-check only                  | `tsc --noEmit`                     |
| Run generated JS                 | `node dist/index.js`               |
| Global package location          | `npm root -g`                      |
| Global npm prefix                | `npm prefix -g`                    |
| Update global TypeScript         | `npm update -g typescript`         |
| Install latest global TypeScript | `npm install -g typescript@latest` |
| Uninstall global TypeScript      | `npm uninstall -g typescript`      |
