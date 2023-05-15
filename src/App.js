// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import PostView from "./Pages/Postview";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <Home/> } />
				<Route path="/postview/:postID" element={ <PostView/> } />
			</Routes>
		</BrowserRouter>
	);
}

export default App;