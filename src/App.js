import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import NewPerson from "./Components/NewPerson";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path ='/' element ={<Home/>}/>
          <Route path ='/new' element ={<NewPerson/>}/>


        </Routes>
      </Router>


    </div>
  );
}

export default App;
