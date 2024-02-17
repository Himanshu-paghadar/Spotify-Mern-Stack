import spotify_logo from "../assets/images/spotify_logo_white.svg";
import Icontext from "../components/shared/IconText";
import { Icon } from "@iconify/react";
import TextWithHover from "../components/shared/TextWithHover";
import TextInput from "../components/shared/TextInput";

const UploadSong = () => {
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
							{/* Logged in user & Upload Songs Button */}
							<TextWithHover displayText={"Upload Songs"} />
							<div className="LogIn h-9 w-9 bg-white flex justify-center items-center transform transition-transform hover:scale-105  rounded-full font-semibold cursor-pointer">
								HP
							</div>
						</div>
					</div>
				</div>
				{/* Main Content Section under navbar region */}
				<div className="Content w-full h-9/10 bg-appblack rounded-br-2xl rounded-bl-2xl p-4 overflow-auto">
					<div className="my-4 font-semibold text-2xl text-white hover:underline">
						Upload Your Music
					</div>
					<div className="w-full flex space-x-4">
						<div className="w-1/3">
							<TextInput
								label="Song Name"
								placeholder="Title"
								labelClassName="text-white"
							/>
						</div>
						<div className="w-1/3">
							<TextInput
								label="Thumbnail"
								placeholder="Thumbnail"
								labelClassName="text-white"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UploadSong;
