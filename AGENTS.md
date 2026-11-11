# Repository Guidelines

## Project Structure & Module Organization

Use Next.js App Router conventions. Keep route entry points and route-specific
UI in `app/`, with shared code in clearly named shared modules when it is used
by more than one route. Keep configuration at the repository root and update
the dependency lockfile whenever dependencies change.

## Development Workflow

Use the scripts declared in `package.json` for development, validation, and
production tasks rather than undocumented ad-hoc commands. Run the applicable
linting, type-checking, testing, and build checks before submitting changes.

## Coding Style & Naming Conventions

Use TypeScript and React. Follow the repository's linting and formatting
configuration; when a rule is not specified, match the surrounding code. Use
`PascalCase` for components and types, `camelCase` for functions and variables,
and Next.js conventions for special route files such as `page.tsx` and
`layout.tsx`. App Router components are server components by default; add
`"use client"` only when browser interactivity requires it.

## Testing Guidelines

Add focused automated tests for non-trivial behavior. Use the test framework
configured by the repository, name files `*.test.ts` or `*.test.tsx`, and keep
tests near the code they cover or in a `__tests__/` directory. Document new
test commands in `package.json` and avoid lowering established coverage.

## Commit & Pull Request Guidelines

Use short, imperative commit subjects; prefixes such as `feat:`, `fix:`, and
`chore:` are encouraged. Pull requests should explain the change, describe
validation performed, link related issues when applicable, and include
screenshots for visual changes. Do not commit generated dependencies or build
output.

## Security & Configuration

Keep secrets in local environment files and never commit credentials, tokens, or
private keys. Validate untrusted input at system boundaries and review
dependency changes before merging.
