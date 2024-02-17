//import "./App.css";
import "./output.css";
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";
import HomeComponent from "./routes/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
function App() {
	const [cookies, setCookies] = useCookies(["token"]);
	return (
		<div className="w-screen h-screen font-poppins">
			<BrowserRouter>
				{cookies.token ? (
					<Routes>
						<Route path="/" element={<HomeComponent />} />
						<Route path="*" element={<Navigate to="/login" />} />
					</Routes>
				) : (
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
