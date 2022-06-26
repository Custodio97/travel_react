import {Routes,Route} from 'react-router-dom' 
import Home from './components/home'
import About from './routes/about';
import Travel from './routes/travel';
import Service from './routes/service';
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/travel' element={<Travel />} />
        <Route path='/services' element={<Service/>} />
      </Routes>
    </>
  );
}

export default App;
