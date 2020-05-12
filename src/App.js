import React, { useState } from "react";
import "./App.css";

import ResetGame from "./components/ResetGame";
import UserForm from "./components/UserForm";
import ShowCurrentStatus from "./components/ShowCurrentStatus";
import utils from "./components/utils";

const App = () => {
	const [submittedNumber, setSubmittedNumber] = useState("");
	const [status, setStatus] = useState("");
	const [randomNumber, setRandomNumber] = useState(utils.random(1, 10000));
	const [numberOfAttempts, setNumberOfAttempts] = useState(0);

	const handleChange = (event) => {
		setSubmittedNumber(event.target.value);
		setStatus("");
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (submittedNumber < randomNumber) {
			setStatus("low");
		} else if (submittedNumber > randomNumber) {
			setStatus("high");
		} else {
			setStatus("correct");
		}

		setNumberOfAttempts(numberOfAttempts + 1);
	};

	const restartGame = () => {
		setSubmittedNumber("");
		setStatus("");
		setRandomNumber(utils.random(1, 10000));
		setNumberOfAttempts(0);
	};

	return (
		<div className="App">
			<div className="wrapper">
				<header>
					<h1>Guess the number I'm thinking about</h1>
					<em>Hint: It's a whole number between 1 and 10'000.</em>
				</header>
				<div className="input">
					<UserForm
						onSubmit={handleSubmit}
						handleChange={handleChange}
						submittedNumber={submittedNumber}
					/>
					<ShowCurrentStatus
						submittedNumber={submittedNumber}
						status={status}
						numberOfAttempts={numberOfAttempts}
					/>
					<ResetGame restartGame={restartGame} />
				</div>
			</div>
		</div>
	);
};

export default App;
