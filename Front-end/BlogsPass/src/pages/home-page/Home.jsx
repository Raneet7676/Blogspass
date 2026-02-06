import React from 'react';
import HomeCarousel from '../../components/HomeCarousel';
import UploadSection from '../../components/for current upload/UploadSection';
import Post from '../../components/for current upload/Post';

function Home() {
  return (
    <div>
      Home
      <HomeCarousel/>
      <UploadSection/>
      <Post/>
    </div>
  );
}

export default Home;