import React from 'react';
import Home from './home'
import SignIn from './sign-in'
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom'


function App() {
  return (
    <div style={{textAlign:'center'}}>
    <BrowserRouter>
      <Link to='/sign-in' />
      <Link to='/' />

    <Switch>
      <Route path='/sign-in' render={({history}) => <SignIn history={history} />} />
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
