//* acquiring packages into variables..!
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy,
	ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("./models/User.js");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
const playlistRoutes = require("./routes/playlist");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 8080;

//cors is security policy which tells that selective urls can only make request on backend...!
app.use(cors());

//! Tell Express that body will use JSON format...!
app.use(express.json());

//! Connect MongoDB with Node app...!
//? connect("DB url",{Connection Option});
mongoose
	.connect(
		"mongodb+srv://himanshu_paghadar:" +
			process.env.Mongo_Password +
			"@spotify.kc2y3nf.mongodb.net/?retryWrites=true&w=majority",
		{}
	)
	.then((x) => {
		console.log("Connected to MongoDB...!");
	})
	.catch((err) => {
		console.log("Error while connecting to MongoDB..!");
		console.log(err);
	});

//! setup of passport-jwt...!
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "KeyPassportJwtIsSecured";
passport.use(
	new JwtStrategy(opts, function (jwt_payload, done) {
		User.findOne({ id: jwt_payload.sub })
			.exec()
			.then(function (User) {
				if (User) {
					return done(null, User);
				} else {
					return done(null, false);
					// or you could create a new account
				}
			})
			.catch(function (err) {
				return done(err, false);
			});
	})
);

//! Routes -> API : Get Type : / : return text : "Spotify Clone"...!
app.get("/", (req, res) => {
	res.send("Spotify Clone");
});

//! Use Auth routes for Authentication...!
app.use("/auth", authRoutes);

//! Use song routes to create songs...!
app.use("/song", songRoutes);

//! Use playlist routes to create playlist
app.use("/playlist", playlistRoutes);

//! we will tell express that our server will run app on localhost:8080 ...!
app.listen(port, () => {
	console.log("App is running on port :" + port);
});
