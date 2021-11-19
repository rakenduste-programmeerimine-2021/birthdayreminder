import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'

import { Layout } from 'antd'
import HomePage from './Pages/HomePage'
import SignupPage from './Pages/SignupPage'
import LoginPage from './Pages/LoginPage'

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
          </Switch>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App