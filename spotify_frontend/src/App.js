//import "./App.css";
import "./output.css";
import LoginComponent from "./routes/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	return (
		<div className="w-screen h-screen">
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<div className="bg-green-600">Spotify</div>}
					/>
					<Route path="/login" element={<LoginComponent />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
