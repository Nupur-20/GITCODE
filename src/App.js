import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from './components/Home';
import Practice from './components/practice';
import Login from './components/login/login';
import About from './components/About';
import Contact from './components/Contact';
import Problem_statement from './components/problems/Problem_statement';
import { useEffect,useState } from 'react';
import MyContext from './context/Mycontext';
import Signup from './components/login/signup';
import Profile from './components/User/Profile';

function App() {
  const [Problem_statement2,set_statement]=useState("d");
  const [Test_cases2,set_cases]=useState([1]);

  return (
    <>
      <MyContext.Provider value={{ set_statement,set_cases }}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/practice" element={<Practice />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/problem_statement" element={<Problem_statement Problem_statement1={Problem_statement2} Test_cases={Test_cases2} />} />
          </Routes>
        </Router>
      </MyContext.Provider>
    </>
  );
}

export default App