import React from "react";

import Desktop from "desktop/Layout";
import Mobile from "mobile/Layout";

export default class Layout extends React.Component {

	constructor(props) {
  		super(props);
  		// large and medium will have same layouts
  		let device = "large";
  		this.state = {
    		device : device,
  		};
	}
		

	handleViewportChange(data) {

	}

	componentDidMount() {

	}

	render() {
		let currentLayout = null;

			if(this.state.device === "small") {
				currentLayout = <Mobile/>
			}
			else {
				currentLayout = <Desktop/>

			}
		return (
			<div class="headreLayOutHolder">
				{currentLayout}
			</div>
		);
	}
}