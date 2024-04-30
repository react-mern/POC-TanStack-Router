import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useAuth } from '../../../hooks/useAuth';

export const Route = createFileRoute('/_auth/profile/')({
  component: Profile
})

function Profile() {
  const navigate = useNavigate();

  const { getUsername, signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
    navigate({ to: "/" })
  }

  return (
    <div className="flex items-center justify-center h-full bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">👤 Profile</h1>
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">👋</span>
          <p className="text-xl text-gray-800 font-bold">{getUsername()}</p>
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