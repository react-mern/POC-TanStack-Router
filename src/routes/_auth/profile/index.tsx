import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useAuth } from '../../../hooks/useAuth';

//_auth is layout route, Pathless/Layout routes can be used to wrap child routes with additional components and logic, without requiring a matching path in the URL
export const Route = createFileRoute('/_auth/profile/')({
  // staleTime to control how long data is considered fresh
  // Consider the route's data fresh for 10 seconds
  //  staleTime: Infinity, to turn off SWR
  staleTime: 10_000,
  //  // Do not cache this route's data after it's unloaded
  // gcTime: 0,
  // // Only reload the route when the user navigates to it or when deps change
  // shouldReload: false,
  component: Profile
})

function Profile() {
  //get context from parent route
  const { username } = Route.useRouteContext();

  const navigate = useNavigate();

  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
    // navigate to "/" after signout
    navigate({ to: "/" })
  }

  return (
    <div className="flex items-center justify-center h-full bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">👤 Profile</h1>
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">👋</span>
          <p className="text-xl text-gray-800 font-bold">{username}</p>
        </div>
        <p className="text-gray-600 mb-4">Welcome back to your profile! 🎉</p>
        <p className="text-gray-600">Feel free to explore and update your information. ✨</p>
        <button
          onClick={handleSignOut}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
        >
          Logout
        </button>
      </div>
    </div>
  );
}