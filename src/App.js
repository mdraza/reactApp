import React from 'react'
import './style/App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './component/login/Login'
import Dashboard from './component/dashboard/Dashboard';
import AddEmployee from './component/dashboard/AddEmployee';
import EditEmployee from './component/dashboard/EditEmployee'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addemployee" component={AddEmployee} />
          <Route exact path="/editemployee/:id" component={EditEmployee} />
        </Switch>
    </div>
    </Router>
  )
}

export default App
