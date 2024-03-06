import React, { useState } from 'react';

const PreparationMaterial = () => {
  const [videoSource, setVideoSource] = useState('video1.mp4'); // Default video source
  const videos = [
    { id: 1, title: 'Video 1', src: 'https://www.youtube.com/watch?v=5oH9Nr3bKfw' },
    { id: 2, title: 'Video 2', src: 'video2.mp4' },
    // Add more videos as needed
  ];

  // Function to handle video source change
  const handleVideoChange = (source) => {
    setVideoSource(source);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 flex">
      {/* Video Player Section */}
      <div className="flex-grow">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Preparation Material</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="aspect-w-16 aspect-h-9">
            {
              videoSource.includes("youtube.com") ? (
                <iframe
                  className="w-full h-full"
                  src={videoSource.replace("watch?v=", "embed/")}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              ) : (
                <video controls className="w-full h-full">
                  <source src={videoSource} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )
            }
          </div>
        </div>
      </div>
      {/* Video Thumbnails Section */}
      <div className="w-80 ml-4">
        <h3 className="text-xl font-semibold mb-4">Video List</h3>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleVideoChange(video.src)}
            >
              <div className="flex-shrink-0">
                <img src={`thumbnails/${video.src}.jpg`} alt={video.title} className="h-20 w-36 object-cover" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreparationMaterial;