import React from "react";
import { FiGithub } from "react-icons/fi";

const About = (props) => {
	return (
		<>
			<div className="profileContainer">
				<div className="profileIcon">
					<img className="iconImg" src={props.iconUrl} alt="img" />
				</div>
				<div className="profileDetail">
					<div className="detailText">
						<h1 className="userName">{props.userName}</h1>
						<a 
							className="userLink" 
							href={props.url}
							target="_blank" 
							rel="noopener noreferrer"
						>
							<FiGithub />
						</a>
						<p className="bioDetail" dangerouslySetInnerHTML={{__html: props.bioDetail}} />
					</div>
				</div>
			</div>
			<hr />
			<div className="skillContainer">
				<h2>Frontend Skills</h2>
				<div className="skillBox">
					<div className="skillItem">
						<p>HTML & CSS</p>
					</div>
					<div className="skillItem">
						<p>JavaScript</p>
					</div>
					<div className="skillItem">
						<p>React.js</p>
					</div>
				</div>

				<h2>Other Skills</h2>
				<div className="skillBox">
					<div className="skillItem">
						<p>Node.js</p>
					</div>
					<div className="skillItem">
						<p>Linux</p>
					</div>
					<div className="skillItem">
						<p>Studio One</p>
					</div>
				</div>
			</div>    
		</>
	);
};

export default About;
