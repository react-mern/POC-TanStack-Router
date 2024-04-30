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
    return {
      username: context.auth.getUsername()
    }
  }
})