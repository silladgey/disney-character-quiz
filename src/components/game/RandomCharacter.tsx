import { useState } from "react";

import dinDjarinImg from "../../assets/img/din_djarin.png";
import hanSoloImg from "../../assets/img/han_solo.png";
import lukeSkywalkerImg from "../../assets/img/luke_skywalker.png";
import reySkywalkerImg from "../../assets/img/rey_skywalker.png";

interface Character {
	name: string;
	image: string;
	affiliation: string;
	weapon: string;
	quote: string;
}

const characters: Character[] = [
	{
		name: "Din Djarin",
		image: dinDjarinImg,
		affiliation: "Mandalorian",
		weapon: "Beskar Spear",
		quote: "This is the way.",
	},
	{
		name: "Han Solo",
		image: hanSoloImg,
		affiliation: "Rebel Alliance",
		weapon: "DL-44 Blaster",
		quote: "Never tell me the odds!",
	},
	{
		name: "Luke Skywalker",
		image: lukeSkywalkerImg,
		affiliation: "Jedi Order",
		weapon: "Lightsaber",
		quote: "May the Force be with you.",
	},
	{
		name: "Rey",
		image: reySkywalkerImg,
		affiliation: "Resistance",
		weapon: "Lightsaber",
		quote: "I can do this.",
	},
];

interface RandomCharacterProps {
	userCharacter: string;
}

const RandomCharacter: React.FC<RandomCharacterProps> = ({ userCharacter }) => {
	const [randomChar, setRandomChar] = useState<Character | null>(null);
	const [compareResult, setCompareResult] = useState<string | null>(null);

	const generateRandomCharacter = () => {
		const randNum = Math.floor(Math.random() * characters.length);
		setRandomChar(characters[randNum]);
		setCompareResult(null);
	};

	const compareCharacters = () => {
		if (
			randomChar &&
			userCharacter.toLowerCase() === randomChar.name.toLowerCase()
		) {
			setCompareResult(
				"The Force is strong with you! You got your character!"
			);
		} else {
			setCompareResult(
				"Not quite. The ways of the Force are mysterious."
			);
		}
	};

	return (
		<div className="bg-gray-800 p-6 rounded-lg shadow-lg">
			<h2 className="text-xl font-semibold mb-4">
				Discover Your Star Wars Destiny
			</h2>
			<button
				onClick={generateRandomCharacter}
				className="btn btn-primary w-full mb-4"
			>
				Reveal Your Character
			</button>
			{randomChar && (
				<div className="text-center">
					<img
						src={randomChar.image}
						alt={randomChar.name}
						className="w-48 h-48 mx-auto rounded-full mb-4 object-contain"
					/>
					<h3 className="text-2xl font-bold mb-2">
						{randomChar.name}
					</h3>
					<p>
						<strong>Affiliation:</strong> {randomChar.affiliation}
					</p>
					<p>
						<strong>Weapon:</strong> {randomChar.weapon}
					</p>
					<p className="italic mt-2">"{randomChar.quote}"</p>
					<button
						onClick={compareCharacters}
						className="btn btn-secondary mt-4"
					>
						Compare with Your Choice
					</button>
					{compareResult && (
						<div className="mt-4 p-3 bg-gray-700 rounded-md">
							{compareResult}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default RandomCharacter;
