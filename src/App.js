import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Technologies from './components/technologies'
import Projects from './components/projects'
import Contact from './components/contact'
import "./assets/sass/App.sass";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Home />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
