import React from 'react'
import Logo from '../../UI/Logo'

const sty = {
    display : "flex"
};

function TopSection() {
  return (
    <>
        <div className="frame" style={sty.display}>
            <div>
                <Logo/>
            </div>
            <div className="text">
                <pre>
                    we don’t just post blogs <br/>
                    we relive memories,.... <br/>
                    share your experience, <br/>
                        <u>make them feel them</u>..!!
                </pre>
            </div>
        </div>

        <button>
            EXPLORE MORE  <img src="" alt='#arrow-to-right' />
        </button>
    </>
  )
}

export default TopSection