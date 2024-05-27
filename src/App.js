import { useState, useEffect } from "react";
import Header from "./components/Header";

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
      <Header />
      {/* userName={userData.name}
      url={userData.url}
      bio={userData.bio}
      iconUrl={userIconData.url} */}
    </div>
  );
}

export default App;
