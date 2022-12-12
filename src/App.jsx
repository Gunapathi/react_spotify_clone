import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import { MainContainer } from "./Components/MainContainer";
import { RightMenu } from "./Components/RightMenu";
import Background from "./img/background.jpg";

function App() {
	return (
		<div className="App w-full h-screen relative flex">
			<LeftMenu />
			<MainContainer />
			<RightMenu />

			<div
				className="background absolute top-0 right-0 bottom-0 left-0 bg-center bg-cover bg-no-repeat grayscale -z-[1]"
				style={{ backgroundImage: `url(${Background})` }}></div>
		</div>
	);
}

export default App;
