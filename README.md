# Kasagi Labo Programming Challenges

## Challenge A

Generate 10MB file containing:

- Alphabetical strings
- Integers
- Real numbers
- Alphanumeric strings (with spaces)

### Cloning Repository

```bash
git clone https://github.com/FandiAR/kasogi-labo.git
```

### Manual Run:

1. Go to directory

```bash
cd kasogi-labo
```

2. Install package

```bash
pnpm i
```

3. Generate printable random objects

```bash
pnpm run generate
```

4. Parse and print generated file above

```bash
pnpm run parse
```

### Run using Docker:

1. Build Docker image

```bash
pnpm run docker:build
```

2. Run

```bash
pnpm run docker:run
```
