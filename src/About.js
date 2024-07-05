import React from "react";
import { FiGithub } from "react-icons/fi";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const About = (props) => {
	const date = new Date();
	const year = date.getFullYear();


	return (
		<>
			<div className="profileContainer">
				<div className="profileIcon">
					<img className="iconImg fadeInA" src={props.iconUrl} alt="img" />
				</div>
				<div className="profileDetail">
					<div className="detailText">
						<h1 className="userName fadeInB">{props.userName}</h1>
						<a 
							className="userLink" 
							href={props.url}
							target="_blank" 
							rel="noopener noreferrer"
						>
							<FiGithub className="fadeInB" />
						</a>
						<p className="bioDetail fadeInC" dangerouslySetInnerHTML={{__html: props.bioDetail}} />
					</div>
				</div>
			</div>
			<hr className="fadeInC" />
			<div className="skillContainer fadeInD">
				<h2 className="skillHeading">Frontend Skills</h2>
				<div className="skillBox">
					<div className="skillItem">
						<p>HTML & CSS</p>
						<Progress 
							percent={props.userData.code_skill_html_css}
							status="success"
							theme={{
								success: {
									symbol: props.userData.code_skill_html_css + '%',
									color: '#e44b23'
								}
							}}
						/>

					</div>
					<div className="skillItem">
						<p>JavaScript</p>
						<Progress 
							percent={props.userData.code_skill_js}
							status="success"
							theme={{
								success: {
									symbol: props.userData.code_skill_js + '%',
									color: '#f1e05a'
								}
							}}
						/>
					</div>
					<div className="skillItem">
						<p>React.js</p>
						<Progress 
							percent={props.userData.code_skill_react}
							status="success"
							theme={{
								success: {
									symbol: props.userData.code_skill_react + '%',
									color: '#61DBFB'
								}
							}}
						/>

					</div>
				</div>

				<h2 className="skillHeading">Backend Skills</h2>
				<div className="skillBox">
					<div className="skillItem">
						<p>Node.js</p>
						<Progress 
							percent={props.userData.code_skill_nodejs}
							status="success"
							theme={{
								success: {
									symbol: props.userData.code_skill_nodejs + '%',
									color: '#68a063'
								}
							}}
						/>

					</div>
					<div className="skillItem">
						<p>Linux</p>
						<Progress 
							percent={props.userData.infra_skill_linux}
							status="success"
							theme={{
								success: {
									symbol: props.userData.infra_skill_linux + '%',
									color: '#000000'
								}
							}}
						/>
					</div>
				</div>
			</div>
			<div className="copyright fadeInD">
				<p>&copy; {year} yurari</p>
			</div>	
		</>
	);
};

export default About;
