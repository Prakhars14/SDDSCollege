import React from 'react'; 
import Navbar from './layout/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Footer from './layout/Footer';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from './routes/privateRoute';
import Loadable from 'react-loadable';
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
  }
}

const Loading=()=><div>Loading...</div>;

const Land=Loadable({
  loader:()=>import('./pages/Landing'),
  loading:Loading,
});
const About=Loadable({
  loader:()=>import('./pages/About'),
  loading:Loading,
});
const Objectives=Loadable({
  loader:()=>import('./pages/Objectives'),
  loading:Loading,
});
const Infra=Loadable({
  loader:()=>import('./pages/Infra'),
  loading:Loading,
});
const Academics=Loadable({
  loader:()=>import('./pages/Academics'),
  loading:Loading,
});
const Faculty=Loadable({
  loader:()=>import('./pages/Faculty'),
  loading:Loading,
});
const Gallery=Loadable({
  loader:()=>import('./pages/Gallery'),
  loading:Loading,
});
const Events=Loadable({
  loader:()=>import('./pages/Events'),
  loading:Loading,
});
const Apply=Loadable({
  loader:()=>import('./pages/Apply'),
  loading:Loading,
});
const Results=Loadable({
  loader:()=>import('./pages/Results'),
  loading:Loading,
});
const Process=Loadable({
  loader:()=>import('./pages/Process'),
  loading:Loading,
});
const Contact=Loadable({
  loader:()=>import('./pages/Contact'),
  loading:Loading,
});
const EventDetails=Loadable({
  loader:()=>import('./pages/EventDetails'),
  loading:Loading,
});
const Register=Loadable({
  loader:()=>import('./components/Register'),
  loading:Loading,
});
const Login=Loadable({
  loader:()=>import('./components/Login'),
  loading:Loading,
});
const Dashboard=Loadable({
  loader:()=>import('./components/Dashboard'),
  loading:Loading,
});

function App() {
  return (
    <>
    <Provider store={store}> 
      <BrowserRouter>
        <Navbar/>
          
            <Route path="/" exact component={Land} />
            <Route path="/about" exact component={About} />
            <Route path="/objectives" exact component={Objectives} />
            <Route path="/infrastructure" exact component={Infra} />
            <Route path="/academics" exact component={Academics} />
            <Route path="/faculty" exact component={Faculty} />
            <Route path="/gallery" exact component={Gallery} />
            <Route path="/events" exact component={Events} />
            <Route path="/apply" exact component={Apply} />
            <Route path="/results" exact component={Results} />
            <Route path="/admissionProcess" exact component={Process} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/events/:id" exact component={EventDetails} />
            <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        <Footer/>  
      </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
