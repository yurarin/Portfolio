import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/index.css";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import hljs from 'highlight.js';
import './styles/vs2015.css';

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
    }

    useEffect(() => {
        getAPI();
    }, []);

    if (isLoading) {
        return (
            <div className="view-container">
                <p>読み込み中です...</p>
            </div>
        )
    }

    // dayjs init
    dayjs.extend(utc);
    dayjs.extend(timezone);


    if (API.live) {
        return (
            <div className="view-container-live">
                <div className="blogBody" dangerouslySetInnerHTML={{ __html: API.body }} />
                <h3 className="liveTitle">{API.title}</h3>
                <p className="blogDate liveDate">{dayjs.utc(API.created_at).tz("Asia/Tokyo").format("YYYY-MM-DD / HH:mm")}</p>
                <hr className="liveHr" />
                <p className="liveDetail bold">概要</p>
                <p className="blogHead liveDetail" dangerouslySetInnerHTML={{ __html: API.liveDetail }} />
            </div>
        )
    }

    return (
        <div className="view-container">
            <div className="blogView">
                <p className="blogDate">{dayjs.utc(API.created_at).tz("Asia/Tokyo").format("YYYY-MM-DD / HH:mm")}</p>
                <h2 className="blogTitle">{API.title}</h2>
                <p className="blogHead">{API.head}</p>
                <hr />
                <div className="blogBody" dangerouslySetInnerHTML={{ __html: API.body }} />
            </div>
        </div>
    );
};

export default Article;
