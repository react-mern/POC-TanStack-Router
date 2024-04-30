import { getRouteApi } from '@tanstack/react-router'

const route = getRouteApi("/products/");

export function RouteApiExample() {
  const loaderData = route.useRouteContext()

  return <div>{JSON.stringify(loaderData)}</div>
}