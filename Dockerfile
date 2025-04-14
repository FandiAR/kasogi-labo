FROM node:20-alpine

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json tsconfig.json ./
COPY challenge-b ./challenge-b
COPY output ./output

RUN pnpm install

CMD ["pnpm", "run", "parse"]
