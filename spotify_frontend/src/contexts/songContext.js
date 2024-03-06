import { createContext } from "react";
// initial values for default context...
const songContext = createContext({
	currentSong: null,
	setCurrentSong: (currentSong) => {},
	soundPlayed: null,
	setSoundPlayed: () => {},
	isPaused: null,
	setIsPaused: () => {},
});
export default songContext;
