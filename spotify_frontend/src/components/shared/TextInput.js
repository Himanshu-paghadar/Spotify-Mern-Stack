const TextInput = ({ type, label, placeholder, className }) => {
	return (
		<div
			className={`LabelInput flex flex-col space-y-2 w-full my-3 ${className}`}
		>
			<label for={label} className="font-semibold">
				{label}
			</label>
			<input
				type={type}
				id={label}
				placeholder={placeholder}
				className="p-3 border border-solid border-gray-400 placeholder-gray-500 rounded hover:border-green-600"
			/>
		</div>
	);
};

export default TextInput;
