# Nuxt UI Minimal Starter

Look at [Nuxt docs](https://nuxt.com/docs/getting-started/introduction) and [Nuxt UI docs](https://ui.nuxt.com) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## NOTES ## 🧁🐿️

When testing locally, be sure to use firefox or enable file-access-from-files in chrome.
Otherwise, phaser won't load. https://chrome-allow-file-access-from-file.com/

# TODOS 🍎

next :

- Build basic game
  - ~~physics / config changes~~
  - ~~change jump to interact~~
  - ~~up/down movement~~
  - ~~kitchen object spritesheets~~
  - kitchen object game code
    - basic collisions
- test online multiplayer logic with ably server plugin, refactor server.js as needed
  - make player join screen
- update drawio to reflect tech stack changes

later ...

- install cypress and write tests?
- setup CI w github actions?
- TUTORIAL FILES TO BE FACTORED OUT /server/views, /public/exposion.js, gameover.js, nickname.js, winner.js and script.js?

# DONE 🧃✅

~~- add 2nd player controls via gamepad?~~
~~- tutorial files~~
~~- load phaser on app.vue~~

# PROJECT STRUCTURE 💬

We follow Nitro server structure
https://nitro.unjs.io/guide

Documentation for main project structure is in ARCHITECTURE.drawio

server/views and /public are currently full of tutorial files that will be deleted
