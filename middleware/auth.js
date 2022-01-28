export default function ({ app, route, redirect }) {
  if (route.path !== '/auth/signin') {
    // we are on a protected route
    if (!app.$fire.auth.currentUser) {
      return redirect('/auth/signin')
    }
  } else if (route.path === '/auth/signin') {
    if (!app.$fire.auth.currentUser) {
      // leave them on the signin page
    } else {
      return redirect('/')
    }
  }
}
