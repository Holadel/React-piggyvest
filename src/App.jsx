
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Security from './components/investments security/Security'
import Savings from "./components/Savings/Savings"
import Investment from './components/Investment/Investment'
import Saver from "./components/Saver/Saver"

function App() {


  return (
    <div className="App">
      <Header />
      <Hero />
      <Security/>
      <Savings/>
      <Investment/>
      <Saver/>
    </div>
  )
}

export default App
