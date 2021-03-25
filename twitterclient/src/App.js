import './App.css';
import {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import HomePage from "./containers/HomePage";
import UserData from './UserData';

function App() {
  const {Josh} = UserData;
  const [user, setUser] = useState(Josh);

  return <Router>
          <HomePage user={user}/>
        </Router>
}

export default App;
