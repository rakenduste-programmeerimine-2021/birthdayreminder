import { Route, Redirect } from 'react-router-dom'

/*
  Tutorial I was inspired by: https://www.youtube.com/watch?v=qnH5KNtRYEI
  Basically, if the user is authenticated -> we return and render the component user is accessing
  If the user is not authenticated -> we redirect him/her to our HomePage
*/
function ProtectedRoute({ isAuth, component: Component, ...rest }) {
  return (
    <Route 
      {...rest} 
      render={(props) => {
        if (isAuth) {
          return <Component />
        }
        return (<Redirect to={{pathname: '/', state: {from: props.location}}} />)
      }}
    />
  )
}

export default ProtectedRoute