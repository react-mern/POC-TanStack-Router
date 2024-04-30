import { createFileRoute, redirect, useRouter, useRouterState } from '@tanstack/react-router';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { z } from 'zod';

export const Route = createFileRoute('/login')({
  beforeLoad: ({ context }) => {
    if (context.auth.isLogged()) {
      throw redirect({
        to: '/profile'
      });
    }
  },
  validateSearch: z.object({
    redirect: z.string().optional(),
  }),
  component: Login,
});

function Login() {
  const router = useRouter();
  const search = Route.useSearch();
  const [username, setUsername] = useState('');
  const { signIn } = useAuth();

  const handleLogin = () => {
    signIn(username);
    router.invalidate();
    router.history.push(search?.redirect ?? "/login")
  };

  return (
    <div className="h-full bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 w-full mb-4"
        />
        <button
          onClick={handleLogin}
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none w-full"
        >
          Login
        </button>

      </div>
    </div>
  );
}
