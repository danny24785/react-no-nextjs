import { Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Link } from 'react-router-dom';
import { routes } from './routes';
import './App.css'

function App() {
  return (
    <>
      <div className="flex flex-col">
        <div className='flex'>
          <ul className='flex gap-4'>
            <li><Link to={routes.home}>Home</Link></li>
            <li><Link to={routes.about}>About</Link></li>
            <li><Link to={routes.contact}>Contact</Link></li>
          </ul>
        </div>
        
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.about} element={<h1>About page</h1>} />
          <Route path={routes.contact} element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
