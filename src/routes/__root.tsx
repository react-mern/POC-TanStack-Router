import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Navbar from '../components/Navbar';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
// import { createRootRoute } from '@tanstack/react-router';
import { AuthContext } from '../hooks/useAuth';

// export const Route = createRootRoute({
//     component: () => (
//         <>
//             <Navbar />
//             <hr />
//             <main className="main-container">
//                 <Outlet />
//             </main>
//             <TanStackRouterDevtools position="bottom-right" />
//         </>
//     ),
// });


type RouterContext = {
    auth: AuthContext;
};


export const Route = createRootRouteWithContext<RouterContext>()({
    component: () => (
        <>
            <Navbar />
            <main className="main-container">
                <Outlet />
            </main>
            <TanStackRouterDevtools position="bottom-right" />
        </>
    ),
});
