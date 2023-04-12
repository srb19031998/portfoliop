
import "bootstrap/dist/css/bootstrap.min.css";
import Parent from "./parent"
import './App.css';
import "./style.css";
import Navbar1 from "./Navbar/navbar"
import About from "./About/about"
import Home from "./Home/home"
import ResumeNew from "./resume/Resume"
import Projects from "./pROJECTS/projects"
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
 return(
  <>
 
  <div className="App">
 
  

   <Router>
   <Navbar1/> 
<Routes>
{/* <Route path="/" element={(!(user && user._id))?<Login setLoginUser={setLoginUser}/>:null}/> */}
<Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/resume" element={<ResumeNew/>} />
<Route path="/projects" element={<Projects/>} />

</Routes>
</Router>
   </div>


</>

 )}
export default App;
