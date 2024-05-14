import { createLazyFileRoute } from '@tanstack/react-router'

// lazy loading 
export const Route = createLazyFileRoute('/lazyRoute')({
  component: () => <div>Hello /lazyRoute!</div>
})