# Next.js Starter Template with Postgres and Prisma

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Postgres](https://www.postgresql.org/)
- **ORM**: [Prisma ORM](https://www.prisma.io/orm/)

## Requirements

- [Docker](https://www.docker.com) in installed in your local development environment.

## Getting Started

```bash
mkdir with-postgres-prisma
cd with-postgres-prisma
npx degit https://github.com/monolayer/cloud-examples/with-postgres-prisma
npm install
```

## Running Locally

Start the development database server with:

```bash
npm workloads start dev
```

Then, run the database migrations and seed the database:

```bash
npm db:bootstrap
```

Finally, run the Next.js development server:

```bash
npm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.
