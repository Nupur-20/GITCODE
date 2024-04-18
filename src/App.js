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
import AddProblem from './components/UserProblems/AddProblem';
import Problems from './components/UserProblems/Problems';
import UpdateProblem from './components/UserProblems/UpdateProblem';

function App() {
  const [Problem_statement2,set_statement]=useState("d");
  const [Test_cases2,set_cases]=useState([1]);
  const [Hidden_cases2,set_hiddencases]=useState([1]);
  const [Verified,set_verified]=useState(0);
  const [Tag,setTag]=useState("Math");
  const [Code,setCode]=useState("");
  const [Title,setTitle]=useState("");
  const [Id,setId]=useState("");
  return (
    <>
      <MyContext.Provider value={{ set_statement,set_cases,set_hiddencases,set_verified,setCode,setTitle,setTag,setId }}>
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
            <Route exact path="/addproblem" element={<AddProblem />} />
            <Route exact path="/problems" element={<Problems />} />
            <Route exact path="/problem_statement" element={<Problem_statement Problem_statement1={Problem_statement2} Test_cases={Test_cases2} Hidden_cases={Hidden_cases2} Verified={Verified} />} />
            <Route exact path="/updateproblem" element={<UpdateProblem statement={Problem_statement2} testcases={Test_cases2} hiddencases={Hidden_cases2} verified={Verified} tag={Tag} title={Title} code={Code} id={Id} />} />
          </Routes>
        </Router>
      </MyContext.Provider>
    </>
  );
}

export default App