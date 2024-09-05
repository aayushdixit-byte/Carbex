import './App.css';
import Home from './components/home'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MarketPlace from './components/marketplace';
import ProjectDetails from './components/details';

const App = ()=> {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/marketplace" element={<MarketPlace/>}/>
          <Route exact path="/details" element={<ProjectDetails/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
