import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import { Link } from "react-router-dom";
const SignupComponent = () => {
	return (
		<div className="w-full h-full flex flex-col items-center ">
			<div className="logo p-6 border-b-2 border-solid w-full border-gray-300 flex justify-center">
				<Icon icon="logos:spotify" width="140" />
			</div>
			<div className="InputRegion sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 py-8 flex flex-col justify-center items-center">
				<div className="font-bold mb-5 text-xl">
					Signup up for free to start listening.
				</div>
				<TextInput
					type="text"
					label="Your's First Name"
					placeholder="Enter your firstname."
				/>
				<TextInput
					type="text"
					label="Your's Last Name"
					placeholder="Enter your lastname."
				/>
				<TextInput
					type="text"
					label="What's your email?"
					placeholder="Enter your email."
				/>
				<TextInput
					type="text"
					label="Confirm your email"
					placeholder="Enter your email again."
				/>
				<TextInput
					type="password"
					label="Create a password"
					placeholder="Create a strong password."
				/>

				<div className="w-full flex justify-center my-7">
					<button className="bg-spotify1 hover:text-white p-2 px-5 rounded-full font-semibold transform transition-transform hover:scale-105">
						SIGN UP
					</button>
				</div>
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
