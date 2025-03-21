import {Switch, BrowserRouter, Route} from 'react-router-dom'

import Home from './components/Home'

import NavigationSection from './components/NavigationSection'

import ProfileRoute from './components/ProfileRoute'

import Accounts from './components/Accounts'

import './App.css'

// Replace your code here

const App = () => (
  <div>
    <Home />
    <div className="app-container">
      <NavigationSection />
      <Switch>
        <Route exact path="/profile" component={ProfileRoute} />
        <Route exact path="/account" component={Accounts} />
      </Switch>
    </div>
  </div>
)

export default App
