const jwt = require("jsonwebtoken");
exports = {};

exports.getToken = async (email, user) => {
	const token = jwt.sign({ identifier: user._id }, "KeyPassportJwtIsSecured");
	return token;
};

module.exports = exports;
