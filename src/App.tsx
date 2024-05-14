import { ErrorComponent, Link, RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { Spinner } from './components/Spinner'
import { useAuth } from './hooks/useAuth'

// Create a new router instance
const router = createRouter({
  // pass automatically generated route tree using vite plugin or using router CLI (tsr binary)
  routeTree,
  defaultPendingComponent: () => <Spinner />,
  defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
  // add auth context 
  context: { auth: undefined! },
  defaultNotFoundComponent: () => {
    return (
      <div className='text-center'>
        <p className='text-2xl font-semibold'>Not found!</p>
        <Link to="/" className='text-blue-500 '>Go home</Link>
      </div>
    )
  },
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}


function App() {
  const auth = useAuth();
  // pass router and context to router provider
  return <RouterProvider router={router} context={{ auth }} />;
}

export default App;