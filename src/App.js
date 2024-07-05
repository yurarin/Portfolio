import { useState, useEffect } from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Home, About, Work, Blog, WorkDetail, Article } from "./pagesIndex";

function App() {
	const [userData, setUserData] = useState("");
	const [userIconData, setIconData] = useState("");
	const [userWorkData, setWorkData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [headerState, setHeaderState] = useState(null);
	
	const getHeaderState = (state) => {
		setHeaderState(state);
	};

	const getAPI = async () => {
		const fetchProfileData = await fetch("https://yurari.microcms.io/api/v1/profile", {
			headers: { "X-MICROCMS-API-KEY": "SoWrYdhI38HUcJMQVWqhITOl3bvtBC4XBmMg" },
		});
		const fetchWorkData = await fetch("https://yurari.microcms.io/api/v1/work", {
			headers: { "X-MICROCMS-API-KEY": "SoWrYdhI38HUcJMQVWqhITOl3bvtBC4XBmMg" },
		});
		const fetchProfileDataJSON = await fetchProfileData.json();
		const fetchWorkDataJSON = await fetchWorkData.json();
		setUserData(fetchProfileDataJSON);
		setIconData(fetchProfileDataJSON.icon);
		setWorkData(fetchWorkDataJSON);
		setIsLoading(false);
	};

	useEffect(() => {
		getAPI();
	},[]);

	if (isLoading) {
		return
	}
	
	return (
		<>
			{headerState ? <Header getHeaderState={getHeaderState} /> : null }
			<div className="App">
				<Routes>
					<Route
						path="/"
						element={
							<Home 
								userName={userData.name} 
								iconUrl={userIconData.url} 
								bio={userData.bio} 
							/>
						}
					/>
					<Route
						path="/about"
						element={
							<About
								userName={userData.name} 
								url={userData.url} 
								bioDetail={userData.bio_detail} 
								iconUrl={userIconData.url} 
								userData={userData}
								getHeaderState={getHeaderState}
							/>
						}
					/>
					<Route 
						path="/work" 
						element={
							<Work 
								works={userWorkData}
								getHeaderState={getHeaderState}
							/>
						} 
					/>
					<Route 
						path="/work/:id" 
						element={
							<WorkDetail />
						} 
					/>
					<Route 
						path="/blog" 
						element={
							<Blog 
								getHeaderState={getHeaderState} 
							/>
						} 
					/>
					<Route 
						path="/blog/:id" 
						element={
							<Article />
						} 
					/>
				</Routes>
			</div>
		</>
	);
}

export default App;
