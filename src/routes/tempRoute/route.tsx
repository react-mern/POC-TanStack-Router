import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tempRoute')({
  component: () => <div>Hello /tempRoute!</div>
})