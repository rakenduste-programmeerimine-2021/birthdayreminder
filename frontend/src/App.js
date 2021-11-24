import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'

import { Layout } from 'antd'
import HomePage from './Pages/HomePage'
import SignupPage from './Pages/SignupPage'
import LoginPage from './Pages/LoginPage'
import BirthdaysPage from './Pages/BirthdaysPage'
import AddBirthday from './Pages/AddBirthday'

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
          </Switch>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App