import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<header className="bg-gray-800 py-4">
			<div className="container mx-auto px-4 flex justify-between items-center">
				<h1 className="text-2xl font-bold text-yellow-400">
					Star Wars Character Quest
				</h1>
				<nav className="relative">
					<button
						onClick={toggleMenu}
						className="md:hidden btn btn-secondary"
					>
						{isMenuOpen ? <FaTimes /> : <FaBars />}
					</button>
					<ul
						className={`${
							isMenuOpen ? "block" : "hidden"
						} md:flex absolute md:static right-0 top-full mt-2 md:mt-0 bg-gray-800 md:bg-transparent p-4 md:p-0 rounded-md md:rounded-none space-y-2 md:space-y-0 md:space-x-4`}
					>
						<li>
							<a
								href="https://www.disney.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-yellow-400 transition-colors duration-200"
							>
								Disney
							</a>
						</li>
						<li>
							<a
								href="https://www.disneyplus.com"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-yellow-400 transition-colors duration-200"
							>
								Disney+
							</a>
						</li>
						<li>
							<a
								href="https://www.lucasfilm.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-yellow-400 transition-colors duration-200"
							>
								Lucasfilm
							</a>
						</li>
						<li>
							<a
								href="https://www.starwars.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-yellow-400 transition-colors duration-200"
							>
								Star Wars
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
