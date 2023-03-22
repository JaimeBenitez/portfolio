import "./assets/sass/App.sass";
import Navbar from './views/navbar/navbar'
import Home from './views/home/home'
import About from './views/about/about'
import Technologies from './views/technologies/technologies'
import Projects from './views/projects/projects'
import Contact from './views/contact/contact'


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
