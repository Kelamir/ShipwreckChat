![logo256](https://github.com/Kelamir/shipwreckchat/assets/61295121/63b0ccf3-654d-43e2-bbc7-09c68551b81c)

# Shipwreck Chat

Source for the Shipwreck Chat web app

## About

The ShipwreckChat, the app for you to chat with friends and exercise pirate lingo

## Stack

- Next.js framework with App Router
- tRPC for API endpoint
- Auth0 for authentication
- Postgres for storing persistent data
- Socket.io for realtime communication
- Jest for testing
- Prisma as an ORM
- Storybook for component maintenance
- Zustand for client-side state management

## Set up

1. Configure Auth0

Add `.env.local` and fill it in with your corresponding data.

```txt
AUTH0_SECRET=
AUTH0_BASE_URL=
AUTH0_ISSUER_BASE_URL=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
```
