import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<button className="buttonGo btn btn-light ms-4">CL Go Home</button>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="buttonSurf btn btn-dark me-4">CL Surf Contact</button>
				</Link>
			</div>
		</nav>
	);
};


