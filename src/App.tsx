import './App.css';
import About from './components/About';
import Cards from './components/Cards';
import Emergency from './components/Emergency';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Services from './components/Services';
import SlidingDoor from './components/SlidingDoor';

function App() {
  return (
    <main className="app-container">
      <Emergency />
      <SlidingDoor />
      <Hero />
      <Cards />
      <Nav />
      <Services />
      <Gallery />
      <About />
      <Footer />
    </main>
  );
}

export default App;
