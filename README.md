# TanStack Router 🚀

This is a demo project showcasing the usage of TanStack Router for client-side routing in a React application. It includes TanStack Devtools for debugging and utilizes a Vite plugin for automatic route generation via file-based routing.

## Table of Contents 📚

- [Introduction](#what-is-tanstack-router)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Run the Project](#run-the-project)
- [Project Structure](#folder-structure)

## What is TanStack Router? 🧐

A fully type-safe React router with built-in data fetching, stale-while revalidate caching and first-class search-param APIs. Some of its features include:

- 100% inferred TypeScript support
- Typesafe navigation
- Nested Routing and layout routes
- Built-in Route Loaders w/ SWR Caching
- Designed for client-side data caches (TanStack Query, SWR, etc.)
- Automatic route prefetching
- Asynchronous route elements and error boundaries
- File-based Route Generation
- Typesafe JSON-first Search Params state management APIs
- Path and Search Parameter Schema Validation
- Search Param Navigation APIs
- Custom Search Param parser/serializer support
- Search param middleware
- Route matching/loading middleware

for more info check [TanStack Router documentation]("https://tanstack.com/router/latest")

[Demo URL](https://tanstack-router.netlify.app/)

## Getting Started 🚀

### Installation 💻

1. **Clone the Repository:**

```bash
 git clone https://github.com/Honey0908/POC-TanStack-Router
```

2. **Navigate to the Project Directory:**

```bash
cd POC-TanStack-Router
```

2. **Install Dependencies:**

```bash
 npm install
```

### Run the Project 🏃‍♂️

Now, you're ready to run the tanStack Router Demo:

Start the Server:

```bash
npm run dev
```

## Folder Structure 📂

```sh
.
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── App.tsx
│   ├── codeBasedRouting.tsx                   # code based Routing Example
│   ├── components
│   │   ├── Navbar.tsx
│   │   ├── RouteApiExample.tsx                # useRouteApi() usage
│   │   └── Spinner.tsx
│   ├── hooks
│   │   └── useAuth.ts
│   ├── index.css
│   ├── main.tsx
│   ├── routes
│   │   ├── _auth                              # layout/pathless route
│   │   │   ├── profile
│   │   │   │   └── index.tsx
│   │   │   └── route.tsx
│   │   ├── index.lazy.tsx
│   │   ├── lazyRoute
│   │   │   └── route.lazy.tsx                 # lazy route
│   │   ├── login
│   │   │   └── route.tsx
│   │   ├── navigationBlocking                 # naviagtion blocking example
│   │   │   └── index.tsx
│   │   ├── products
│   │   │   ├── $productId.tsx                 #dynamic route
│   │   │   └── index.tsx
│   │   ├── products_                          #non-nested route
│   │   │   └── $productId
│   │   │       └── edit.tsx
│   │   ├── __root.tsx                         #root layout
│   │   └── users
│   │       └── index.tsx
│   ├── routeTree.gen.ts                       #route tree
│   ├── services
│   │   ├── products.ts
│   │   └── users.ts
│   ├── types
│   │   └── types.ts
│   ├── utils
│   │   └── auth.ts
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
