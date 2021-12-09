import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useContext } from 'react'
import './App.css'
import { Layout } from 'antd'
import HomePage from './Pages/HomePage'
import SignupPage from './Pages/SignupPage'
import LoginPage from './Pages/LoginPage'
import BirthdaysPage from './Pages/BirthdaysPage'
import AddBirthday from './Pages/AddBirthday'
import ErrorPage from './Pages/ErrorPage'
import UpcomingBirthdays from './Pages/UpcomingBirthdays'
import AllBirthdays from './Pages/AllBirthdays'
import ProtectedRoute from './Components/ProtectedRoute'
import { Context } from './store'

const { Content } = Layout

function App() {
  const [ state, ] = useContext(Context)
  const isAuth = state.auth.token

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh'}}>
        <Content>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/signup' component={SignupPage} />
            <Route exact path='/login' component={LoginPage} />
            <ProtectedRoute exact path='/birthdays' component={BirthdaysPage} isAuth={isAuth}/>
            <ProtectedRoute exact path='/add-birthday' component={AddBirthday} isAuth={isAuth}/>
            <ProtectedRoute exact path='/upcoming' component={UpcomingBirthdays} isAuth={isAuth}/>
            <ProtectedRoute exact path='/all-birthdays' component={AllBirthdays} isAuth={isAuth}/>
            <Route path='*' component={ErrorPage}/>
          </Switch>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App