// import Cookies from 'js-cookie'
// import {Redirect, Route} from 'react-router-dom'

// const ProtectedRoute = props => {
//   const jwtToken = Cookies.get('jwt_token')
//   if (jwtToken === undefined) {
//     return <Redirect to="/login" />
//   }
//   return <Route {...props} />
// }

// export default ProtectedRoute
import {Route, useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = ({component: Component, ...rest}) => {
  const jwtToken = Cookies.get('jwt_token')
  const history = useHistory()

  if (!jwtToken) {
    // Redirect the user to the login page programmatically
    history.replace('/login')
    return null
  }

  // Render the specified component if the user is authenticated
  return <Route {...rest} render={props => <Component {...props} />} />
}

export default ProtectedRoute
