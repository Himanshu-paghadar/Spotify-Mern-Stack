const express = require("express");
const router = express.Router();
const passport = require("passport");
const Playlist = require("../models/Playlist");
const User = require("../models/User");
const Song = require("../models/Song");

//! To create a Playlist...!
router.post(
	"/create",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		const currentUser = req.user;
		const { name, thumbnail, songs } = req.body;
		if (!name || !thumbnail || !songs) {
			return res
				.status(301)
				.json({ err: "Insufficient details to create playlist" });
		}
		const playlistData = {
			name,
			thumbnail,
			songs,
			owner: currentUser._id,
			collaborators: [],
		};
		const playlist = await Playlist.create(playlistData);
		return res.status(200).json({ playlist });
	}
);

//! Get route to fetch a playlist by ID...!
//? "/:" = stands as a variable for any value...!
router.get(
	"/get/playlist/:playlistId",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		const playlistId = req.params.playlistId;
		//find playlist where _id = playlistId...!
		const playlist = await Playlist.findOne({ _id: playlistId });
		if (!playlist) {
			return res.status(301).json({ err: "Invalid Id" });
		}
		return res.status(200).json(playlist);
	}
);

//! Get all playlist made by artist...!
router.get(
	"/get/artist/:artistId",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		const artistId = req.params.artistId;

		//if artist with given artistId exists...!
		const artist = await User.findOne({ _id: artistId });
		if (!artist) {
			return res.status(301).json({ err: "Invalid artistId" });
		}
		const playlist = await Playlist.find({ owner: artistId });
		return res.status(200).json({ data: playlist });
	}
);

//! Add songs to the playlists...!
router.post(
	"/add/song",
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		const currentUser = req.user;
		const { playlistId, songId } = req.body;

		//! get the valid playlist
		const playlist = await Playlist.findOne({ _id: playlistId });
		if (!playlist) {
			return res.status(400).json({ err: "Playlist does not exist" });
		}
		
		//! check if artist is owner or collaborators of playlist...!
		if (
			!playlist.owner.equals(currentUser._id) &&
			!playlist.collaborators.includes(currentUser._id)
		) {
			return res.status(400).json({ err: "Not Allowed...!" });
		}

		//! check if song is valid...!
		const song = await Song.findOne({ _id: songId });
		if (!song) {
			return res.status(400).json({ err: "Song does not exist" });
		}

		//! Check if the song already exists in the playlist...!
		if (playlist.songs.includes(songId)) {
			return res
				.status(400)
				.json({ err: "Song already exists in the playlist" });
		}
		//! simply add song to playlist...!
		playlist.songs.push(songId);
		await playlist.save();

		return res.status(200).json(playlist);
	}
);
module.exports = router;
