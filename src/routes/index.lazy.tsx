import { createLazyFileRoute } from "@tanstack/react-router"


export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700">
            <h1 className="text-4xl font-bold mb-4">Welcome to TanStack Router micro session 👋</h1>
            <p className="text-lg mb-8">let's see how amazing it is 🥳</p>
        </div>
    )
}