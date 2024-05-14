import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Navbar from '../components/Navbar';
import { Outlet, ScrollRestoration, createRootRouteWithContext } from '@tanstack/react-router';
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

// create root layout with context 
export const Route = createRootRouteWithContext<RouterContext>()({

    component: () => {
        // const router = useRouter()

        // const breadcrumbs = router.state.matches.map((match) => {
        //   const { pathname } = match
        //   return pathname
        // })
        // console.log(breadcrumbs)

        return (
            <>
                {/* Scroll restoration is the process of restoring the scroll position of a page when the user navigates back to it. */}
                <ScrollRestoration />
                <Navbar />
                <main className="main-container">
                    {/* child routes will be rendered here*/}
                    <Outlet />
                </main>
                {/* These devtools can help you visualize and debug the inner workings of TanStack Router, making your development process smoother. */}
                <TanStackRouterDevtools position="bottom-right" />
            </>
        )
    }
});
