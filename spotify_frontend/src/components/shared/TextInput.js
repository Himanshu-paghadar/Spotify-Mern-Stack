const TextInput = ({
	type,
	label,
	placeholder,
	className,
	value,
	setValue,
}) => {
	return (
		<div
			className={`LabelInput flex flex-col space-y-2 w-full my-3 ${className}`}
		>
			<label htmlFor={label} className="font-semibold">
				{label}
			</label>
			<input
				type={type}
				id={label}
				placeholder={placeholder}
				className="p-3 border border-solid border-gray-400 placeholder-gray-500 rounded hover:border-green-600"
				value={value}
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>
		</div>
	);
};

export default TextInput;
