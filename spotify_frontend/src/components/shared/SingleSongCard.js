import { useContext } from "react";
import songContext from "../../contexts/songContext";

const SingleSongCard = ({ info, playSound }) => {
	// eslint-disable-next-line no-unused-vars
	const { currentSong, setCurrentSong } = useContext(songContext);

	return (
		<div
			className="flex hover:bg-gray-400 hover:bg-opacity-20 p-2 rounded-md"
			onClick={() => {
				setCurrentSong(info);
			}}
		>
			{/* Song Card-Image */}
			<div
				className="cardImage w-10 h-10 bg-center bg-cover rounded-md"
				style={{
					backgroundImage: `url("${info.thumbnail}")`,
				}}
			></div>
			<div className="flex w-full">
				<div className="w-5/6 text-white pl-3 flex flex-col justify-center">
					{/* Song Title  */}
					<div className="Title font-medium text-base cursor-pointer hover:underline">
						{info.name}
					</div>
					{/* Song Artist Name */}
					<div className="Artist text-xs text-gray-400 cursor-pointer hover:underline">
						{info.artist.firstName + " " + info.artist.lastName}
					</div>
				</div>
				{/* Song Duration */}
				<div className="w-1/6 flex justify-center items-center text-gray-400 text-sm">
					<div>3:44</div>
					{/* More Options */}
					{/* <div>...</div> */}
				</div>
			</div>
		</div>
	);
};
export default SingleSongCard;
