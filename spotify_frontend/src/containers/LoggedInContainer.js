/* eslint-disable no-unused-vars */
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import Icontext from "../components/shared/IconText";
import { Icon } from "@iconify/react";
import TextWithHover from "../components/shared/TextWithHover";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { Howl, Howler } from "howler";
import { useState } from "react";

const LoggedInContainer = ({ children }) => {
	const [soundPlayed, setSoundPlayed] = useState(null);
	const [isPaused, setIsPaused] = useState(true);

	const playSound = (songSrc) => {
		if (soundPlayed) {
			soundPlayed.stop();
		}
		let sound = new Howl({
			src: [songSrc],
			html5: true,
		});
		setSoundPlayed(sound);
		sound.play();
	};

	const pauseSound = () => {
		soundPlayed.pause();
	};

	const togglePlayPause = () => {
		if (isPaused) {
			playSound(
				"https://res.cloudinary.com/dcvbkytfl/video/upload/v1708680945/evsrueevhjq3ntgrwnfa.mp3"
			);
			setIsPaused(false);
		} else {
			pauseSound();
			setIsPaused(true);
		}
	};

	return (
		<div className="w-full h-full">
			<div className="h-5/6 w-full flex">
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
							<Icontext iconName={"f7:music-albums"} displayText={"Library"} />
							<Icontext
								iconName={"mingcute:playlist-2-line"}
								displayText={"My Music"}
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
						<div className="language border border-gray-600 rounded-full text-white w-2/5 flex justify-center items-center px-2 py-1 mb-1 cursor-pointer hover:border-white transform transition-transform hover:scale-105">
							<div>
								<Icon fontSize={20} icon={"tabler:world"} />
							</div>
							<div className="ml-1 text-xs font-semibold">English</div>
						</div>
					</div>
				</div>
				{/* The Right Main Content Panel */}
				<div className="h-full sm:w-4/5 bg-black pt-2 pr-2 overflow-auto">
					{/* Navbar section */}
					<div className="Navbar w-full h-1/10 bg-appblack bg-opacity-40 rounded-tr-2xl rounded-tl-2xl p-2 flex items-center justify-end">
						{/* Navbar Menus Items  */}
						<div className="w-1/2 h-full flex ">
							<div className="w-3/5 flex justify-around items-center">
								<TextWithHover displayText={"Premium"} />
								<TextWithHover displayText={"Support"} />
								<TextWithHover displayText={"Download"} />
								{/* White Vertical Line */}
								<div className="border-r border-gray-200 h-2/3"></div>
							</div>
							<div className="w-2/5 flex justify-around h-full items-center">
								{/* Log in & Sign up Button */}
								<Link to={"/uploadSong"}>
									<TextWithHover displayText={"Upload Songs"} />
								</Link>
								<div className="LogIn h-9 w-10 bg-white flex justify-center items-center transform transition-transform hover:scale-105  rounded-full font-semibold cursor-pointer">
									HP
								</div>
							</div>
						</div>
					</div>
					{/* Main Content Section under navbar region */}
					<div className="Content w-full h-9/10 bg-appblack rounded-br-2xl rounded-bl-2xl p-2 overflow-auto">
						{children}
					</div>
				</div>
			</div>
			{/* Song Player UI */}
			<div className="h-1/6 w-full bg-black text-white flex items-center px-3">
				{/* Song Details */}
				<div className="w-1/4 flex items-center">
					<img
						className="PlayerSongPoster w-14 h-14 bg-center bg-cover rounded-md"
						src="data:image/jpeg;base64,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"
						alt="Song Poster"
					/>
					<div className="pl-3 flex-col">
						<div className="Song-Title font-normal text-sm cursor-pointer hover:underline">
							See You Again
						</div>
						<div className="Song-Artist text-xs text-gray-400 cursor-pointer hover:underline">
							Wiz Khalifa
						</div>
					</div>
				</div>
				<div className="w-1/2 h-full flex flex-col justify-center items-center ">
					{/* Song Control buttons */}
					<div className="flex w-1/3 justify-around items-center">
						<Icon
							icon={"iconamoon:playlist-shuffle-duotone"}
							fontSize={20}
							className="cursor-pointer text-gray-400 hover:text-white"
						/>
						<Icon
							icon="material-symbols:skip-previous-rounded"
							fontSize={30}
							className="cursor-pointer text-gray-400 hover:text-white"
						/>
						<Icon
							icon={
								isPaused
									? "ic:baseline-play-circle"
									: "ic:baseline-pause-circle"
							}
							fontSize={42}
							className="cursor-pointer transform transition-transform hover:scale-105"
							onClick={togglePlayPause}
						/>
						<Icon
							icon="material-symbols:skip-next-rounded"
							fontSize={30}
							className="cursor-pointer  text-gray-400 hover:text-white4"
						/>
						<Icon
							icon="iconoir:repeat"
							fontSize={20}
							className="cursor-pointer text-gray-400 hover:text-white"
						/>
					</div>
					{/* <div>Progress Bar</div> */}
				</div>
				{/* Volume Bar And buttons */}
				<div className="w-1/4 flex justify-end space-x-4">
					<Icon
						icon="gg:play-button-r"
						fontSize={20}
						className="cursor-pointer text-gray-400 hover:text-white transform transition-transform hover:scale-105"
					/>
					<Icon
						icon="tabler:microphone-2"
						fontSize={20}
						className="cursor-pointer text-gray-400 hover:text-white transform transition-transform hover:scale-105"
					/>
					<Icon
						icon="heroicons:queue-list"
						fontSize={20}
						className="cursor-pointer text-gray-400 hover:text-white transform transition-transform hover:scale-105"
					/>
					<Icon
						icon="pixelarticons:audio-device"
						fontSize={20}
						className="cursor-pointer text-gray-400 hover:text-white transform transition-transform hover:scale-105"
					/>
					<Icon
						icon="fluent:speaker-1-32-regular"
						fontSize={20}
						className="cursor-pointer text-gray-400 hover:text-white transform transition-transform hover:scale-105"
					/>
					<Icon
						icon="akar-icons:miniplayer"
						fontSize={20}
						className="cursor-pointer text-gray-400 hover:text-white transform transition-transform hover:scale-105"
					/>
					<Icon
						icon="entypo:resize-full-screen"
						fontSize={20}
						className="cursor-pointer text-gray-400 hover:text-white transform transition-transform hover:scale-105"
					/>
				</div>
			</div>
		</div>
	);
};
export default LoggedInContainer;
