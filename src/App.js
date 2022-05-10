import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Design from "./components/Design";

function App() {
	return (
		<div>
			<Navbar />
			<Home />
			<About />
			<Skills />
			<Projects />
			<Design />
			<Contact />
		</div>
	);
}

export default App;
