import LoggedInContainer from "../containers/LoggedInContainer";

const playlistsCard = [
	{
		title: "Jazz in the Back...",
		description: "Soft instrumental jazz for your all activities.",
		imgUrl:
			"https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "All Out 2024s",
		description: "The biggest songs of the 2024s.",
		imgUrl:
			"https://images.unsplash.com/photo-1700701982526-8f12d6463c11?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "Chillout Lounge",
		description: "Just lean back and enjoy relaxed beats.",
		imgUrl:
			"https://images.unsplash.com/photo-1600969127084-b87e3227c397?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "Today's Top Hits",
		description: "Himanshu Patel is on top of the Hottest 50!",
		imgUrl:
			"https://images.unsplash.com/photo-1517382848528-40b248d69782?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "Lofi Beats",
		description: "chill beats, lofi vibes, new tracks every...",
		imgUrl:
			"https://images.unsplash.com/photo-1665135194772-0329053ae5d3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];
const LoggedHomeComponent = () => {
	return (
		<LoggedInContainer>
			<PlaylistView titleText={"Spotify Playlists"} cardData={playlistsCard} />
			<PlaylistView titleText={"Made For You"} cardData={playlistsCard} />
			<PlaylistView titleText={"Sound Of India"} cardData={playlistsCard} />
		</LoggedInContainer>
	);
};

// playlist Panel View...
const PlaylistView = ({ titleText, cardData }) => {
	return (
		<div className="text-white px-4 pb-6 ">
			{/* Playlist Deck Title */}
			<div className="pb-2 font-semibold text-2xl cursor-pointer hover:underline">
				{titleText}
			</div>
			<div className="w-full flex justify-between space-x-6">
				{cardData.map((item) => {
					return (
						<Card
							title={item.title}
							description={item.description}
							imgUrl={item.imgUrl}
						/>
					);
				})}
			</div>
		</div>
	);
};

//Single Playlist Card View with details...
const Card = ({ title, description, imgUrl }) => {
	return (
		<div className="bg-black bg-opacity-30 hover:bg-opacity-60 w-1/5 p-4 rounded-md">
			<div className="pb-2">
				<img className="w-full rounded-md" src={imgUrl} alt="Lofi Songs" />
			</div>
			<div className="text-white font-semibold py-3">{title}</div>
			<div className="text-gray-500 text-sm">{description}</div>
		</div>
	);
};

export default LoggedHomeComponent;
