import './App.css';
import {useState} from 'react'
import {Routes, Route} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import JobCards from './JobCards';
import JobPage from './JobPage';
import BusinessPage from './BusinessPage';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
  <>
    <Routes>
      <Route path="/" element={<JobCards loggedIn={loggedIn} />}/>
      <Route path="/Job/:id" element={<JobPage />} />
      <Route path="/Business/:id" element={<BusinessPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />}/>
      <Route path="/Account/:id" element={<Signup />} />
    </Routes>
  </>
  );
}

export default App;
