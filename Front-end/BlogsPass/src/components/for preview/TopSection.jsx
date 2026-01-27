import React from 'react'
import Logo from '../../UI/Logo';
import arrow from '../../assets/PNG section/arrow.svg';
import '../../UI/CSS files/TopSection.css';


function TopSection() {
  return (
    <>
        <div className="frame" style={{display : "flex"}}>
                <Logo />
                <pre>
                    we don’t just post blogs <br/>
                    we re-live memories,.... <br/>
                    share your experience, <br/>
                        <u>make them feel again</u>..!!
                </pre>
        </div>
        <button>
            EXPLORE MORE  <img src={arrow} alt='#arrow-to-right' />
        </button>
    </>
  )
}

export default TopSection