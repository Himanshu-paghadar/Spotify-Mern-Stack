import { useState } from "react";
import TextInput from "../components/shared/TextInput";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";

const CreatePlaylistModel = ({ closeModel }) => {
	const [playlistName, setPlaylistName] = useState("");
	const [playlistThumb, setPlaylistThumb] = useState("");

	const createPlaylist = async () => {
		const response = await makeAuthenticatedPOSTRequest("/playlist/create", {
			name: playlistName,
			thumbnail: playlistThumb,
			songs: [],
		});
		console.log(response);
		if (response.playlist._id) {
			alert(`${playlistName} playlist created...!`);
			closeModel();
		}
	};
	return (
		<div
			className="absolute w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center"
			onClick={closeModel}
		>
			<div
				className="w-1/3 bg-appblack p-8 rounded-md"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div className="text-white font-semibold text-xl mb-4 hover:underline">
					Create Playlist
				</div>
				<div>
					<TextInput
						label="Name"
						placeholder="Playlist Name"
						labelClassName="text-white"
						value={playlistName}
						setValue={setPlaylistName}
					/>
					<TextInput
						label="Thumbnail"
						placeholder="Thumbnail"
						labelClassName="text-white"
						value={playlistThumb}
						setValue={setPlaylistThumb}
					/>
					<div className="w-full flex justify-end mt-5">
						<button
							className="bg-spotify1 hover:text-white p-2 px-5 rounded-full font-semibold transform transition-transform hover:scale-105"
							onClick={createPlaylist}
						>
							Create
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CreatePlaylistModel;
