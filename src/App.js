import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navigation/Navbar'
import Login from './Pages/Login';
import Wishlist from './Pages/Wishlist';
import Home from './Pages/Home';
import { Routes } from './Routes';

function App() {
  return (
    <div >
      <Navbar/>
      <Switch>
        <Route path="/">
        <Login/>
        </Route>
        <Route path="/auth">
          <Login/>
        </Route>
        <Route path="/wishlist">
          <Wishlist/>
        </Route>
      </Switch>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
