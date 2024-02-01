import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
const LoginComponent = () => {
	return (
		<div className="w-full h-full flex flex-col items-center ">
			<div className="logo p-6 border-b-2 border-solid w-full border-gray-300 flex justify-center">
				<Icon icon="logos:spotify" width="140" />
			</div>
			<div className="InputRegion w-1/3 py-8 flex flex-col justify-center items-center">
				<div className="font-bold mb-5">To continue, Login in to Spotify.</div>
				<TextInput
					type="text"
					label="Email address or username"
					placeholder="Email address or username"
				/>
				<TextInput type="password" label="Password" placeholder="Password" />
				<div className="w-full flex justify-end my-7 ">
					<button className="bg-spotify1 hover:text-white p-2 px-5 rounded-full font-semibold ">
						LOG IN
					</button>
				</div>
				<div className="horizontalLine border border-solid w-full border-gray-300"></div>
				<div className="font-semibold text-lg my-5">Don't have an account?</div>
				<div className="w-full border border-gray-500 flex items-center justify-center py-3 rounded-full hover:bg-spotify1">
					<button className="text-gray-500 font-bold hover:text-white">
						SIGN UP FOR SPOTIFY
					</button>
				</div>
			</div>
		</div>
	);
};
export default LoginComponent;
