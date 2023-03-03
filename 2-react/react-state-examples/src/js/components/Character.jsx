/* eslint-disable react/prop-types */
import React, { useState } from "react";

const useFetch = url => {
	const [state, setState] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	React.useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(data => {
				setState(data);
				setLoading(prev => !prev);
				setError(false);
			})
			.catch(error => {
				setError(error);
				setLoading(prev => !prev);
			});
	}, [url]);

	return {
		error,
		state,
		loading
	};
};

export const Character = ({ url }) => {
	const { state: character, loading, error } = useFetch(url);

	if (loading) return <h1>... loading </h1>;
	if (error) return <h1>404 Error</h1>;

	return <h1>{character.result.properties.name}</h1>;
};
