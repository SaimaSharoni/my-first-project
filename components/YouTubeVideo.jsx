import React from 'react';

const YouTubeVideo = ({ videoId }) => {
  return (
    <div className="mb-4 w-full md:w-1/2 lg:w-1/3 px-2">
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
