import React from "react";
import ReactDOM from "react-dom";
import Layout from "app/Layout";

let app = document.getElementById("main");

export default class Main extends React.Component {

	render() {
		return (
			<main class="main" role="main">
			<Layout/>
			</main>
		);
	}
}

ReactDOM.render(<Main/>, app);
