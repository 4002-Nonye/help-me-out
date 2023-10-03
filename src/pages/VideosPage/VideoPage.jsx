import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import VideoStatus from '../../components/VideoStatus/VideoStatus';

function VideoPage() {
  return (
    <div>
      <NavBar />
      <VideoStatus />
      <Footer />
    </div>
  );
}

export default VideoPage;
