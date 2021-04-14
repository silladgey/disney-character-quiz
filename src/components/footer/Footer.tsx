const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-800 py-4 mt-8">
			<div className="container mx-auto px-4 text-center text-sm">
				<p>
					Created by Star Wars enthusiasts for web development project
				</p>
				<p className="mt-2">
					&copy; {new Date().getFullYear()} Lucasfilm Ltd. Star
					Wars&trade; is a registered trademark of Lucasfilm Ltd.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
