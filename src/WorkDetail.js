import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/index.css";
import hljs from 'highlight.js';
import './styles/vs2015.css';
import Header from "./components/Header";

const WorkDetail = () => {
	const { id } = useParams();
	const [API, setAPI] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	const getAPI = async () => {
		const getFetch = await fetch(
			`https://yurari.microcms.io/api/v1/work/${id}`, 
			{headers: {"X-MICROCMS-API-KEY": "SoWrYdhI38HUcJMQVWqhITOl3bvtBC4XBmMg"}}
		);
		const getJson = await getFetch.json();
		setAPI(getJson);
		setIsLoading(false);
		setTimeout(() => {
			hljs.highlightAll();
		}, "10");
	}
	useEffect(() => {
		getAPI();
	},[]);

	const date = new Date();
	const year = date.getFullYear();

	if (isLoading) {
		return (
			<div className="App">
				<div className="loaderContainer">
					<div class="loader" />
				</div>
			</div>
		)
	}

	return (
		<>
			<Header url="/work" />
			<div className="App">
				<div className="workDetail">
					<h1 className="appHeading fadeInA">{API.title}</h1>
					<img className="appImage fadeInB" src={API.work_img.url} alt="img" />
					<p className="fadeInC" dangerouslySetInnerHTML={{__html: API.about}} />
				</div>
				<div className="copyright fadeInD">
					<p>&copy; {year} yurari</p>
				</div>
			</div>
		</>	
	);
};

export default WorkDetail;
