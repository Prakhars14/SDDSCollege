import React from 'react'; 
import Navbar from './layout/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import './App.css';
import Footer from './layout/Footer';
import About from './pages/About';
import Academics from './pages/Academics';
import GalleryPage from './pages/Gallery';
import Faculty from './pages/Faculty';
import EventDetails from './pages/EventDetails';
import Objectives from './pages/Objectives';
import Events from './pages/Events';
import Infra from './pages/Infra';
import Apply from './pages/Apply';
import Results from './pages/Results';
import Process from'./pages/Process';
import Contact from './pages/Contact';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from './routes/privateRoute';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

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


function App() {
  return (
    <>
    <Provider store={store}> 
      <BrowserRouter>
        <Navbar/>
          
            <Route path="/" exact component={Landing} />
            <Route path="/about" exact component={About} />
            <Route path="/objectives" exact component={Objectives} />
            <Route path="/infrastructure" exact component={Infra} />
            <Route path="/academics" exact component={Academics} />
            <Route path="/faculty" exact component={Faculty} />
            <Route path="/gallery" exact component={GalleryPage} />
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
