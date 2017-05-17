import React from "react";
import ReactDOM from "react-dom";
import Layout from "app/Layout";

let app = document.getElementById("main");

export default class Main extends React.Component {

	render() {
		return (
			<nav class="main" role="navigation" aria-label="Navigation links">
			<Layout/>
			</nav>
		);
	}
}

ReactDOM.render(<Main/>, app);
