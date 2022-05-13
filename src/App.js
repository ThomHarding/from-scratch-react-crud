import { useState, useEffect } from 'react';
import { getUser } from './services/fetch-utils';
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
  Redirect,
} from 'react-router-dom';
import AuthPage from './AuthPage';
import UpdatePage from './UpdatePage';
import ListPage from './ListPage';
import CreatePage from './CreatePage';

import './App.css';
import { logout } from './services/fetch-utils';
import AddFriend from './AddFriend';

export default function App() {
  const [email, setEmail] = useState();
  email;
  const [token, setToken] = useState();

  useEffect(() => {
    const user = getUser();

    if (user) {
      setToken(user.access_token);
      setEmail(user.user.email);
    }
  
  }, []);

  async function handleLogout() {
    await logout();
    setEmail('');
    setToken('');
  }

  return (
    <Router>
      <div className='App'>
        <header>
        </header>
        <main>
          {
            token
              ? (<nav>
                <ul>
                  <li>
                    <NavLink to="/ListPage">Ponies List</NavLink>
                  </li>
                  <li>
                    <NavLink to="/CreatePage">Create</NavLink>
                  </li>
                  <li>
                    <button onClick={handleLogout}>Log out</button>
                  </li>
                </ul>
              </nav>)
              : null
          }
          <Switch>
            <Route exact path="/">
              {
                token
                  ? <Redirect to="/ListPage" /> 
                  : <AuthPage setEmail={setEmail} setToken={setToken} />
              }
            </Route>
            <Route exact path="/ListPage">
              {
                token
                  ? <ListPage /> 
                  : <AuthPage setEmail={setEmail} setToken={setToken} />
              }
            </Route>
            <Route exact path="/ponies/:id">
              {
                token
                  ? <UpdatePage /> 
                  : <AuthPage setEmail={setEmail} setToken={setToken} />
              }
            </Route>
            <Route exact path="/CreatePage">
              {
                token
                  ? <CreatePage /> 
                  : <AuthPage setEmail={setEmail} setToken={setToken} />
              }
            </Route>
            <Route exact path="/AddFriend/:id">
              {
                token
                  ? <AddFriend /> 
                  : <AuthPage setEmail={setEmail} setToken={setToken} />
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}