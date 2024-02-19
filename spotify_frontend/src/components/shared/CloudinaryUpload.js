import { cloudName, uploadPreset } from "../../config";
import { openUploadWidget } from "../../utils/CloudinaryService";

const CloudinaryUpload = ({ setUrl, setName }) => {
	const uploadImageWidget = () => {
		let myUploadWidget = openUploadWidget(
			{
				cloudName: cloudName,
				uploadPreset: uploadPreset,
				sources: ["local"],
			},
			function (error, result) {
				if (!error && result.event === "success") {
					setUrl(result.info.secure_url);
					setName(result.info.original_filename);
				} else {
					if (error) {
						console.log(error);
					}
				}
			}
		);
		myUploadWidget.open();
	};

	return (
		<button
			className="bg-white text-black hover:text-white p-4 font-semibold rounded-full border border-gray-500 py-3 hover:bg-spotify1 transform transition-transform hover:scale-105"
			onClick={uploadImageWidget}
		>
			Select Track
		</button>
	);
};

export default CloudinaryUpload;
