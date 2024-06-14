import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/index.css";
import hljs from 'highlight.js';
import './styles/vs2015.css';

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

    if (isLoading) {
        return (
            <div className="view-container">
                <p>読み込み中です...</p>
            </div>
        )
    }

    return (
    <div className="view-container">
        <div className="workDetail">
            <h2>{API.title}</h2>
            <img src={API.work_img.url} alt="img" />
            <p dangerouslySetInnerHTML={{__html: API.about}} />
        </div>
    </div>
  );
};

export default WorkDetail;
