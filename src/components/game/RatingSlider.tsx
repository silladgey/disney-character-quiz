import { useState } from "react";

const RatingSlider: React.FC = () => {
	const [rating, setRating] = useState(5);

	const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRating(Number(event.target.value));
	};

	const getRatingText = () => {
		if (rating === 10) return "You're strong with the Force!";
		if (rating > 7) return "The Force is with you.";
		if (rating > 4) return "Your Jedi training is progressing.";
		if (rating > 0) return "You have much to learn, young Padawan.";
		return "I sense the dark side in you...";
	};

	return (
		<div className="bg-gray-800 p-6 rounded-lg shadow-lg">
			<h2 className="text-xl font-semibold mb-4">
				Rate Your Star Wars Passion
			</h2>
			<input
				type="range"
				min="0"
				max="10"
				value={rating}
				onChange={handleRatingChange}
				className="w-full"
			/>
			<div className="flex justify-between mt-2">
				<span>Sith</span>
				<span>Jedi Master</span>
			</div>
			<div className="text-center mt-4">
				<span className="text-2xl font-bold text-yellow-400">
					{rating}
				</span>
				<p className="mt-2">{getRatingText()}</p>
			</div>
		</div>
	);
};

export default RatingSlider;
