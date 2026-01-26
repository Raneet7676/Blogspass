import React from 'react'

function SlotsForProverb({person , proverb}) {
  return (
    <div className="slot">
        <img src={person} alt="#person-img" />
        <pre>{proverb}</pre>
    </div>
  )
}

export default SlotsForProverb