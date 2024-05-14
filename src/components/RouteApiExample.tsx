import { getRouteApi } from '@tanstack/react-router'

// Getting the route API for the "/products/" route
const route = getRouteApi("/products/");
// By calling getRouteApi('/products'), you bind the route-specific hooks to the routeApi object, allowing you to access route-specific functionality like useLoaderData, useParams, useNavigate, etc., with type safety.

export function RouteApiExample() {
  const loaderData = route.useRouteContext()

  return <div>{JSON.stringify(loaderData)}</div>
}