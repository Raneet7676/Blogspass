import React from 'react'
import Carousel from '../Carousel'
import Blocks from '../../UI/Blocks'

function MidSection() {
  return (
    <div>
        <div className="partition">
            <Carousel/>
            <div className="sections">
                <Blocks height={16} width={55}/>
                <Blocks height={16} width={22}/>
                <Blocks height={16} width={22}/>
            </div>
        </div>
    </div>
  )
}

export default MidSection