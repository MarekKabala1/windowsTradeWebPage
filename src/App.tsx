import './App.css';
import Hero from './componets/Hero';
import SlidingDoor from './componets/slidingDoor';
// import gardenView from './assets/gardenView.webp';

function App() {
	return (
		<main className='app-container'>
			<SlidingDoor />
			<Hero />
		</main>
	);
}

export default App;
