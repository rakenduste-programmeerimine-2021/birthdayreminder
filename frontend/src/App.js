import { BrowserRouter, Route, Switch } from 'react-router-dom'
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

const { Content } = Layout

function App() {
  return (
    <BrowserRouter>
      <Layout style={{ height: '100vh'}}>
        <Content>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/SignupPage' component={SignupPage} />
            <Route exact path='/LoginPage' component={LoginPage} />
            <Route exact path='/Birthdays' component={BirthdaysPage} />
            <Route exact path='/add-birthday' component={AddBirthday} />
            <Route exact path='/upcoming' component={UpcomingBirthdays} />
            <Route exact path='/all-birthdays' component={AllBirthdays} />
            <Route path='*' component={ErrorPage}/>
          </Switch>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App