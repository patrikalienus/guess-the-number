import React from "react";

const ShowCurrentStatus = (props) => {
	let tries;
	if (props.numberOfAttempts === 0 || props.numberOfAttempts > 1) {
		tries = "attempts, so far.";
	} else {
		tries = "attempt, so far.";
	}

	if (props.status === "correct") {
		tries = "attempts for the correct answer!";
	}

	// Status display
	let statusMessage;
	let statusClass;
	let defaultStatusClass = "currentStatus";
	if (props.status === "low") {
		statusMessage = " - too low";
		statusClass = defaultStatusClass + " low";
	} else if (props.status === "high") {
		statusMessage = " - too high";
		statusClass = defaultStatusClass + " high";
	} else if (props.status === "correct") {
		statusMessage = " - Correct!";
		statusClass = defaultStatusClass + " correct";
	}

	return (
		<div className="status">
			<span className="enteredNumber">{props.submittedNumber}</span>
			<span className={statusClass}>{statusMessage}</span>
			<div className="attempts">
				{props.numberOfAttempts} {tries}
			</div>
		</div>
	);
};

export default ShowCurrentStatus;
