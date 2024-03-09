import { Icon } from "@iconify/react";
import LoggedInContainer from "../containers/LoggedInContainer";
import SingleSongCard from "../components/shared/SingleSongCard";
import { useState } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";

const Search = () => {
	const [isInputFocused, setIsInputFocused] = useState(false);
	const [searchText, setSearchText] = useState("");
	const [songData, setSongData] = useState([]);

	const searchSong = async () => {
		const response = await makeAuthenticatedGETRequest(
			"/song/get/songname/" + searchText
		);
		setSongData(response.data);
		setSearchText("");
	};

	return (
		<LoggedInContainer activeScreen="search">
			<div className="w-full  px-3">
				<div
					className={`w-1/3 flex p-3 bg-black bg-opacity-50 rounded-full text-sm text-white space-x-2 items-center ${
						isInputFocused ? "border border-white" : ""
					}`}
				>
					<div>
						<Icon icon={"majesticons:search-line"} fontSize={23} />
					</div>

					<input
						type="text"
						placeholder="What do you want to play?"
						className="w-full bg-black bg-opacity-5 focus:outline-none"
						onFocus={() => {
							setIsInputFocused(true);
						}}
						onBlur={() => {
							setIsInputFocused(false);
						}}
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								searchSong();
							}
						}}
					/>
				</div>
				{songData.length > 0 ? (
					<>
						<div className="pl-2 pt-5 hover:underline text-lg font-semibold text-white">
							Top Results:
						</div>
						<div className="pt-2">
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
					</>
				) : (
					<div className="pl-2 pt-5 text-md font-semibold text-white">
						Nothing to show here. Please try modifying the Search
					</div>
				)}
			</div>
		</LoggedInContainer>
	);
};
export default Search;
