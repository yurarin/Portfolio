import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/index.css";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import hljs from 'highlight.js';
import './styles/vs2015.css';
import Header from "./components/Header"; 

const Article = () => {
	const { id } = useParams();
	const [API, setAPI] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const getAPI = async () => {
		const getFetch = await fetch(
			`https://yurari.microcms.io/api/v1/blog/${id}`,
			{ headers: { "X-MICROCMS-API-KEY": "SoWrYdhI38HUcJMQVWqhITOl3bvtBC4XBmMg" } }
		);
		const getJson = await getFetch.json();
		setAPI(getJson);
		setIsLoading(false);
		setTimeout(() => {
			hljs.highlightAll();
		}, "10");
	};

	useEffect(() => {
		getAPI();
	}, []);

	if (isLoading) {
		return (
			<div className="App">
				<div className="loaderContainer">
					<div className="loader" />
				</div>
			</div>
		)
	};

	// dayjs init
	dayjs.locale("en");
	dayjs.extend(utc);
	dayjs.extend(timezone);

	const date = new Date();
	const year = date.getFullYear();

	return (
		<>
			<Header url="/blog" />
			<div className="App">
				<div className="blogView">
					<h1 className="blogTitleHeading fadeInA">{API.title}</h1>
					<p className="blogDate fadeInB">{dayjs.utc(API.created_at).tz("Asia/Tokyo").format("MMM DD, YYYY")}</p>
					<hr className="fadeInC" />
					<div className="blogBody fadeInD" dangerouslySetInnerHTML={{ __html: API.body }} />
				</div>
				<div className="copyright fadeInD">
					<p>&copy; {year} yurari</p>
				</div>	
			</div>
		</>
	);
};

export default Article;
