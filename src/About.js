import React from "react";
import { CircularProgressbar, buildStyles  } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
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
						<CircularProgressbar 
							value={props.userData.code_skill_html_css} 
							text={`${props.userData.code_skill_html_css}%`} 
							styles={buildStyles({
								pathColor: "#e44b23",
								textColor: '#e44b23'
							})}
						/>
					</div>
					<div className="skillItem">
						<p>JavaScript</p>
						<CircularProgressbar 
							value={props.userData.code_skill_js} 
							text={`${props.userData.code_skill_js}%`} 
							styles={buildStyles({
								pathColor: "#f1e05a",
								textColor: '#f1e05a'
							})}
						/>
					</div>
					<div className="skillItem">
						<p>React.js</p>
						<CircularProgressbar 
							value={props.userData.code_skill_react} 
							text={`${props.userData.code_skill_react}%`} 
							styles={buildStyles({
								pathColor: "#61DBFB",
								textColor: '#61DBFB'
							})}
						/>
					</div>
				</div>

				<h2>Other Skills</h2>
				<div className="skillBox">
					<div className="skillItem">
						<p>Node.js</p>
						<CircularProgressbar 
							value={props.userData.code_skill_nodejs} 
							text={`${props.userData.code_skill_nodejs}%`} 
							styles={buildStyles({
								pathColor: "#417E38",
								textColor: '#417E38'
							})}
						/>
					</div>
					<div className="skillItem">
						<p>Linux</p>
						<CircularProgressbar 
							value={props.userData.infra_skill_linux} 
							text={`${props.userData.infra_skill_linux}%`} 
							styles={buildStyles({
								pathColor: "#000000",
								textColor: '#000000'
							})}
						/>
					</div>
					<div className="skillItem">
						<p>Studio One</p>
						<CircularProgressbar 
							value={props.userData.music_skill_stuOne} 
							text={`${props.userData.music_skill_stuOne}%`} 
						/>
					</div>
				</div>
			</div>    
		</>
	);
};

export default About;
