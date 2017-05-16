import React from "react";
import HeaderLinks from  "desktop/HeaderLinks";


export default class Header extends React.Component {

	render() {
		return (
			<div class="header">
			<div class="titleHolder">
				<span class="outside1" >
					<span class="outside2">
					</span>
				</span>
				<a href="/index.html">VISA</a>
			</div>
				<div class="listHolder">
                <HeaderLinks link={this.props.link}/>
                </div>
			</div>
		);
	}
}