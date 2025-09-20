import './App.css';
import Cards from './components/Cards';
import Hero from './components/Hero';
import Nav from './components/Nav';
import SlidingDoor from './components/SlidingDoor';

function App() {
	return (
		<main className='app-container'>
			<SlidingDoor />
			<Hero />
			<Cards />
			<Nav />
		</main>
	);
}

export default App;
