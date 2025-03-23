# CTA Shadcn Template

A modern React template built with TanStack Router, Shadcn UI, and Lucide Icons. This template provides a solid foundation for building beautiful, type-safe React applications.

## Features

- 🛣️ [TanStack Router](https://tanstack.com/router/latest)
- 🎨 [Shadcn UI](https://ui.shadcn.com/) components
- 🎯 [Lucide Icons](https://lucide.dev/icons/) for beautiful icons
- 📦 TypeScript support
- 🔄 File-based routing
- 🎭 Modern UI components
- 🎨 Tailwind CSS V4 for styling
- 📊 Pre-built dashboard layout
- 🔐 Authentication-ready login page

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/jamdaniels/cta-shadcn-template
```

2. Install dependencies:

```bash
npm i
```

3. Start the development server:

```bash
npm start
```

## Building for Production

To build the application for production:

```bash
npm run build
```

## Adding Shadcn Components

Add new Shadcn components using the latest version:

```bash
npx shadcn@latest add button --force
```

## Project Structure

```
src/
├── routes/           # File-based routes
│   ├── dashboard/    # Dashboard routes
│   ├── login.tsx     # Login page
│   └── __root.tsx    # Root layout
├── components/       # React components
├── lib/             # Utility functions
└── styles/          # Global styles
```

## Pre-built Pages

The template includes several pre-built pages to help you get started:

### Dashboard

A modern dashboard layout with:

- Responsive sidebar navigation
- Header with user menu
- Sample dashboard widgets
- Dark mode support

### Login Page

A clean authentication page with:

- Email/password form
- Remember me option
- Forgot password link
- Social login buttons

## Examples

This template uses TanStack Router with file-based routing. Routes are managed as files in `src/routes`.

### Adding Routes

Simply add a new file in the `./src/routes` directory. TanStack will automatically generate the route configuration.

### Using Links

Import the `Link` component from TanStack Router:

```tsx
import { Link } from "@tanstack/react-router";

// Usage
<Link to="/about">About</Link>;
```

### Layouts

The root layout is located in `src/routes/__root.tsx`. Use the `<Outlet />` component to render nested routes:

```tsx
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Outlet />
    </>
  ),
});
```

## Data Fetching

The template supports multiple data fetching approaches:

### Route Loaders

Use TanStack Router's built-in loader functionality:

```tsx
const route = createRoute({
  path: "/data",
  loader: async () => {
    const response = await fetch("https://api.example.com/data");
    return response.json();
  },
  component: () => {
    const data = route.useLoaderData();
    return <div>{/* Use data */}</div>;
  },
});
```

### React Query

For more complex data fetching scenarios, the template includes React Query support:

```tsx
import { useQuery } from "@tanstack/react-query";

function Component() {
  const { data } = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      fetch("https://api.example.com/data").then((res) => res.json()),
  });

  return <div>{/* Use data */}</div>;
}
```

## State Management

The template includes TanStack Store for state management:

```tsx
import { useStore } from "@tanstack/react-store";
import { Store } from "@tanstack/store";

const store = new Store(initialState);

function Component() {
  const state = useStore(store);
  return <div>{/* Use state */}</div>;
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
