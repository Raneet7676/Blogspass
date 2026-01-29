import React from 'react'
import SlotsForProverb from '../../UI/SlotsForProverb';
import '../../pages/preview-page/Preview-Page.css';

function ProverbSection() {
  return (
    <div className='divisions'>
        <SlotsForProverb/>
        <SlotsForProverb/>
        <SlotsForProverb/>
        <SlotsForProverb/>
    </div>
  )
}

export default ProverbSection