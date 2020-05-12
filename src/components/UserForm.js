import React from "react";

const UserForm = (props) => {
	return (
		<>
			<form onSubmit={props.onSubmit}>
				<input
					type="number"
					name="number"
					value={props.submittedNumber}
					onChange={props.handleChange}
				/>
			</form>
		</>
	);
};

export default UserForm;
