import SingleSongCard from "../components/shared/SingleSongCard";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import { useEffect, useState } from "react";

import LoggedInContainer from "../containers/LoggedInContainer";

const MyMusic = () => {
	const [songData, setSongData] = useState([]);

	// Fetching Uploaded Songs of user...
	useEffect(() => {
		const getData = async () => {
			const response = await makeAuthenticatedGETRequest("/song/get/mysongs");
			// console.log(response);
			setSongData(response.data);
		};
		getData();
	}, []);

	return (
		<LoggedInContainer activeScreen="MyMusic">
			<div className="Content w-full h-9/10 bg-appblack rounded-br-2xl rounded-bl-2xl p-4 overflow-auto">
				<div className="text-white pb-2 font-semibold text-2xl cursor-pointer hover:underline">
					My Songs
				</div>
				{songData.map((item) => {
					return (
						<SingleSongCard
							info={item}
							key={JSON.stringify(item)}
							playSound={() => {}}
						/>
					);
				})}
			</div>
		</LoggedInContainer>
	);
};
export default MyMusic;
