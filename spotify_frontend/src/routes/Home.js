import spotify_logo from "../assets/images/spotify_logo_white.svg";
import Icontext from "../components/shared/IconText";
import { Icon } from "@iconify/react";
import TextWithHover from "../components/shared/TextWithHover";

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

const HomeComponent = () => {
	return (
		<div className="w-full h-full flex">
			{/* The Left Sidebar Panel */}
			<div className="h-full sm:w-1/5 bg-black px-2 flex flex-col justify-between">
				{/* Spotify Logo */}
				<div>
					<div className="LogoDiv p-6">
						<img src={spotify_logo} alt="Spotify Logo" width={130} />
					</div>
					<div className="MenuItems bg-appblack rounded-2xl ">
						<Icontext
							iconName={"mingcute:home-4-fill"}
							displayText={"Home"}
							active
						/>
						<Icontext
							iconName={"majesticons:search-line"}
							displayText={"Search"}
						/>
						<Icontext
							iconName={"mingcute:playlist-2-line"}
							displayText={"Library"}
						/>
					</div>
					<div className="my-2 bg-appblack rounded-2xl">
						<Icontext
							iconName={"material-symbols:add-box-outline"}
							displayText={"Create Playlist"}
						/>
						<Icontext
							iconName={"fluent-emoji:heart-decoration"}
							displayText={"Liked Songs"}
						/>
					</div>
				</div>
				<div>
					<div className="ExtraDetails text-xs font-medium  text-gray-600 mb-6 flex flex-wrap justify-between cursor-pointer px-2">
						Legal &nbsp;&nbsp; Privacy Center &nbsp;&nbsp; Privacy
						Policy&nbsp;&nbsp; About Ads &nbsp;&nbsp; Accessability &nbsp;&nbsp;
						Cookies
					</div>
					<div className="language border border-gray-600 rounded-full text-white w-2/5 flex justify-center items-center px-2 py-1 mb-7 cursor-pointer hover:border-white transform transition-transform hover:scale-105">
						<div>
							<Icon fontSize={20} icon={"tabler:world"} />
						</div>
						<div className="ml-1 text-xs font-semibold">English</div>
					</div>
				</div>
			</div>
			{/* The Right Main Content Panel */}
			<div className="h-full sm:w-4/5 bg-black py-2 pr-2 overflow-auto ">
				{/* Navbar section */}
				<div className="Navbar w-full h-1/10 bg-appblack bg-opacity-40 rounded-tr-2xl rounded-tl-2xl p-2 flex items-center justify-end">
					<div className="w-1/2 h-full flex ">
						{/* Navbar Menus Items  */}
						<div className="w-3/5 flex justify-around items-center">
							<TextWithHover displayText={"Premium"} />
							<TextWithHover displayText={"Support"} />
							<TextWithHover displayText={"Download"} />
							{/* White Vertical Line */}
							<div className="border-r border-gray-200 h-2/3"></div>
						</div>
						<div className="w-2/5 flex justify-around h-full items-center">
							{/* Log in & Sign up Button */}
							<TextWithHover displayText={"Sign up"} />
							<div className="LogIn h-2/3 px-7 py-5 bg-white flex justify-center items-center transform transition-transform hover:scale-105  rounded-full font-semibold cursor-pointer">
								Log in
							</div>
						</div>
					</div>
				</div>
				{/* Main Content Section under navbar region */}
				<div className="Content w-full h-9/10 bg-appblack rounded-br-2xl rounded-bl-2xl p-2 overflow-auto">
					<PlaylistView
						titleText={"Spotify Playlists"}
						cardData={playlistsCard}
					/>
					<PlaylistView titleText={"Made For You"} cardData={playlistsCard} />
					<PlaylistView titleText={"Sound Of India"} cardData={playlistsCard} />
				</div>
			</div>
		</div>
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
export default HomeComponent;
