import React from "react";
import { FiAtSign, FiBriefcase, FiArchive } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = (props) => {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<div className="App">
			<div className="mainContainer fadeInA">
				<div className="displayImageBox">
					<img className="displayImage" src={props.iconUrl} alt="img" />
				</div>
				<div className="displayNameBox">
					<h1 className="userName">{props.userName}</h1>
					<p className="userDetail">{props.bio}</p>
				</div>
			</div>
			<div className="subContainer">
				<Link className="aboutItem fadeInB" to="/about">
					<div>
						<FiAtSign className="icon" />
						<h2 className="itemHeading">About Me</h2>
					</div>
				</Link>
				<Link className="workItem fadeInC" to="/work">
					<div>
						<FiBriefcase className="icon" />
						<h2 className="itemHeading">Work</h2>
					</div>
				</Link>
				<Link className="blogItem fadeInC" to="/blog">
				<div>
					<FiArchive className="icon"/>
					<h2 className="itemHeading">Blog</h2>
				</div>
				</Link>
			</div>
			<div className="copyright fadeInD">
				<p>&copy; {year} yurari</p>
			</div>
		</div>
	);
};

export default Home;
