import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers";

const SignupComponent = () => {
	const [email, setEmail] = useState("");
	const [confirmEmail, setConfirmEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [cookies, setCookies] = useCookies(["token"]);
	const navigate = useNavigate();

	const signUp = async () => {
		if (email !== confirmEmail) {
			alert("Email & Confirm Email must be matched, Please check again.");
			return;
		}
		const data = { email, password, username, firstName, lastName };
		const response = await makeUnauthenticatedPOSTRequest(
			"/auth/register",
			data
		);
		if (response && !response.err) {
			const token = response.token;
			const date = new Date();
			date.setDate(date.getDate() + 30);
			setCookies("token", token, { path: "/", expires: date });
			alert("Success");
			navigate("/login");
		} else {
			alert("Fail");
		}
	};
	return (
		<div className="w-full h-full flex flex-col items-center ">
			<div className="logo p-6 border-b-2 border-solid w-full border-gray-300 flex justify-center">
				<Icon icon="logos:spotify" width="140" />
			</div>
			<div className="InputRegion sm:w-2/3 md:w-1/2 lg:w-1/3 py-8 flex flex-col justify-center items-center">
				<form>
					<div className="font-bold mb-5 text-xl">
						Signup up for free to start listening.
					</div>

					<TextInput
						type="email"
						label="What's your email?"
						placeholder="Enter your email."
						value={email}
						setValue={setEmail}
					/>
					<TextInput
						type="email"
						label="Confirm your email"
						placeholder="Enter your email again."
						value={confirmEmail}
						setValue={setConfirmEmail}
					/>
					<TextInput
						type="text"
						label="Create a username"
						placeholder="Create a username."
						value={username}
						setValue={setUsername}
					/>
					<TextInput
						type="password"
						label="Create a password"
						placeholder="Create a strong password."
						value={password}
						setValue={setPassword}
					/>
					<div className="w-full flex flex-col md:flex-row justify-between items-center space-x-3">
						<TextInput
							type="text"
							label="Your's First Name"
							placeholder="Enter your firstname."
							className="mb-4 md:mb-0 md:mr-2 w-full md:w-1/2 lg:w-1/2"
							value={firstName}
							setValue={setFirstName}
						/>
						<TextInput
							type="text"
							label="Your's Last Name"
							placeholder="Enter your lastname."
							className="mb-4 md:mb-0 w-full md:w-1/2 lg:w-1/2"
							value={lastName}
							setValue={setLastName}
						/>
					</div>
					<div className="w-full flex justify-center my-7">
						<button
							className="bg-spotify1 hover:text-white p-2 px-5 rounded-full font-semibold transform transition-transform hover:scale-105"
							onClick={(e) => {
								e.preventDefault();
								signUp();
							}}
						>
							SIGN UP
						</button>
					</div>
				</form>
				<div className="horizontalLine border border-solid w-full border-gray-300"></div>
				<div className="font-semibold text-lg my-5">
					Already have an account ?
				</div>

				<div className="w-full  flex items-center justify-center  ">
					<button className="text-gray-500 font-bold hover:text-white w-full py-3 border border-gray-500 hover:bg-spotify1 rounded-full ">
						<Link to="/login">LOG IN FOR SPOTIFY</Link>
					</button>
				</div>
			</div>
		</div>
	);
};
export default SignupComponent;
