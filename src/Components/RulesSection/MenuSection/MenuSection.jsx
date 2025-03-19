import React from 'react'
import './MenuSectionStyle.css'

const MenuSection = ({content}) => {
  return (
    <div className='content'>
        <div className='small-square'></div>
        <h6>{content}</h6>
    </div>
  )
}

export default MenuSection