import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Technologies from './components/technologies'
import "./assets/sass/App.sass";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Home />
      <About />
      <Technologies />
    </main>
  );
}

export default App;
