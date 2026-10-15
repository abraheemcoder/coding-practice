# TypeScript Mastery Roadmap --- Beginner to Production-Ready

> **Goal:** Build deep TypeScript understanding and use it to design,
> implement, test, debug, and maintain production-quality applications.
>
> **How to use this checklist:** Work in order. Learn the concept, write
> examples without copying, debug intentional mistakes, and apply each
> major group in a project. Mark a topic complete only when you can
> explain it and use it independently.
>
> **Priority labels** - **Core** --- essential for everyday application
> development. - **Production** --- important for reliable, maintainable
> software. - **Advanced** --- useful for complex systems, library
> design, and deep mastery. - **Specialized** --- learn when your
> project or role needs it.

## Phase 1 --- Foundations

### 1. TypeScript Setup and Development Workflow --- Core

- [ ] What TypeScript is and which problems it solves
- [ ] TypeScript versus JavaScript
- [ ] Static type checking versus runtime behavior
- [ ] Installing TypeScript locally in a project
- [ ] Understanding `package.json`, dependencies, and npm scripts
- [ ] Running the compiler with `npx tsc`
- [ ] Understanding `tsconfig.json`
- [ ] Compiler options, `include`, `exclude`, `files`, and `extends`
- [ ] Source directory and output directory organization
- [ ] Compiling TypeScript and understanding emitted JavaScript
- [ ] Watch mode and development workflow
- [ ] Source maps and debugging compiled code
- [ ] TypeScript with browser/DOM projects
- [ ] TypeScript with Node.js projects
- [ ] Build tools/transpilers versus the TypeScript type checker
- [ ] Separate development, type-checking, and production scripts

### 2. Basic Types and Type Inference --- Core

- [ ] Primitive types: `string`, `number`, `boolean`, `bigint`, and
      `symbol`
- [ ] Arrays: `T[]` and `Array<T>`
- [ ] Readonly arrays: `readonly T[]` and `ReadonlyArray<T>`
- [ ] Tuples, named elements, optional elements, and rest elements
- [ ] Object types and nested object types
- [ ] Optional and readonly properties
- [ ] `null` and `undefined`
- [ ] `any` versus `unknown`
- [ ] `void` and `never`
- [ ] Literal types
- [ ] Type annotations and type inference
- [ ] Return-type inference and contextual typing
- [ ] Type widening and narrowing
- [ ] `const` versus `let` inference
- [ ] `as const`
- [ ] The `satisfies` operator
- [ ] When to annotate and when to rely on inference
- [ ] Enums, string/numeric enums, and `const enum` trade-offs
- [ ] Literal unions as an alternative to enums where appropriate

### 3. Union Types, Intersection Types, and State Modeling --- Core

- [ ] Union types (`A | B`)
- [ ] Intersection types (`A & B`)
- [ ] Literal unions and nullable values
- [ ] Optional values and `undefined`
- [ ] Discriminated unions
- [ ] Mutually exclusive properties
- [ ] Modeling loading, success, empty, and error states
- [ ] Exhaustive checking with `never`
- [ ] Designing types that make invalid states harder to represent
- [ ] Avoiding contradictory or impossible type combinations

### 4. Interfaces and Type Aliases --- Core

- [ ] Defining interfaces and type aliases
- [ ] Interface versus type alias
- [ ] Extending interfaces and composing types
- [ ] Multiple interface inheritance
- [ ] Optional and readonly properties
- [ ] Index signatures
- [ ] Call signatures and construct signatures
- [ ] Declaration merging
- [ ] Excess property checks
- [ ] Structural typing and type compatibility
- [ ] Modeling nested objects and reusable domain types
- [ ] Choosing clear, consistent type names

## Phase 2 --- Reliable application logic

### 5. Functions and Function Types --- Core

- [ ] Parameter annotations and return types
- [ ] Optional, default, and rest parameters
- [ ] Function types and signatures
- [ ] Arrow functions and callback typing
- [ ] Higher-order functions
- [ ] Function overloads and implementation signatures
- [ ] Overloads versus union parameters
- [ ] The `this` parameter
- [ ] `void` and `never` return types
- [ ] Function compatibility
- [ ] Typing array methods and callbacks
- [ ] Async functions and promise return types
- [ ] Clear function names, input contracts, and output contracts

### 6. Type Narrowing and Type Guards --- Core

- [ ] Control-flow analysis
- [ ] `typeof` narrowing
- [ ] `instanceof` narrowing
- [ ] Equality and truthiness narrowing
- [ ] The `in` operator
- [ ] `Array.isArray` and built-in narrowing patterns
- [ ] Discriminated-union narrowing
- [ ] Narrowing after assignments
- [ ] User-defined type guards
- [ ] Type predicates (`value is Type`)
- [ ] Assertion functions (`asserts`)
- [ ] Narrowing `unknown` safely
- [ ] Narrowing optional and nullable values
- [ ] Exhaustiveness checks with `never`
- [ ] Common narrowing pitfalls and how to debug them

### 7. Objects, Keys, and Indexed Access Types --- Core

- [ ] Structural typing in practice
- [ ] Nested objects and arrays of objects
- [ ] Index signatures and dynamic keys
- [ ] `keyof`
- [ ] `typeof` in type positions
- [ ] Indexed access types (`T[K]`)
- [ ] Key/value relationships
- [ ] Generic key-safe property access
- [ ] `Record<K, T>` and object dictionaries
- [ ] Excess property checks versus structural compatibility
- [ ] Potentially missing properties and safe indexed access
- [ ] Modeling dictionaries and configuration objects

### 8. Classes and Object-Oriented TypeScript --- Core

- [ ] Classes, constructors, properties, and methods
- [ ] `public`, `private`, and `protected`
- [ ] TypeScript `private` versus JavaScript `#private`
- [ ] `readonly` properties and parameter properties
- [ ] Getters and setters
- [ ] Static members and static initialization blocks
- [ ] Abstract classes and abstract methods
- [ ] Implementing interfaces
- [ ] `implements` versus `extends`
- [ ] Inheritance and method overriding
- [ ] The `override` keyword
- [ ] Class expressions and class compatibility
- [ ] Abstract classes versus interfaces
- [ ] When classes are useful versus simpler functions and objects

### 9. Generics --- Core

- [ ] Generic functions, interfaces, type aliases, and classes
- [ ] Generic constraints with `extends`
- [ ] Multiple generic parameters
- [ ] Default generic parameters
- [ ] Generic inference versus explicit type arguments
- [ ] `keyof` and indexed access with generics
- [ ] Constraints based on object properties
- [ ] Constraining keys to valid properties
- [ ] Preserving input/output type relationships
- [ ] Generic defaults and inference limitations
- [ ] Reusable generic patterns
- [ ] Common generic mistakes
- [ ] When not to use generics
- [ ] Keeping generic APIs understandable

### 10. Built-in Utility Types --- Core

- [ ] `Partial<T>` and `Required<T>`
- [ ] `Readonly<T>`
- [ ] `Pick<T, K>` and `Omit<T, K>`
- [ ] `Record<K, T>`
- [ ] `Exclude<T, U>` and `Extract<T, U>`
- [ ] `NonNullable<T>`
- [ ] `ReturnType<T>` and `Parameters<T>`
- [ ] `ConstructorParameters<T>` and `InstanceType<T>`
- [ ] `Awaited<T>`
- [ ] `ThisParameterType<T>`, `OmitThisParameter<T>`, and
      `ThisType<T>`
- [ ] Combining utility types
- [ ] Applying utility types to API models and update/patch operations
- [ ] Built-in utilities versus custom types

## Phase 3 --- Advanced type-system skills

### 11. Type Assertions and Type-Safety Boundaries --- Core/Production

- [ ] Type assertions using `as`
- [ ] Assertions versus annotations versus narrowing
- [ ] Non-null assertion operator (`!`)
- [ ] Angle-bracket assertion syntax and its limitations
- [ ] Double assertions through `unknown` and why they are risky
- [ ] DOM element assertions
- [ ] Why assertions do not validate runtime data
- [ ] Safer alternatives to assertions
- [ ] Auditing and minimizing unsafe assertions

### 12. Mapped Types --- Advanced

- [ ] Basic mapped types
- [ ] Mapping over `keyof`
- [ ] Mapping over unions of keys
- [ ] Optional and readonly modifiers
- [ ] Adding/removing modifiers with `+` and `-`
- [ ] Key remapping with `as`
- [ ] Filtering keys with key remapping
- [ ] Mapped types with generics
- [ ] Homomorphic mapped types
- [ ] Preserving property modifiers
- [ ] Building justified custom utility types
- [ ] Combining mapped and conditional types

### 13. Conditional Types and `infer` --- Advanced

- [ ] Conditional types using `extends`
- [ ] True and false branches
- [ ] Conditional types with generics
- [ ] Distributive conditional types
- [ ] Preventing distribution with tuple wrapping
- [ ] The `infer` keyword
- [ ] Inferring function parameters and return types
- [ ] Inferring array, tuple, and promise element types
- [ ] Nested conditional types
- [ ] Recursive conditional types
- [ ] Combining conditional and mapped types
- [ ] Type inference limitations
- [ ] Debugging complex type expressions

### 14. Template Literal Types --- Advanced

- [ ] Template literal types
- [ ] Combining literal unions
- [ ] Union expansion and combinations
- [ ] `Uppercase<T>`, `Lowercase<T>`, `Capitalize<T>`, and
      `Uncapitalize<T>`
- [ ] Template literal types with generics
- [ ] Key remapping with template literal types
- [ ] Type-safe event names
- [ ] Type-safe property paths
- [ ] Practical patterns and limitations
- [ ] Avoiding excessive type expansion

### 15. Advanced Type Modeling and Design Patterns --- Advanced

- [ ] Recursive types and recursive conditional types
- [ ] Branded types and nominal-type patterns
- [ ] Type-level transformations
- [ ] Variance, covariance, and contravariance
- [ ] Generic variance annotations and their limitations
- [ ] Key-dependent generic types
- [ ] Type-safe builders
- [ ] Type-safe configuration objects
- [ ] Type-safe event maps
- [ ] Type-safe API patterns
- [ ] Discriminated-union design patterns
- [ ] Preventing invalid application states
- [ ] Balancing precision, readability, and maintainability
- [ ] Understanding type-instantiation and compiler-complexity risks

> **Learning note:** Master generic constraints, mapped types,
> conditional types, and `infer` before spending substantial time on
> recursive type puzzles or complex type-level programming.

## Phase 4 --- Modules and platform APIs

### 16. Modules and Module Resolution --- Core/Production

- [ ] ES modules: named/default imports and exports
- [ ] Import aliases and re-exports
- [ ] `import type` and `export type`
- [ ] Type-only imports/exports versus runtime imports
- [ ] ESM versus CommonJS
- [ ] `module` and `moduleResolution`
- [ ] TypeScript module detection
- [ ] `verbatimModuleSyntax`
- [ ] Package entry points
- [ ] Package `exports`, `imports`, and `types` fields
- [ ] JSON imports and configuration
- [ ] Path aliases and their runtime/build-tool implications
- [ ] Circular dependencies and dependency boundaries
- [ ] Module interoperability and common resolution errors

### 17. Declaration Files and Third-Party Types --- Advanced/Specialized

- [ ] What `.d.ts` files do
- [ ] Declaration files versus generated declaration output
- [ ] `declare` and ambient declarations
- [ ] Declaring variables, functions, modules, and globals
- [ ] Finding and installing `@types` packages
- [ ] DefinitelyTyped
- [ ] Module augmentation and global augmentation
- [ ] Declaration merging
- [ ] Typing JavaScript libraries without bundled types
- [ ] Reading third-party library declarations
- [ ] Declaration maps and generated type output
- [ ] Writing declarations for reusable libraries
- [ ] Publishing and maintaining library types

### 18. JavaScript, Browser, Node.js, and Platform APIs --- Core

- [ ] DOM types and browser APIs
- [ ] Event listeners and event-handler types
- [ ] Form and input types
- [ ] Fetch API and `Response`
- [ ] `Promise<T>` and async/await
- [ ] Typing asynchronous functions
- [ ] `JSON.parse` and untrusted JSON
- [ ] Node.js types and built-in APIs
- [ ] Environment variables
- [ ] Third-party JavaScript libraries
- [ ] Platform-specific types and `lib` configuration
- [ ] Static types versus runtime values
- [ ] Handling missing, nullable, and optional API fields

### 19. Error Handling and Safe Asynchronous Code --- Production

- [ ] Typing `try/catch`
- [ ] `unknown` in catch variables
- [ ] Narrowing errors safely
- [ ] Built-in `Error` and custom error classes
- [ ] Error causes and useful error context
- [ ] Error types versus error messages
- [ ] Discriminated-union error models
- [ ] Result types for explicit success/failure handling
- [ ] Promise rejection and asynchronous failure handling
- [ ] Avoiding unsafe error assertions
- [ ] Consistent error-handling boundaries
- [ ] Testing failure paths as well as successful paths

## Phase 5 --- Production TypeScript engineering

### 20. Runtime Validation and External Data --- Production

- [ ] Why compile-time types cannot validate external data
- [ ] Trust boundaries: APIs, forms, files, environment variables, and
      databases
- [ ] Treating external data as `unknown`
- [ ] Writing reusable runtime type guards
- [ ] Validation versus transformation
- [ ] Parsing untrusted data into trusted domain values
- [ ] Schema-based validation with a library such as Zod
- [ ] Validating API requests and responses
- [ ] Handling validation errors
- [ ] Optional, nullable, missing, and defaulted values
- [ ] Validating environment configuration at application startup
- [ ] Keeping runtime schemas and TypeScript types consistent
- [ ] Avoiding duplicate or contradictory validation rules

### 21. TypeScript Configuration and Compiler Options --- Production

- [ ] `target`, `lib`, and `jsx`
- [ ] `module` and `moduleResolution`
- [ ] `strict` and the strict family of options
- [ ] `noImplicitAny`
- [ ] `strictNullChecks`
- [ ] `strictFunctionTypes`
- [ ] `strictPropertyInitialization`
- [ ] `noImplicitThis` and `noImplicitOverride`
- [ ] `noUnusedLocals` and `noUnusedParameters`
- [ ] `noUncheckedIndexedAccess`
- [ ] `exactOptionalPropertyTypes`
- [ ] `useUnknownInCatchVariables`
- [ ] `noImplicitReturns` and `noFallthroughCasesInSwitch`
- [ ] `verbatimModuleSyntax`
- [ ] `isolatedModules`
- [ ] `esModuleInterop` and `resolveJsonModule`
- [ ] `rootDir` and `outDir`
- [ ] `skipLibCheck` and its trade-offs
- [ ] Project references and incremental compilation
- [ ] Shared configuration and extending configurations
- [ ] Configurations for applications, libraries, and tests
- [ ] Diagnosing configuration conflicts

### 22. Tooling, Builds, and CI --- Production

- [ ] TypeScript with npm and package scripts
- [ ] TypeScript with Vite
- [ ] TypeScript with React
- [ ] TypeScript with Node.js
- [ ] ESLint and TypeScript-aware lint rules
- [ ] Prettier and consistent formatting
- [ ] Type checking without emitting JavaScript
- [ ] Build versus type-check
- [ ] Debugging and source maps
- [ ] VS Code TypeScript language-service features
- [ ] Managing TypeScript versions
- [ ] Separate development and production scripts
- [ ] Type checking in CI
- [ ] Automated build verification
- [ ] Reproducible dependency installation and lockfiles
- [ ] Incremental builds and project references
- [ ] Transpilers versus type checkers
- [ ] Preventing successful bundling from hiding type errors

> **Production rule:** A bundler generating JavaScript does not
> necessarily mean the whole project passed TypeScript type checking.
> Enforce the required type-check and test commands in CI.

### 23. Production Coding Standards and Maintainability --- Production

- [ ] Naming types, variables, functions, and domain concepts clearly
- [ ] Choosing inference versus explicit annotations
- [ ] Avoiding unnecessary `any`
- [ ] Preferring `unknown` for untrusted values
- [ ] Avoiding excessive assertions and non-null operators
- [ ] Choosing interfaces, aliases, unions, and classes appropriately
- [ ] Choosing literal unions versus enums based on requirements
- [ ] Designing reusable but simple types
- [ ] Keeping types close to their ownership boundaries
- [ ] Separating domain models, transport models, and persistence
      models when appropriate
- [ ] Avoiding duplicated or conflicting definitions
- [ ] Refactoring JavaScript to TypeScript incrementally
- [ ] Handling legacy unsafe code
- [ ] Maintaining type safety across application layers
- [ ] Reviewing type complexity and compiler performance
- [ ] Understanding compile-time guarantees and limitations
- [ ] Making code readable and maintainable for the next engineer

### 24. Testing TypeScript Applications --- Production

- [ ] Unit testing TypeScript functions
- [ ] Testing asynchronous code
- [ ] Integration testing API and database boundaries
- [ ] Testing validation failures and malformed data
- [ ] Mocking external dependencies safely
- [ ] Testing error paths and edge cases
- [ ] Testing discriminated unions and state transitions
- [ ] Testing public API behavior
- [ ] Type-level tests for generic utilities and library APIs
- [ ] Regression tests for type-related bugs
- [ ] Test coverage versus meaningful test quality
- [ ] Running tests and type checks in CI

### 25. Application Architecture and Domain Modeling --- Production

- [ ] Modeling domain entities and business rules
- [ ] Distinguishing entities, DTOs, and database models
- [ ] Designing request and response contracts
- [ ] Separating validation, business logic, and infrastructure
- [ ] Dependency injection where it provides value
- [ ] Defining interfaces at appropriate boundaries
- [ ] Managing shared types without creating dependency tangles
- [ ] Modeling state transitions explicitly
- [ ] Typed service and repository interfaces
- [ ] Maintaining type safety across frontend and backend
- [ ] Consistent error handling across layers
- [ ] Choosing architecture proportional to project complexity

## Phase 6 --- Compiler internals and advanced engineering

### 26. TypeScript Compiler Internals --- Advanced

- [ ] Scanning and parsing
- [ ] Abstract Syntax Trees (ASTs)
- [ ] Binding and symbol tables
- [ ] Type checking
- [ ] Type inference and assignability
- [ ] Compiler diagnostics
- [ ] Type erasure
- [ ] JavaScript code emission
- [ ] Compilation versus runtime execution
- [ ] Build-performance basics
- [ ] Reading compiler errors systematically
- [ ] Recognizing when complex types hurt compile time or developer
      experience

### 27. Advanced Type-System Research --- Advanced/Specialized

- [ ] Type compatibility and variance in depth
- [ ] Generic inference edge cases
- [ ] Conditional-type distribution
- [ ] Recursive type limitations
- [ ] Advanced declaration authoring
- [ ] Complex overload resolution
- [ ] Type-level API design
- [ ] Compiler performance and type-instantiation complexity
- [ ] Reading official TypeScript release notes
- [ ] Evaluating advanced patterns for practical value

## Phase 7 --- Practice and portfolio

### 28. Exercises and Debugging Practice --- Core/Advanced

- [ ] Primitive, array, tuple, and object exercises
- [ ] Function and callback typing
- [ ] Union and narrowing challenges
- [ ] Discriminated-union design exercises
- [ ] Generic function and constraint challenges
- [ ] Utility-type transformations
- [ ] Mapped and conditional type exercises
- [ ] Recursive type challenges
- [ ] Fixing compiler errors without blindly adding assertions
- [ ] Refactoring `any`-heavy JavaScript into safer TypeScript
- [ ] Reading unfamiliar source code and type declarations
- [ ] Explaining why a type error occurs and how to prevent it

### 29. Progressive Projects

#### Project 1 --- Type-safe product inventory

- [ ] Model products and inventory operations
- [ ] Implement typed filtering, sorting, and searching
- [ ] Handle missing products and invalid updates
- [ ] Add unit tests
- [ ] Use strict compiler settings

#### Project 2 --- Validated form and configuration system

- [ ] Model form values and optional fields
- [ ] Validate data at runtime
- [ ] Create useful validation errors
- [ ] Validate environment configuration
- [ ] Test invalid and boundary inputs

#### Project 3 --- Type-safe API client

- [ ] Type request and response contracts
- [ ] Fetch and handle asynchronous operations
- [ ] Treat response JSON as untrusted data
- [ ] Validate response data at runtime
- [ ] Model success and failure results
- [ ] Test network errors, invalid responses, and edge cases

#### Project 4 --- TypeScript CLI or Node.js API

- [ ] Structure modules and configuration
- [ ] Validate environment variables and user input
- [ ] Implement error handling and logging
- [ ] Add tests and production build scripts
- [ ] Add CI checks

#### Project 5 --- Full-stack TypeScript application

- [ ] React frontend with TypeScript
- [ ] Node.js backend with TypeScript
- [ ] Database integration and domain modeling
- [ ] Authentication and authorization
- [ ] Runtime validation at API boundaries
- [ ] Shared contracts where appropriate
- [ ] Unit and integration tests
- [ ] Strict type checking in CI
- [ ] Production build and deployment
- [ ] Document architectural and type-design trade-offs

### 30. Final Mastery Checkpoints

- [ ] Explain type errors and compiler behavior without guessing
- [ ] Design domain types before implementing complex logic
- [ ] Validate external data at runtime
- [ ] Model loading, success, empty, and error states
- [ ] Write reusable generics while preserving input/output
      relationships
- [ ] Read unfamiliar third-party declarations
- [ ] Configure strict type checking for different project
      environments
- [ ] Test behavior, validation, and error paths
- [ ] Refactor unsafe code without spreading `any` and assertions
- [ ] Build and deploy a complete TypeScript application
- [ ] Explain trade-offs behind important design decisions
- [ ] Identify when a type is too complex and simplify it

## Suggested Completion Standard

For each major topic:

1.  **Understand:** Explain what it is, why it exists, and when to use
    or avoid it.
2.  **Implement:** Write a small example without copying a tutorial.
3.  **Debug:** Intentionally introduce an error and explain the compiler
    diagnostic.
4.  **Apply:** Use the concept in a realistic task or project.
5.  **Review:** Refactor for clarity, safety, naming, and
    maintainability.
6.  **Verify:** Write tests when behavior is involved and run the
    project type-check.

## Official References

- [TypeScript Documentation and
  Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript for JavaScript
  Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Everyday
  Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [Utility
  Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [TSConfig Reference](https://www.typescriptlang.org/tsconfig/)
- [Declaration
  Files](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)
- [Type
  Compatibility](https://www.typescriptlang.org/docs/handbook/type-compatibility.html)
- [TypeScript Release
  Notes](https://www.typescriptlang.org/docs/handbook/release-notes/overview.html)

---

**Important:** This is a mastery checklist, not a requirement to study
every advanced feature before building software. Prioritize core
language skills, runtime validation, testing, and real projects. Learn
specialized type-level techniques when they solve a concrete problem.
