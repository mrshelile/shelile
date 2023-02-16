import './App.css'
import FooterPage from './componets/Footer'
import Navigation from './componets/Navitation'
import Home from './pages/Home/Home'

function App() {

  return (
    <div className="App">
      <Navigation />
      <Home />
      <FooterPage />
    </div>
  )
}

export default App
