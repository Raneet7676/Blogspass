import React from 'react';
import '../pages/preview-page/Preview-Page.css';

const Styles = {
    // styles is required based on the props will be passed
}

function Blocks({height,width}) {
  return (
    <div className='block' style={{
      backgroundColor:'black',
      height: `${height}vh`, width: `${width}vh`
    }}>
        <div className="transparency-block"></div>
        <div>
            <img src={null} alt="#image" />
            <p><b></b></p>
        </div>
    </div>
  )
}

export default Blocks