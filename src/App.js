import './App.css';
import Career from './Career';
import Contact from './Contact';
import Home from './Home';
import Skills from './Skills';
import About from './About';



function App() {
  return (
    <div className="App">
      <div id='app-container'>
        
        <Home/>
        <Skills/>
        <Career/>
        <Contact/>
        <About/>
        

      </div>

    </div>
  );
}

export default App;
