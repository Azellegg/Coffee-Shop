import './App.css';
import Navigation from './component/Navigation';
import Home from './pages/Home';
import Footer from './component/Footer'

function App() {
  return (
    <>
    <div className="w-full h-full bg-black bg-cover">
      <div className="w-full h-full bg-cover bg-no-repeat" style={{ backgroundImage:`url("asset/Circlebg.svg")` }}>
        <Navigation />
        <Home />
        <Footer />
      </div>
    </div>
    </>
  )
}

export default App;
