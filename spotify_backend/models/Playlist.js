const mongoose = require("mongoose");

//! Create a playlist model...!
//? require mongoose schema function which takes JSON as arguement...!

const Playlist = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	thumbnail: {
		type: String,
		required: true,
	},
	owner: {
		type: mongoose.Types.ObjectId,
		ref: "user",
	},
	songs: [
		{
			type: mongoose.Types.ObjectId,
			ref: "song",
		},
	],
	collaborators: [
		{
			type: mongoose.Types.ObjectId,
			ref: "user",
		},
	],
});

//? reffering playlist model to interact with database...!
const PlaylistModel = mongoose.model("Playlist", Playlist);

//* Exporting PlaylistModel...!
module.exports = PlaylistModel;
