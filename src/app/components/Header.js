import React from "react";
import {Link} from "react-router";

export const Header = (props) => {
	return(
		<div className="navbar navbar-default">
			<div className="container">
				<div className="navbar-header">
					<ul className="nav navbar-nav">
						<li><Link to={"/home"} activeStyle={{color : "red"}}>Home</Link></li>
						{/*<li><Link to={"/user"} activeClassName={"active"} 
							activeStyle={{color : "red"}}>User</Link></li>*/}
						<li><Link to={"/user/10"} activeClassName={"active"} 
							activeStyle={{color : "red"}}>User</Link></li>
						
					</ul>					
				</div>
			</div>
		</div>
	);
}