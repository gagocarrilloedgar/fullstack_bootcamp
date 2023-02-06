import React from "react";

import PropTypes from "prop-types";

export const SecondsCounter = ({ value, id }) => {
	return (
		<div
			className="rounded display-2 d-flex align-items-center justify-content-center mx-2"
			id={id}>
			{value}
		</div>
	);
};

SecondsCounter.propTypes = {
	value: PropTypes.number,
	id: PropTypes.string.isRequired
};
