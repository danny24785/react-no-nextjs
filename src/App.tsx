import { Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Home from './pages/Home';
import MainNavigation from './components/MainNavigation/MainNavigation';
import About from './pages/About';
import { routes } from './routes';
import './App.css'

function App() {
  return (
    <>
      <div className="flex flex-col">
        <MainNavigation />
        
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.about} element={<About />}>
            <Route index element={<p>sub page 1</p>} />
            <Route path={routes.subPage2} element={<p>sub page 2</p>} />
            <Route path={routes.subPage3} element={<p>sub page 3</p>} />
          </Route>
          <Route path={routes.contact} element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
