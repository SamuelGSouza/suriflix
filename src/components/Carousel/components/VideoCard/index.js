import React from 'react';
import { VideoCardContainer } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function VideoCard({ videoTitle, videoURL, categoryColor }) {
  return (
    <VideoCardContainer
      style={{ borderColor: categoryColor || 'red' }}

      title={videoTitle}
      src={`https://www.youtube.com/embed/${getYouTubeId(videoURL)}?autoplay`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export default VideoCard;
