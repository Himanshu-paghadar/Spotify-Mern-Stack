import { backendUrl } from "./config";
import Cookies from "js-cookie";

export const makeUnauthenticatedPOSTRequest = async (route, body) => {
	const response = await fetch(backendUrl + route, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	});
	const formattedReponse = await response.json();
	return formattedReponse;
};

export const makeAuthenticatedPOSTRequest = async (route, body) => {
	const token = getToken();
	const response = await fetch(backendUrl + route, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(body),
	});
	const formattedReponse = await response.json();
	return formattedReponse;
};

export const makeAuthenticatedGETRequest = async (route) => {
	const token = getToken();
	const response = await fetch(backendUrl + route, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});
	const formattedReponse = await response.json();
	return formattedReponse;
};

const getToken = () => {
	// Retrieve the token using js-cookie
	const accessToken = Cookies.get("token");
	return accessToken;
};
