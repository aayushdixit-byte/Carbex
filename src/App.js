import './App.css';
// import Home from './components/home'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MarketPlace from './components/marketplace';
import ProjectDetails from './components/details';
import HomePage from './components/homepage';
import Details from './components/product_details';

// This is a comment
// This for checking
const App = ()=> {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<Home/>}/> */}
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/marketplace" element={<MarketPlace/>}/>
          <Route exact path="/details" element={<ProjectDetails/>}/>
          <Route exact path="/product_details" element={<Details/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
