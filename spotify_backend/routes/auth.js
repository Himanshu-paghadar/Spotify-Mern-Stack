const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { getToken } = require("../utils/helpers");

//! This POST route will help to register a user...!

router.post("/register", async (req, res) => {
	//*req.body will be of format {email,password,firstName,lastName,username}...!
	const { email, username, password, firstName, lastName } = req.body;

	//* Step 1 : Checking of already registered existed user...!
	const user = await User.findOne({ email: email });
	if (user) {
		//? Default status code:200
		return res.status(403).json({ err: "User with this email already exists" });
	}

	//* Step 2 :  valid request and then create new user in DB...!
	//? Storing password in hash(String, Salt rounds)...!
	const hashedPassword = await bcrypt.hash(password, 10);
	const newUserData = {
		email,
		username,
		password: hashedPassword,
		firstName,
		lastName,
	};

	//* Step 3 :  create newUser...!
	const newUser = await User.create(newUserData);

	//* Step 4 : create token to return to the user...!
	const token = await getToken(email, newUser);

	//? return newUser and token in JSON format to user...!
	const userToReturn = { ...newUser.toJSON(), token };
	delete userToReturn.password;
	return res.status(200).json(userToReturn);
});

//! This POST route will help to login a user...!
router.post("/login", async (req, res) => {
	//* Step 1 : get email and password sent by user from req.body...!
	const { email, password } = req.body;

	//* Step 2 : check for the given email exists. If not, then the credentials are invalid...!
	const user = await User.findOne({ email: email });
	if (!user) {
		//? Default status code:200 -> OK
		return res.status(403).json({ err: "Invalid credentials" });
	}

	//* Step 3 : If the user exists, check if the password is correct...!
	//? bcrypt.compare() enabled to compare plain password of body to hashed password of db securely...!
	const isValidPassword = await bcrypt.compare(password, user.password);
	if (!isValidPassword) {
		return res.status(403).json({ err: "Invalid credentials" });
	}

	//* Step 4 : If the credentials are valid, return token to the user...!
	const token = await getToken(user.email, user);
	const userToReturn = { ...user.toJSON(), token };
	delete userToReturn.password;
	return res.status(200).json(userToReturn);
});

module.exports = router;
