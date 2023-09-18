import "./App.css";
import { useState } from "react";
import VideoRecorder from "../src/VideoRecorder";

const App = () => {
	let [recordOption, setRecordOption] = useState("video");

	const toggleRecordOption = (type) => {
		return () => {
			setRecordOption(type);
		};
	};

	return (
		<div>
			<VideoRecorder />
		</div>
	);
};

export default App;
