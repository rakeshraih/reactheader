import React from "react";
import Header from  "desktop/Header";
import SubLinks from "desktop/SubLinks";


export default class Layout extends React.Component {

    constructor(props) {
  		super(props);
  		let width=window.innerWidth;  
  		this.state = {
    		classnames: "subcomponent",
    		device: width < 700 ? "small" : "large",
    		classNamesArrow:" arrow-up "
  		};
	}

    subLinkChnaged(e){
        e.stopPropagation();
		const element = e.currentTarget;
		const subcomponent = document.getElementById('subcomponentId');
        const arrow=document.getElementById("arrow-up");
        let classNamesArrow="";
        let classnames="";
        //subcomponent.firstElementChild.placeholder=this.props.linkName;
        ///subcomponent.style.visibility = 'visible';
        if("true" == element.getAttribute("aria-expanded")){

		   subcomponent.setAttribute('aria-hidden', 'true');
		    element.setAttribute('aria-expanded', 'false');
            classnames=" subcomponent slideOutLoad ";
             //arrow.style.visibility = 'hidden';
             classNamesArrow=" arrow-up-hide ";
        }else{

        	const links = document.querySelectorAll(".headerLinks");
        	let that=this;
			[].forEach.call(links, function(element) {
			    if("true" == element.getAttribute("aria-expanded")){
                    subcomponent.setAttribute('aria-hidden', 'true');
		            element.setAttribute('aria-expanded', 'false');
                    classnames=" subcomponent slideOutLoad ";
                    classNamesArrow=" arrow-up-hide ";

	                that.setState({
	    		       classnames: classnames,
	    		       classNamesArrow: classNamesArrow
	  		        });
			    }

			});

            subcomponent.setAttribute('aria-hidden', 'false');
		    element.setAttribute('aria-expanded', 'true');
            classnames="slideInLoad subcomponent "+element.id;
             //arrow.style.visibility = 'visible';
             classNamesArrow=" arrow-up-show ";



        }

		const lioffset=element.offsetLeft;
		const arrowoffset=arrow.offsetLeft;
		//arrow.style.marginLeft = Math.floor(element.getBoundingClientRect().left)+(element.parentElement.offsetWidth/2)-10+"px";
        
        classNamesArrow="arrow-up "+classNamesArrow;
  		this.setState({
    		classnames: classnames,
    		classNamesArrow: classNamesArrow,
    		 element: element
  		});
    }

	handleClickOutside(e) {
        //const subcomponent = document.getElementById('subcomponentId');
        const arrow=document.getElementById("arrow-up");
        //subcomponent.style.visibility = 'hidden';
        //arrow.style.visibility = 'hidden';
        this.setState({
    		classnames: " subcomponent ",
    		 classNamesArrow:" arrow-up ",

  		});

	}

	updateDimensions(e) {
          
        this.setState({
    		device: window.innerWidth  < 700 ? "small" : "large"
  		});

  		const arrow=document.getElementById("arrow-up");
        const subcomponent = document.getElementById('subcomponentId');


       if(this.state.device==="small"){
         arrow.style.visibility = 'hidden';
         subcomponent.style.visibility = 'hidden';

       }else{
       	 arrow.style.visibility = 'visible';
       	 subcomponent.style.visibility = 'visible';

       }

	}

   componentDidMount() {
       document.addEventListener('click', this.handleClickOutside.bind(this), true);
       window.addEventListener("resize", this.updateDimensions.bind(this), true);

         const arrow=document.getElementById("arrow-up");
          const subcomponent = document.getElementById('subcomponentId');

       if(this.state.device==="small"){
         arrow.style.visibility = 'hidden';
         subcomponent.style.visibility = 'hidden';

       }else{
       	 arrow.style.visibility = 'visible';
       	 subcomponent.style.visibility = 'visible';

       }
 

   }

	render() {

		let element=this.state.element;

        if(element != null){
        	const arrow=document.getElementById("arrow-up");
        	const arrowoffset=arrow.offsetLeft;

            if(arrowoffset == 0){
				const lioffset=element.offsetLeft;
				arrow.style.marginLeft = Math.floor(element.getBoundingClientRect().left)+(element.parentElement.offsetWidth/2)-10+"px";
           }else{

           	     let marginleftvar=Math.floor(element.getBoundingClientRect().left)+(element.parentElement.offsetWidth/2)-10+"px";
                 var arrowStyle = {
				  marginLeft: marginleftvar+"",
				  transition: "transform 1s ease-in",
				  WebkitTransition : "all 1s ease"
				};

           }  
        }

		return (
			<div class="lights-container">
				<Header link={this.subLinkChnaged.bind(this)}/>
				<div class="header-highlight">
                <div id="arrow-up" style={arrowStyle} className={this.state.classNamesArrow}></div>
				</div>
                <SubLinks classnames={this.state.classnames}/>
			</div>
		);
	}
}