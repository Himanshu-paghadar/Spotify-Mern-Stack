import TextInput from "../components/shared/TextInput";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import { useState } from "react";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";
import { useNavigate } from "react-router-dom";
import LoggedInContainer from "../containers/LoggedInContainer";

const UploadSong = () => {
	const [name, setName] = useState("");
	const [thumbnail, setThumnail] = useState("");
	const [playlistUrl, setPlaylistUrl] = useState("");
	const [uploadedSongFileName, setUploadedSongFileName] = useState();
	const navigate = useNavigate();

	const submitSong = async () => {
		const data = { name, thumbnail, track: playlistUrl };
		const response = await makeAuthenticatedPOSTRequest("/song/create", data);
		console.log(response);
		if (response) {
			alert("Song has been uploaded...");
			navigate("/myMusic");
		} else {
			alert("Something went wrong, Kindly uplaod your track again...");
		}
	};

	return (
		<LoggedInContainer>
			<div className="pl-3">
				<div className="my-4 font-semibold text-2xl text-white hover:underline">
					Upload Your Music
				</div>
				<div className="w-full flex space-x-4">
					<div className="w-1/3">
						<TextInput
							label="Song Name"
							placeholder="Title"
							labelClassName="text-white"
							value={name}
							setValue={setName}
						/>
					</div>
					<div className="w-1/3">
						<TextInput
							label="Thumbnail"
							placeholder="Thumbnail"
							labelClassName="text-white"
							value={thumbnail}
							setValue={setThumnail}
						/>
					</div>
				</div>
				{/* Select Track Button */}
				<div className="py-3">
					{uploadedSongFileName ? (
						<>
							<div className="bg-white rounded-full p-3 w-1/3 mb-3">
								{uploadedSongFileName.substring(0, 30)}...
							</div>
							{/* Submit Song Button If track is Uploaded... */}
							<div className="w-36 bg-white text-black hover:text-white p-4 font-semibold rounded-full border border-gray-500 py-3 hover:bg-spotify1 transform transition-transform hover:scale-105 cursor-pointer">
								<button
									onClick={(e) => {
										e.preventDefault();
										submitSong();
									}}
								>
									Submit Song
								</button>
							</div>
						</>
					) : (
						<CloudinaryUpload
							setUrl={setPlaylistUrl}
							setName={setUploadedSongFileName}
						/>
					)}
				</div>
			</div>
		</LoggedInContainer>
	);
};

export default UploadSong;
