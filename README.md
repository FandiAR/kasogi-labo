<h1 align="center">Kasagi Labo Programming Challenges</h1>

## Table of Contents

- [Challenges](#challenges)
- [Features](#features)
- [Directory Structure](#directory)
- [How to Run Manually](#run-manually)
- [How to Run Via Docker](#run-via-docker)

## Challenges

### Challenge A

Generate 10MB file containing:

- Alphabetical strings
- Integers
- Real numbers
- Alphanumeric strings (with spaces)

### Challenge B

Create a program that will read the generated file above and print to the console the object and
its type. Spaces before and after the alphanumeric object must be stripped.

## Features

- Can generate four (4) types of printable random objects and store them in a single file, each object will be separated by a ",".
- Can read the generated file above and print to the console the object and its type. Spaces before and after the alphanumeric object must be stripped.

## Directory Structure

```bash
kasogi-labo/
├── challenge-a
│   └── generate.ts
├── challenge-b
│   └── parse.ts
├── dist/
├── node_modules/
├── output/
│   ├── data.txt
│   └── result.txt
├── .gitattributes
├── .gitignore
├── docker-run.js
├── Dockerfile
├── package.json
├── pnpm-lock.yaml
├── README.md
└── tsconfig.json
```

## Run Manually

1. Cloning Repository

```bash
git clone https://github.com/FandiAR/kasogi-labo.git
```

2. Go to directory

```bash
cd kasogi-labo
```

3. Install package

```bash
pnpm i
```

4. Generate printable random objects

```bash
pnpm run generate
```

5. Parse and print generated file above

```bash
pnpm run parse
```

## Run via Docker:

1. Build Docker image

```bash
pnpm run docker:build
```

2. Run Docker

```bash
pnpm run docker:run
```
