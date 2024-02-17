import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCookies } from "react-cookie";

import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers";

const LoginComponent = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// eslint-disable-next-line no-unused-vars
	const [cookies, setCookies] = useCookies(["token"]);
	const navigate = useNavigate();

	const login = async () => {
		const data = { email, password };
		const response = await makeUnauthenticatedPOSTRequest("/auth/login", data);

		if (response && !response.err) {
			const token = response.token;
			const date = new Date();
			date.setDate(date.getDate() + 30);
			setCookies("token", token, { path: "/", expires: date });
			alert("Login Successfully Done👍🏻");
			navigate("/");
		} else {
			alert("Login Failed, Kindly Try Again🙏🏻");
		}
	};

	return (
		<div className="w-full h-full flex flex-col items-center ">
			<div className="logo p-6 border-b-2 border-solid w-full border-gray-300 flex justify-center">
				<Icon icon="logos:spotify" width="140" />
			</div>
			<div className="InputRegion sm:w-2/3 md:w-1/2 lg:w-1/3 py-8 flex flex-col justify-center items-center">
				<div className="font-bold mb-5">To continue, Login in to Spotify.</div>
				<TextInput
					type="text"
					label="Email address or username"
					placeholder="Email address or username"
					value={email}
					setValue={setEmail}
				/>
				<TextInput
					type="password"
					label="Enter password"
					placeholder="Enter your password"
					value={password}
					setValue={setPassword}
				/>
				<div className="w-full flex justify-end my-7 ">
					<button
						className="bg-spotify1 hover:text-white p-2 px-5 rounded-full font-semibold transform transition-transform hover:scale-105"
						onClick={(e) => {
							e.preventDefault();
							login();
						}}
					>
						LOG IN
					</button>
				</div>
				<div className="horizontalLine border border-solid w-full border-gray-300"></div>
				<div className="font-semibold text-lg my-5">Don't have an account?</div>
				<div className="w-full flex items-center justify-center  rounded-full ">
					<button className="text-gray-500 font-bold hover:text-white w-full rounded-full border border-gray-500 py-3 hover:bg-spotify1">
						<Link to="/signup">SIGN UP FOR SPOTIFY</Link>
					</button>
				</div>
			</div>
		</div>
	);
};
export default LoginComponent;
