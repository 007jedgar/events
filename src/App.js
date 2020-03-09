import React from 'react';
import './App.css';
import Nav from './Nav'
import Home from './components/Home'
import EventDetail from './components/CreateEvent'
import CreateEvent from './components/CreateEvent'
import Tickets from './components/Tickets'
import Profile from './components/Profile'
import Error404 from './errors/Error404'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { 
  createStore, 
  applyMiddleware, 
  compose,
} from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger'


function App() {
  const store = createStore(
    reducers, 
    {}, //initial state 
    compose (
      applyMiddleware(ReduxThunk, logger)
    ) 
  )

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Nav />

          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/create" component={CreateEvent}/>
            <Route path="/tickets" exact component={Tickets}/>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/ticket/:id" exact component={EventDetail}/>
            <Route component={Error404} />
          </Switch>
      
        </div>
      </Router>
    </Provider>
  )
}

export default App;
