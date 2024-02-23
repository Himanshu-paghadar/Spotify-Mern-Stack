import { createContext } from "react";
// initial values for default context...
const songContext = createContext({
	currentSong: null,
	setCurrentSong: (currentSong) => {},
});
export default songContext;
