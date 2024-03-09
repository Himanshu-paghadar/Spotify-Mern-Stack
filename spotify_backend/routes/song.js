const express = require("express");
const router = express.Router();
const passport = require("passport");
const Song = require("../models/Song");
const User = require("../models/User");
//! Post routes to create songs...!
router.post(
	"/create",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		const { name, thumbnail, track } = req.body;
		if (!name || !thumbnail || !track) {
			return res
				.status(301)
				.json({ err: "Insufficient details to create song" });
		}

		//* req.user gets the user because of passport.authenticate...!
		const artist = req.user._id;
		const songDetails = { name, thumbnail, track, artist };
		const createdSong = await Song.create(songDetails);
		return res.status(200).json(createdSong);
	}
);

//! Get routes to get all songs which i have published...!
router.get(
	"/get/mysongs",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		//* Get all the songs where artist id == currentUser.id...!
		const songs = await Song.find({ artist: req.user._id }).populate("artist");
		return res.status(200).json({ data: songs });
	}
);

//! Get route to search for all songs of an Artist...!
router.get(
	"/get/artist/:artistId",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		const { artistId } = req.params;
		//! if artist doesn't exists..!
		const artist = await User.findOne({ _id: artistId });
		if (!artist) {
			res.status(301).json({ err: "Artist doesn't exist" });
		}
		const songs = await Song.find({ artist: artistId });
		return res.status(200).json({ data: songs });
	}
);
//! Get route to search for a particular single song...!
router.get(
	"/get/songname/:songName",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		const { songName } = req.params;

		const songs = await Song.find({ name: songName }).populate("artist");
		return res.status(200).json({ data: songs });
	}
);
module.exports = router;
