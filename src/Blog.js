import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { Link } from "react-router-dom";
import { FiArchive } from "react-icons/fi";

const Blog = (props) => {
	const [API, setAPI] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	
	const getHeaderState = props.getHeaderState;

	const getAPI = async () => {
		const getFetch = await fetch(
			"https://yurari.microcms.io/api/v1/blog", 
			{headers: {"X-MICROCMS-API-KEY": "SoWrYdhI38HUcJMQVWqhITOl3bvtBC4XBmMg"}}
		);
		const getJson = await getFetch.json();
		setAPI(getJson.contents);
		setIsLoading(false);
	};

	// dayjs init
	dayjs.locale("en");
	dayjs.extend(utc);
	dayjs.extend(timezone);

	useEffect(() => {
		getAPI();
		getHeaderState(true);
	}, []);

	const date = new Date();
	const year = date.getFullYear();

	if (isLoading) {
		return (
			<div className="loaderContainer">
				<div className="loader" /> 
			</div>
		)
	};

	const article = API.map((article) => {
		return (
			<div key={article.id} className="articleBox fadeInD">
				<Link  className="link" to={article.id}>
					<h3 className="blogTitle">{article.title}</h3>
					<p className="date">{dayjs.utc(article.created_at).tz("Asia/Tokyo").format("MMM DD, YYYY")}</p>
				</Link>
			</div>
		)
	});

	return (
		<>
			<FiArchive className="icon fadeInB" />
			<h1 className="blogHeading fadeInB">Blog</h1>
			{article}
			<div className="copyright fadeInD">
				<p>&copy; {year} yurari</p>
			</div>	
		</>
	);
};

export default Blog;
