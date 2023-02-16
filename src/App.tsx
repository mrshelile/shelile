import './App.css'
import FooterPage from './componets/Footer'
import Navigation from './componets/Navitation'
import Home from './pages/Home/Home'
import { navs } from './constants/navs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Resume from './pages/Resume/Resume';
import Portfolio from './pages/Portfolio/Portfolio';
function App() {

  return (
    <div className="App">
      {/* <Navigation /> */}
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="*" element={< />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      <FooterPage />
    </div>
  )
}

export default App
