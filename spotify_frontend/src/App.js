//import "./App.css";
import "./output.css";
import LoginComponent from "./routes/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	return (
		<div className="w-screen h-screen font-poppins">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<div className="bg-spotify1 text-center text-xl hover:text-green-700">~:Spotify Music Player:~</div>}
					/>
					<Route path="/login" element={<LoginComponent />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
