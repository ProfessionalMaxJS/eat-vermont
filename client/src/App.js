import './App.css';
import {useState} from 'react'
import {Routes, Route} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import JobCards from './JobCards';
import JobPage from './JobPage';
import BusinessPage from './BusinessPage';

function App() {

  const [loggedIn, setLoggedIn] = useState(0)

  return (
  <>
    <Routes>
      <Route path="/" element={<JobCards loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}/>
      <Route path="/Job/:id" element={<JobPage />} />
      <Route path="/Business/:id" element={<BusinessPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
      <Route path="/Login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
      <Route path="/Signup" element={<Signup loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}/>
      <Route path="/Account/:id" element={<Signup loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
    </Routes>
  </>
  );
}

export default App;
