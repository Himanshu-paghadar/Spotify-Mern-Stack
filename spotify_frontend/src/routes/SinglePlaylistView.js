import { useParams } from "react-router-dom";
import LoggedInContainer from "../containers/LoggedInContainer";
import SingleSongCard from "../components/shared/SingleSongCard";
import { useEffect, useState } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";

const SinglePlaylistView = () => {
	const { playlistId } = useParams();
	const [playlistDetail, setPlaylistDetail] = useState({});

	console.log(playlistDetail);
	useEffect(() => {
		const getData = async () => {
			const response = await makeAuthenticatedGETRequest(
				"/playlist/get/playlist/" + playlistId
			);
			setPlaylistDetail(response);
		};
		getData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<LoggedInContainer activeScreen={"library"}>
			{playlistDetail._id && (
				<div>
					<div className="text-white pl-4 pb-2 font-semibold text-2xl cursor-pointer hover:underline">
						{playlistDetail.name}
					</div>
					<div className="pt-1 px-4">
						{playlistDetail.songs.map((item) => {
							return (
								<SingleSongCard
									info={item}
									key={JSON.stringify(item)}
									playSound={() => {}}
								/>
							);
						})}
					</div>
				</div>
			)}
		</LoggedInContainer>
	);
};
export default SinglePlaylistView;
