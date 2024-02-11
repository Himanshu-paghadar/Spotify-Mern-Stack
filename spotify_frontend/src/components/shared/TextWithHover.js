const TextWithHover = ({ displayText, active }) => {
	return (
		<div className="flex items-center justify-start cursor-pointer">
			<div
				className={`${
					active ? "text-white" : "text-gray-400"
				} font-semibold hover:text-white transform transition-transform hover:scale-105`}
			>
				{displayText}
			</div>
		</div>
	);
};
export default TextWithHover;
