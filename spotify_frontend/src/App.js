//import "./App.css";
import "./output.css";
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";
import HomeComponent from "./routes/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	return (
		<div className="w-screen h-screen font-poppins">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<div className="bg-spotify1 text-center text-xl hover:text-white ">
								~:Spotify Music Player:~
							</div>
						}
					/>
					<Route path="/login" element={<LoginComponent />} />
					<Route path="/signup" element={<SignupComponent />} />
					<Route path="/home" element={<HomeComponent />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
