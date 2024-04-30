import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/tempRoute')({
  component: () => <div>Hello /tempRoute!</div>
})