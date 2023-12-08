const mongoose = require("mongoose");

//! Create a user model...!
//? require mongoose schema function which takes JSON as arguement...!

const User = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
	},
	likedSongs: {
		type: String,
		default: "",
	},
	likedPlaylists: {
		type: String,
		default: "",
	},
	subscribedArtists: {
		type: String,
		default: "",
	},
});

//* reffering User model to interact with database...!
const UserModel = mongoose.model("User", User);

//? Exporting UserModel
module.exports = UserModel;
