import { Await, createFileRoute, defer } from '@tanstack/react-router'
import { fetchSlowUsers, fetchUsers } from '../../services/users'
import { Suspense } from 'react'
import { Spinner } from '../../components/Spinner'

export const Route = createFileRoute('/users/')({
  component: UserList,
  loader: async () => {
    // Fetch some slower data, but do not await it
    const slowUsers: Promise<User[]> = fetchSlowUsers()

    // Fetch and await some data that resolves quickly
    const fastUsers = await fetchUsers()

    return {
      fastUsers,
      // Wrap the slow promise in `defer()`
      deferredSlowUsers: defer(slowUsers),
    }
  }
})

function UserList() {

  const { deferredSlowUsers, fastUsers: users } = Route.useLoaderData()

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">User List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {users.map((user: User) => (
          <User key={user?.id} user={user} />
        ))}
      </div>
      <Suspense fallback={<Spinner />}>
        <Await promise={deferredSlowUsers}>
          {(defferedUsers: User[]) => (
            <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {defferedUsers.map((user: User) => (
                <User key={user?.id} user={user} />
              ))}
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  );
}

const User = ({ user }: { user: User }) => {
  return (
    <div key={user.id} className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={user.avatar} alt={user.name} className="w-full h-40 object-cover object-center" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{user.name}</h2>
        <p className="text-gray-600 mb-2">{user.email}</p>
        <p className="text-gray-600">{user.role}</p>
      </div>
    </div>
  )
}