// import { createFileRoute, redirect } from '@tanstack/react-router'
// import { isAuthenticated } from '../../utils/auth'

// export const Route = createFileRoute('/_auth')({
//   beforeLoad: () => {
//     if (!isAuthenticated()) {
//       throw redirect({
//         to: "/login",
//         search: {
//           redirect: location.href,
//         },
//       },
//       )
//     }

//   }
// })



// hooks are not directly accessible so we can pass context in router provider and it will be provided in params of beforeload
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isLogged()) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
    // pass parent context to child route
    return {
      username: context.auth.getUsername()
    }
  }
})