import { useEffect, useState } from "react";
import LoggedInContainer from "../containers/LoggedInContainer";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";

const Library = () => {
	const [myPlaylist, setMyPlaylist] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const response = await makeAuthenticatedGETRequest("/playlist/get/me");
			setMyPlaylist(response.data);
		};
		getData();
	}, []);
	return (
		<LoggedInContainer activeScreen="library">
			<div className="text-white pl-4 pb-2 font-semibold text-2xl cursor-pointer hover:underline">
				My Playlists
			</div>
			<div className="px-4 grid gap-4 grid-cols-5">
				{myPlaylist.map((item) => {
					return (
						<Card
							key={JSON.stringify(item)}
							title={item.name}
							description={""}
							imgUrl={item.thumbnail}
						/>
					);
				})}
			</div>
		</LoggedInContainer>
	);
};

//Single Playlist Card View with details...
const Card = ({ title, description, imgUrl }) => {
	return (
		<div className="bg-black bg-opacity-30 hover:bg-opacity-60 w-ful p-4 rounded-md cursor-pointer">
			<div className="pb-2">
				<img className="w-full rounded-md" src={imgUrl} alt="Lofi Songs" />
			</div>
			<div className="text-white font-semibold py-3">{title}</div>
			<div className="text-gray-500 text-sm">{description}</div>
		</div>
	);
};
export default Library;
