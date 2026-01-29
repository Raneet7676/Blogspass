import React from 'react';
import '../pages/preview-page/Preview-Page.css'

function SlotsForProverb({person}) {
  return (
    <div className="slot">
        <img src={person} alt="#person-img" />
        <pre>
          ansdjajdfajbfjwaf <br /> 
          janfnawndnakndkawnk
        </pre>
    </div>
  )
}

export default SlotsForProverb