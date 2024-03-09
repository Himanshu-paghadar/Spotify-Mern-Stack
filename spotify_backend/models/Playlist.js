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
		ref: "User",
	},
	songs: [
		{
			type: mongoose.Types.ObjectId,
			ref: "Song",
		},
	],
	collaborators: [
		{
			type: mongoose.Types.ObjectId,
			ref: "User",
		},
	],
});

//? reffering playlist model to interact with database...!
const PlaylistModel = mongoose.model("Playlist", Playlist);

//* Exporting PlaylistModel...!
module.exports = PlaylistModel;
