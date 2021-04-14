import { useState } from "react";

const characters = ["Din Djarin", "Han Solo", "Luke Skywalker", "Rey"];

interface CharacterSelectorProps {
	onSelect: (character: string) => void;
}

const CharacterSelector: React.FC<CharacterSelectorProps> = ({ onSelect }) => {
	const [inputCharacter, setInputCharacter] = useState("");

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		onSelect(inputCharacter);
	};

	return (
		<div className="bg-gray-800 p-6 rounded-lg shadow-lg">
			<h2 className="text-xl font-semibold mb-4">
				Choose Your Star Wars Hero
			</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label htmlFor="character" className="block mb-2">
						Enter your favorite character:
					</label>
					<input
						type="text"
						id="character"
						value={inputCharacter}
						onChange={(e) => setInputCharacter(e.target.value)}
						className="input w-full"
						placeholder="e.g., Luke Skywalker"
					/>
				</div>
				<button type="submit" className="btn btn-primary w-full">
					Confirm Selection
				</button>
			</form>
			<div className="mt-6">
				<h3 className="text-lg font-semibold mb-2">Quick Select:</h3>
				<div className="grid grid-cols-2 gap-2">
					{characters.map((char) => (
						<button
							key={char}
							onClick={() => {
								setInputCharacter(char);
								onSelect(char);
							}}
							className="btn btn-secondary"
						>
							{char}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default CharacterSelector;
