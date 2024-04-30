import "../style/Styles.css";
import React, { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    let url = new URL("https://api.nytimes.com/svc/topstories/v2/home.json");
    const API = import.meta.env.VITE_NYT_KEY;

    url.searchParams.append("api-key", API);

    const fetchData = async () => {
      const data = await fetch(url);
      const json = await data.json();

      if (json.results) {
        setNews(json.results);
      }
      if (json.last_updated) {
        setDate(json.last_updated.split("T")[0]);
      }
    };
    fetchData();

    fetchData().catch(console.error);
  }, []);

  let News = null;

  if (news && date) {
    News = news.slice(0, 3).map((article, index) => {
      const title = article.title;
      const abstract = article.abstract;
      const link = article.url;



      return (
        <div key={index} className="article-container">
          <a href={link} className="article-title">
            {title}
          </a>
          <p className="article-abstract">{abstract}</p>
        </div>
      );
    });
  }

  return (
    <>
      <div className="box news">
        <h3>Top Stories</h3>
        <h4>{date}</h4>
        <div className="forecastBox">
          <div className="forecasts"> {News}</div>
        </div>
      </div>
    </>
  );
};

export default News;
