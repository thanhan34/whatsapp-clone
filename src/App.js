
import React from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from './Login';
import { useStateValue } from './StateProvider'
function App() {
  const [{ user }] = useStateValue();
  return (
    <div className="app">
      {!user ? (<Login />) : (
        <div className="app__body">
          <Router>
            <Switch>
              <Route path="/rooms/:roomId">
                <Sidebar />
                <Chat />
              </Route>
              <Route>
                <Sidebar />
              </Route>
            </Switch>
          </Router>
        </div>
      )}

    </div>
  );
}

export default App;
