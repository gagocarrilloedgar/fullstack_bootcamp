// Import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import "bootstrap";

import { Character } from "./components/Character.jsx";
// Import { Home } from './components/home.js'
// Import { SimpleCounterButton } from './components/simpleCounterButton.js'
// Import { TodoList } from "./components/todo-list";

const Characters = () => {
	return (
		<>
			<Character url="https://www.swapi.tech/api/people/1" />
			<Character url="https://www.swapi.tech/api/people/2" />
			<Character url="https://www.swapi.tech/api/people/3" />
		</>
	);
};
//Render your react application
ReactDOM.render(<Characters />, document.querySelector("#app"));
