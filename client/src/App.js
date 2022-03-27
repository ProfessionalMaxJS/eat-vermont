import './App.css';
import {useState} from 'react'
import {Routes, Route} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import JobCards from './JobCards';
import JobPage from './JobPage';
import BusinessPage from './BusinessPage';
import Redirect from './Redirect';

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
      <Route path='*' element={<Redirect />}/>
    </Routes>
  </>
  );
}

export default App;

//Comments:
//
// This page only serves as a hub for the routes. There is a fair amount of "dynamic routing" in this application, including the Job, Business and Account pages (which fetch and load depending on the id) as well as using the same component (Signup, Business Page) for different purposes, whether the user is logged in as THAT account (as determined by two State variables, id and loggedIn).
