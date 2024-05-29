import { useState, useEffect } from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Home, About, Work, Blog } from "./pagesIndex";

function App() {
  const [userData, setUserData] = useState("");
  const [userIconData, setIconData] = useState("");

  const getAPI = async () => {
    const fetchData = await fetch("https://yurari.microcms.io/api/v1/profile", {
      headers: { "X-MICROCMS-API-KEY": "SoWrYdhI38HUcJMQVWqhITOl3bvtBC4XBmMg" },
    });
    const fetchDataJSON = await fetchData.json();
    // console.log(fetchDataJSON);
    setUserData(fetchDataJSON);
    setIconData(fetchDataJSON.icon);
  };

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <div className="App">
      <Header />
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
              bio={userData.bio} 
              iconUrl={userIconData.url} 
            />
          }
        />
        <Route 
          path="/work" 
          element={
            <Work />
          } 
        />
        <Route 
          path="/blog" 
          element={
            <Blog />
          } 
        />
      </Routes>
      {/* userName={userData.name}
      url={userData.url}
      bio={userData.bio}
      iconUrl={userIconData.url} */}
    </div>
  );
}

export default App;
