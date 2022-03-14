import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './Login';
import JobCards from './JobCards';
import JobPage from './JobPage';
import Register from './Register';
function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<JobCards />}/>
      <Route path="/Login" element={<Login />} />
      {/* <Route path="/JobCards" element={<JobCards />} /> */}
      <Route path="/Job/:id" element={<JobPage />} />
      <Route path="/Register" element={<Register />}/>
    </Routes>
  </>
  );
}

export default App;
