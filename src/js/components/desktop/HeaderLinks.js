import React from "react";
import SubLinks from "desktop/SubLinks";
import ReactDOM from 'react-dom';
import DropDown from "mobile/DropDown";

class ListLink extends React.Component {
    

    render() {
    	let ariaLable="More options on "+this.props.linkName;

		return (
              <li role="menuitem"><a class="headerLinks" aria-label={ariaLable} aria-haspopup="true" onClick={this.props.link} id={this.props.linkName.replace(/ /gi,"")} href="#">{this.props.linkName}</a></li>
		);
	}

}	
export default class HeaderLinks extends React.Component {

	constructor(props) {
  		super(props);
  		this.state = {
            isPopUpActive: false,
            isloadedFirst: true
  		};
	}

	mobileIconClicked(e) {
        //const subcomponent = document.getElementById('subcomponentId');
        const arrow=document.getElementById("arrow-up");
        //subcomponent.style.visibility = 'hidden';
        //arrow.style.visibility = 'hidden';
        const  isPopUpActive= this.state.isPopUpActive ? true : false;
        this.setState({
    		isPopUpActive: !isPopUpActive,
    		isloadedFirst:false
  		});

	}

	updateDimensions(e) {
     
     let width=window.innerWidth;  
     //alert(width);
     this.setState({
    		device: width < 768 ? "small" : "large"
  	  });

	}

   componentDidMount() {
       window.addEventListener("resize", this.updateDimensions.bind(this), true);
   }

	render() {

		let icon=null;
        let mobileDropdown=null;  

        let isSmallDevice=window.innerWidth < 768 ? "small" : "large"

         if(isSmallDevice==="small"){
           if(!this.state.isPopUpActive){
	          icon=<section><div class="iconLine"/> <div class="iconLine"/> <div class="iconLine"/> <div class="iconLine"/></section>
			  mobileDropdown=this.state.isloadedFirst ? null :  <DropDown classnames="dropdownMobileHolder slideOutLoadMobile"/>;
			}else{
	           icon=<div class="closeIcon">X</div>
	           mobileDropdown=<DropDown classnames="dropdownMobileHolder slideInLoadMobile"/>
			}
         }else{
         	  		this.state = {
			            isPopUpActive: false,
			            isloadedFirst: true
  		};
         }


		return (
			<section>
			<ol role="menu">
				<ListLink link={this.props.link} linkName="Pay With Visa"/>
				<ListLink link={this.props.link} linkName="Partner with us"/>
				<ListLink link={this.props.link} linkName="Run your business"/>
				<li role="menuitem"><a  aria-label="More options on Visa Travel with us" id="Travelwithus" href="/index.html">Travel with us</a></li>
				<ListLink link={this.props.link} linkName="Visa Everywhere"/>
				<li role="menuitem" class="searchli">
				<div title="Menu Icon" aria-label="Menu Icon" onClick={this.mobileIconClicked.bind(this)} class="mobileIcon">
                       {icon} 
				</div>
				<span class="spanLine"><a onClick={this.props.link} class="headerLinks"  aria-label="Search on this site" aria-haspopup="true" href="#"><div class="searchCircle" title="Search Icon" aria-label="Search Icon"><div class="searchLine"></div></div></a></span>
				</li>
			</ol>
			{mobileDropdown}
			</section>
		);
	}
}

HeaderLinks.propTypes={
  link:React.PropTypes.func
};