export default function ({ store, route, error }) {
  if (route.path !== '/' && route.path !== '/login') {
    console.log(route)
    if (!store.state.authUser) {
      error({
        message: 'You are not connected',
        statusCode: 403
      })
    }
  }
}
