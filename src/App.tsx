import React from "react";
import Header from "./components/header/Header";
import Game from "./components/game/Game";
import Footer from "./components/footer/Footer";
import "./styles/globals.css";

const App: React.FC = () => {
	return (
		<div className="min-h-screen flex flex-col bg-gray-900 text-white">
			<Header />
			<Game />
			<Footer />
		</div>
	);
};

export default App;
