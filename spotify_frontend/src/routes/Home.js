import spotify_logo from "../assets/images/spotify_logo_white.svg";
import Icontext from "../components/shared/IconText";
import { Icon } from "@iconify/react";

const HomeComponent = () => {
	return (
		<div className="w-full h-full flex ">
			{/* The Left Sidebar Panel */}
			<div className="h-full sm:w-1/5 bg-black px-2">
				{/* Spotify Logo */}
				<div className="LogoDiv p-6">
					<img src={spotify_logo} alt="Spotify Logo" width={130} />
				</div>
				<div className="MenuItems bg-gray-900 rounded-2xl ">
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
				<div className="my-2 bg-gray-900 rounded-2xl">
					<Icontext
						iconName={"material-symbols:add-box-outline"}
						displayText={"Create Playlist"}
					/>
					<Icontext
						iconName={"fluent-emoji:heart-decoration"}
						displayText={"Liked Songs"}
					/>
				</div>
				<div className="language bg-gray-900 border bordder-gray-200 rounded-full text-white w-1/2 flex justify-center items-center px-2 py-1 mt-64 cursor-pointer">
					<div>
						<Icon fontSize={23} icon={"tabler:world"} />
					</div>
					<div className="ml-1">English</div>
				</div>
			</div>
			{/* The Right Main Content Panel */}
			<div className="h-full sm:w-4/5"></div>
		</div>
	);
};
export default HomeComponent;
