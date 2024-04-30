import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/$productId/edit')({
  component: EditProduct
})

function EditProduct() {
  const params = Route.useParams();
  return <h1>{JSON.stringify(params)}</h1>
}