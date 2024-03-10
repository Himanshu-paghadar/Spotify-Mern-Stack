import { useEffect, useState } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";

const AddToPlaylistModel = ({ closeModel, addSongToPlaylist }) => {
	const [myPlaylist, setMyPlaylist] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const response = await makeAuthenticatedGETRequest("/playlist/get/me");
			setMyPlaylist(response.data);
		};
		getData();
	}, []);

	return (
		<div
			className="absolute w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center"
			onClick={closeModel}
		>
			<div
				className="w-1/3 bg-appblack p-6 rounded-md"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div className="text-white font-semibold text-xl mb-4 hover:underline">
					Select Playlist
				</div>
				<div>
					{myPlaylist.map((item) => {
						return (
							<PlayListSelection
								info={item}
								addSongToPlaylist={addSongToPlaylist}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

const PlayListSelection = ({ info, addSongToPlaylist }) => {
	return (
		<div
			className="flex items-center py-2 cursor-pointer hover:bg-gray-400 hover:bg-opacity-20 p-2 rounded-lg"
			onClick={() => {
				addSongToPlaylist(info._id);
			}}
		>
			<div>
				<img src={info.thumbnail} alt="" className="h-12 w-12 rounded-lg" />
			</div>
			<div className="text-white pl-3 font-semibold hover:underline">
				{info.name}
			</div>
		</div>
	);
};
export default AddToPlaylistModel;
