import { useState } from "react";
import RatingSlider from "./RatingSlider";
import CharacterSelector from "./CharacterSelector";
import RandomCharacter from "./RandomCharacter";

const Game: React.FC = () => {
	const [selectedCharacter, setSelectedCharacter] = useState("");

	return (
		<main className="flex-grow container mx-auto px-4 py-8">
			<div className="grid md:grid-cols-2 gap-8">
				<div className="space-y-8">
					<RatingSlider />
					<CharacterSelector onSelect={setSelectedCharacter} />
				</div>
				<RandomCharacter userCharacter={selectedCharacter} />
			</div>
		</main>
	);
};

export default Game;
