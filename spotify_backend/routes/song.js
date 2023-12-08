const express = require("express");
const router = express.Router();
const passport = require("passport");
const Song = require("../models/Song");

//! Post routes to create songs...!
router.post(
	"/create",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		const { name, thumbnail, track } = req.body;
		if (!name || !thumbnail || !track) {
			return res
				.status(301)
				.json({ err: "Insufficient detais to create song" });
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
		const currentUser = req.user;
		//* Get all the songs where artist id == currentUser.id...!
		const songs = await Song.find({ artist: req.user._id });
		return res.status(200).json({ data: songs });
	}
);

module.exports = router;
