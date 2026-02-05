import React from 'react'
import PreviousSection from './PreviousSection';
import '../../pages/home-page/Home-page.css';


function UploadSection() {
  return (
    <div className='upload-section'>
        <div className="Current-upload">
            <img src={null} alt="top1" />
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="previous">
            <PreviousSection/>
            <PreviousSection/>
        </div>
    </div>
  )
}

export default UploadSection;