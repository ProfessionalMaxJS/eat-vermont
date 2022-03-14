import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import JobCards from './JobCards';
import JobPage from './JobPage';
import BusinessPage from './BusinessPage';

function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<JobCards />}/>
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />}/>
      <Route path="/Job/:id" element={<JobPage />} />
      <Route path="/Business/:id" element={<BusinessPage />} />
    </Routes>
  </>
  );
}

export default App;
