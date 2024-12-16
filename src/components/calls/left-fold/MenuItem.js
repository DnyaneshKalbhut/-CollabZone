import React from 'react'
import './MenuItem.css'


function MenuItem({items, isActive}) {
  const classList= isActive?"item-active menu-items" : "menu-item" 
  return (
    <div className={classList}>
        <div className='item-icon'>{items.icon}</div>
      <label className='item-label'>{items.name}</label>
    </div>
  )
}

export default MenuItem;
