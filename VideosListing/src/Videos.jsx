import React, { useEffect, useState } from "react";
import getVideo from "./services/videoService";
import "./Videos.css";

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await getVideo();
      if (res) {
        setVideos(res.data.data.data);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="container">
      <h2 className="heading">🎬 Video Gallery</h2>

      <div className="grid">
        {videos.map((video, index) => {
          const item = video.items;

          return (
            <div key={index} className="card">
              
              {/* Thumbnail */}
              <img
                src={item.snippet.thumbnails.medium.url}
                alt={item.snippet.title}
                className="thumbnail"
              />

              {/* Content */}
              <div className="content">
                <h3 className="title">{item.snippet.title}</h3>

                <p className="channel">
                  {item.snippet.channelTitle}
                </p>

                <p className="meta">
                  👁 {item.statistics.viewCount} views
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Videos;