import "./output.css";
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";
import HomeComponent from "./routes/Home";
import LoggedHomeComponent from "./routes/LoggedHome";
import UploadSong from "./routes/UploadSong";
import MyMusic from "./routes/MyMusic";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import songContext from "./contexts/songContext";
import { useState } from "react";

function App() {
	// eslint-disable-next-line no-unused-vars
	const [cookies, setCookies] = useCookies(["token"]);
	const [currentSong, setCurrentSong] = useState();
	return (
		<div className="w-screen h-screen font-poppins">
			<BrowserRouter>
				{cookies.token ? (
					//Logged In Routes...
					<songContext.Provider value={{ currentSong, setCurrentSong }}>
						<Routes>
							<Route path="/" element={<LoggedHomeComponent />} />
							<Route path="/uploadSong" element={<UploadSong />} />
							<Route path="/myMusic" element={<MyMusic />} />
							<Route path="*" element={<Navigate to="/" />} />
						</Routes>
					</songContext.Provider>
				) : (
					//Logged Out Routes...
					<Routes>
						<Route path="/" element={<HomeComponent />} />
						<Route path="/login" element={<LoginComponent />} />
						<Route path="/signup" element={<SignupComponent />} />
						<Route path="*" element={<Navigate to="/login" />} />
					</Routes>
				)}
			</BrowserRouter>
		</div>
	);
}

export default App;
