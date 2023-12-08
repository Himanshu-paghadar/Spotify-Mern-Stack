//* acquiring packages into variables..!
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy,
	ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("./models/User.js");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
require("dotenv").config();
const app = express();
const port = 8080;

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
		User.findOne({ id: jwt_payload.sub }, function (err, User) {
			if (err) {
				return done(err, false);
			}
			if (User) {
				return done(null, User);
			} else {
				return done(null, false);
				// or you could create a new account
			}
		});
	})
);

//! Routes -> API : Get Type : / : return text : "Spotify Clone"...!
app.get("/", (req, res) => {
	res.send("Spotify Clone");
});

//! Use Auth routes for Authentication...!
app.use("/auth", authRoutes);

//! Use song routes for create songs...!
app.use("/song", songRoutes);

//! we will tell express that our server will run app on localhost:8080 ...!
app.listen(port, () => {
	console.log("App is running on port :" + port);
});
