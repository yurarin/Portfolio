import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const Header = (props) => {
	const getHeaderState = props.getHeaderState;
	const linkOnClick = () => {
		getHeaderState(false);
	};
	return (
		<React.Fragment>
			<header>
				<div className="sticky">
					<Link to="/" onClick={linkOnClick}><IoArrowBackOutline /></Link>
				</div>
			</header>
		</React.Fragment>
	);
};

export default Header;
