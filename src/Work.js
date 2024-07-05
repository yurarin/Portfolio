import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiBriefcase } from "react-icons/fi";

const Work = (props) => {
	// const workContents = props.works.contents;

	const date = new Date();
	const year = date.getFullYear();
	
	const getHeaderState = props.getHeaderState;

	useEffect(()=>{
		getHeaderState(true);
	},[]);

	const works = props.works.contents;
	const worksItem = works.map((item) => {
		return (
			<div key={item.id} className="work">
				<Link className="link" to={item.id}>
					<img className="workImg" src={item.work_img.url} alt="img" />
					<h3 className="workTitle">{item.title}</h3>
				</Link>
			</div>
		)
	});

	return (
		<>
			<FiBriefcase className="icon fadeInB" />
			<h1 className="workHeading fadeInB">Work</h1>
			<div className="workContainer fadeInC">
				{worksItem}
			</div>
			<div className="copyright fadeInD">
				<p>&copy; {year} yurari</p>
			</div>	
		</>
	);
};

export default Work;
