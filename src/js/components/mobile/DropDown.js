import React from "react";

export default class DropDown extends React.Component {	

	render() {
		return (
			<div className={this.props.classnames}>
			    <div class="dropdownMobile"> <span>></span> <a href="#">Pay With Visa</a></div>
			    <div class="dropdownMobile"><span>></span><a href="#">Partner with us</a></div>
			    <div class="dropdownMobile"><span>></span><a href="#">Run your business</a></div>
			    <div class="dropdownMobile"><a href="#">Travel with us</a></div>
			    <div class="dropdownMobile"><span>></span><a href="#">Visa Everywhere</a></div>
			</div>
		);
}
}