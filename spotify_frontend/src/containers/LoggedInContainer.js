/* eslint-disable no-unused-vars */
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import Icontext from "../components/shared/IconText";
import { Icon } from "@iconify/react";
import TextWithHover from "../components/shared/TextWithHover";
import { Link } from "react-router-dom";
import { Howl, Howler } from "howler";
import { useContext, useLayoutEffect, useRef, useState } from "react";
import songContext from "../contexts/songContext";
import CreatePlaylistModel from "../Models/CreatePlaylistModel";
import AddToPlaylistModel from "../Models/AddToPlaylistModel";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";
import Cookies from "js-cookie";

const LoggedInContainer = ({ children, activeScreen }) => {
	const [createPlaylistModelOpen, setCreatePlaylistModelOpen] = useState(false);
	const [addToPlaylistModelOpen, setAddToPlaylistModelOpen] = useState(false);
	const {
		currentSong,
		setCurrentSong,
		soundPlayed,
		setSoundPlayed,
		isPaused,
		setIsPaused,
	} = useContext(songContext);

	const firstUpdate = useRef(true);

	useLayoutEffect(() => {
		if (firstUpdate.current) {
			firstUpdate.current = false;
			return;
		}
		if (!currentSong) {
			return;
		}
		changeSong(currentSong.track);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentSong && currentSong.track]);

	const addSongToPlaylist = async (playlistId) => {
		const songId = currentSong._id;
		const payload = { playlistId, songId };
		const response = await makeAuthenticatedPOSTRequest(
			"/playlist/add/song",
			payload
		);
		if (response) {
			alert("Song Added to Playlist...!");
			setAddToPlaylistModelOpen(false);
		}
	};
	const playSound = () => {
		if (!soundPlayed) {
			return;
		}
		soundPlayed.play();
	};
	const changeSong = (songSrc) => {
		if (soundPlayed) {
			soundPlayed.stop();
		}
		let sound = new Howl({
			src: [songSrc],
			html5: true,
		});
		setSoundPlayed(sound);
		sound.play();
		setIsPaused(false);
	};

	const pauseSound = () => {
		soundPlayed.pause();
	};

	const togglePlayPause = () => {
		if (isPaused) {
			playSound();
			setIsPaused(false);
		} else {
			pauseSound();
			setIsPaused(true);
		}
	};
	const handleLogout = () => {
		// Remove the token cookie
		Cookies.remove("token");
	};

	return (
		<div className="w-full h-full">
			{createPlaylistModelOpen && (
				<CreatePlaylistModel
					closeModel={() => {
						setCreatePlaylistModelOpen(false);
					}}
				/>
			)}
			{addToPlaylistModelOpen && (
				<AddToPlaylistModel
					closeModel={() => {
						setAddToPlaylistModelOpen(false);
					}}
					addSongToPlaylist={addSongToPlaylist}
				/>
			)}
			<div className={`${currentSong ? "h-5/6" : "h-full"} w-full flex`}>
				{/* The Left Sidebar Panel */}
				<div className="h-full sm:w-1/5 bg-black px-2 flex flex-col justify-between">
					{/* Spotify Logo */}
					<div>
						<div className="LogoDiv p-6">
							<Link to="/">
								<img src={spotify_logo} alt="Spotify Logo" width={130} />
							</Link>
						</div>
						<div className="MenuItems bg-appblack rounded-2xl ">
							<Icontext
								iconName={"mingcute:home-4-fill"}
								displayText={"Home"}
								targetLink="/"
								active={activeScreen === "Home"}
							/>
							<Icontext
								iconName={"majesticons:search-line"}
								displayText={"Search"}
								targetLink="/search"
								active={activeScreen === "search"}
							/>
							<Icontext
								iconName={"f7:music-albums"}
								displayText={"Library"}
								targetLink="/library"
								active={activeScreen === "library"}
							/>

							<Icontext
								iconName={"mingcute:playlist-2-line"}
								displayText={"My Music"}
								targetLink="/MyMusic"
								active={activeScreen === "MyMusic"}
							/>
						</div>
						<div className="my-2 bg-appblack rounded-2xl">
							<Icontext
								iconName={"material-symbols:add-box-outline"}
								displayText={"Create Playlist"}
								onClick={() => setCreatePlaylistModelOpen(true)}
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
									<TextWithHover
										displayText={"Upload Songs"}
										active={activeScreen === "UploadSong"}
									/>
								</Link>
								<div
									className="LogIn h-9 w-10 bg-white flex justify-center items-center transform transition-transform hover:scale-105  rounded-full font-semibold cursor-pointer"
									onClick={(e) => {
										e.preventDefault();
										handleLogout();
									}}
								>
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
			{currentSong && (
				<div className="h-1/6 w-full bg-black text-white flex items-center px-3">
					{/* Song Details */}
					<div className="w-1/4 flex items-center">
						<img
							className="PlayerSongPoster w-14 h-14 bg-center bg-cover rounded-md"
							src={currentSong.thumbnail}
							alt="Song Poster"
						/>
						<div className="pl-3 flex-col">
							<div className="Song-Title font-normal text-sm cursor-pointer hover:underline">
								{currentSong.name}
							</div>
							<div className="Song-Artist text-xs text-gray-400 cursor-pointer hover:underline">
								{currentSong.artist.firstName +
									" " +
									currentSong.artist.lastName}
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
								className="cursor-pointer  text-gray-400 hover:text-white"
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
					<div className="w-1/4 flex justify-end items-center space-x-4">
						<Icon
							icon="ph:heart"
							fontSize={22}
							className="cursor-pointer text-gray-400 hover:text-white transform transition-transform hover:scale-105"
						/>
						<Icon
							icon="ic:round-playlist-add"
							fontSize={22}
							className="cursor-pointer text-gray-400 hover:text-white transform transition-transform hover:scale-105"
							onClick={() => {
								setAddToPlaylistModelOpen(true);
							}}
						/>
						<Icon
							icon="entypo:resize-full-screen"
							fontSize={18}
							className="cursor-pointer text-gray-400 hover:text-white transform transition-transform hover:scale-105"
						/>
					</div>
				</div>
			)}
		</div>
	);
};
export default LoggedInContainer;
