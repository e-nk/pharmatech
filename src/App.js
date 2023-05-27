import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navigation/Navbar'

function App() {
  return (
    <div >
      <Switch>
        <Route path="/">
          <Navbar/>
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
