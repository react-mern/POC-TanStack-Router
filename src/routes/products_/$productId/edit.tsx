import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/$productId/edit')({
  component: EditProduct
})

function EditProduct() {
  const params = Route.useParams();
  return <h1 className='text-2xl text-center font-semibold text-blue-700 my-5'> This is Edit component for product {params.productId}</h1>
}