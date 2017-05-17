import React from "react";
import HeaderLinks from  "desktop/HeaderLinks";


export default class Header extends React.Component {

	render() {
		return (
			<div class="header">
			<div class="titleHolder">
				<span title="Credit card icon" aria-label="Credit card icon" class="creditCardIconOutside" >
					<span class="creditCardIconInside">
					</span>
				</span>
				<a aria-label="Reload Visa Home page" href="/index.html">VISA</a>
			</div>
				<div class="listHolder">
                <HeaderLinks link={this.props.link}/>
                </div>
			</div>
		);
	}
}