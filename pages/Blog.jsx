import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YouTubeVideo from '../components/YouTubeVideo';

const Blog = () => {
  const [videos, setVideos] = useState([]);
  const playlistId = 'UUsZlh5568rgQe0K8dwpyBow'; // Replace with the correct playlist ID
  const apiKey = 'AIzaSyDiFL3otY8DJjh1vBDrvXud0H1zMq_oSXo'; // Replace with your YouTube Data API key

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://youtube.googleapis.com/youtube/v3/playlistItems', {
          params: {
            part: 'snippet',
            playlistId: playlistId,
            maxResults: 9, // Adjust the number of videos to fetch
            key: apiKey,
          },
        });
        console.log('API response:', response.data); // Debugging: Log the API response

        if (response.data.items.length === 0) {
          console.warn('No videos found for this playlist.');
        }
        
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching YouTube videos', error.response?.data || error.message);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="container mx-auto pt-16 py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 ">Our Videos</h1>
      <div className="flex flex-wrap -mx-2">
        {videos.length > 0 ? (
          videos.map((video) => (
            <YouTubeVideo key={video.snippet.resourceId.videoId} videoId={video.snippet.resourceId.videoId} />
          ))
        ) : (
          <p className="text-xl">No videos found.</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
