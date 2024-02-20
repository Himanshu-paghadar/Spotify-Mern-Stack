const mongoose = require("mongoose");

//! Create a song model...!
//? require mongoose schema function which takes JSON as arguement...!

const Song = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	thumbnail: {
		type: String,
		required: true,
	},
	track: {
		type: String,
		required: true,
	},
	artist: {
		type: mongoose.Types.ObjectId,
		ref: "User",
	},
});

//? reffering Song model to interact with database...!
const SongModel = mongoose.model("Song", Song);

//* Exporting SongModel...!
module.exports = SongModel;
