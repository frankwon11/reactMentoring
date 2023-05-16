// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Sum from "./Pages/Sum";
import Sub from "./Pages/Sub";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <Home/> } />
				<Route path="/Sum/:num1/:num2" element={ <Sum/> } />
                <Route path="/Sub/:num1/:num2" element={ <Sub/> } />
			</Routes>
		</BrowserRouter>
	);
}

export default App;