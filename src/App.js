import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState("");
  const [userIconData, setIconData] = useState("");

  const getAPI = async () => {
    const fetchData = await fetch("https://yurari.microcms.io/api/v1/profile", {
      headers: { "X-MICROCMS-API-KEY": "SoWrYdhI38HUcJMQVWqhITOl3bvtBC4XBmMg" },
    });
    const fetchDataJSON = await fetchData.json();
    console.log(fetchDataJSON);
    setUserData(fetchDataJSON);
    setIconData(fetchDataJSON.icon);
  };

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <div className="App">
      {userData.name}
      {userData.url}
      {userData.bio}
      {userIconData.url}
    </div>
  );
}

export default App;
