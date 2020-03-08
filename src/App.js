import React from 'react';
import './App.css';
import Nav from './Nav'
import ItemDetail from './ItemDetail'
import Home from './components/Home'
import EventDetail from './components/CreateEvent'
import CreateEvent from './components/CreateEvent'
import TicketWallet from './components/TicketWallet'
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
            <Route path="/create_event" component={CreateEvent}/>
            <Route path="/ticket_wallet" exact component={TicketWallet}/>
            <Route path="/ticket/:id" exact component={EventDetail}/>
            <Route path="/shop/:id" component={ItemDetail}/>
            <Route component={Error404} />
          </Switch>
      
        </div>
      </Router>
    </Provider>
  )
}

export default App;
