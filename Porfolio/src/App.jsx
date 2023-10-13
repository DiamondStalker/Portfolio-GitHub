//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Proyects from './components/Projects';
import Cars from './components/Cards'
import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route exact path="/" element={<Home/>}/>
//           <Route exact path="/Proyects" element={<Proyects/>}/>
//         </Routes>
//       </div>
//     </Router>
//   );
// };


const App = () => {

  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Proyects />
    </div>
  )
}

export default App;