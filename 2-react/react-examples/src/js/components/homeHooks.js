import React, { useState } from "react";

import data from "./data.json";
import { SecondsCounter } from "./secondsCounter.js";

export function Home() {
	// UseState is for creaction state inside a component
	const [timer, setTimer] = useState(() => data);
	const [counter, setCounter] = useState(1);

	const updateTimer = () => {
		let aux = counter;
		data.forEach((_, index) => {
			// Here what we do is to get the last digit of the number (modulus). And we use 10 as the divisor because we want to get the last digit of the number
			const valueToRender = aux % 10;
			setTimer(prevState => {
				const newState = [...prevState];
				newState[index].value = valueToRender;
				return newState;
			});
			if (index === data.length - 1) return setCounter(prev => prev + 1);
			// Here what we do is to divide the number by 10 and then we get the integer part of the result (floor) We move the decimal point to the left
			aux = Math.floor(aux / 10);
		});
	};

	const updateTimerWithEase = () => setTimeout(() => updateTimer(), 1000);

	// useEffect is to update the component when the state changes (when the component re-renders)
	React.useEffect(() => {
		updateTimerWithEase();
	}, [counter]);

	const displayDigits = [...timer].reverse();

	return (
		<div className="container rounded d-flex justify-content-center py-3">
			{displayDigits.map(({ value, id }) => {
				return <SecondsCounter key={id} value={value} id={id} />;
			})}
		</div>
	);
}
