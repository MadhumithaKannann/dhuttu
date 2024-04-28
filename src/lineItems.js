import React from 'react'
import { FcFullTrash } from 'react-icons/fc';

export const LineItems = ({item,handleCheck,handleDelete}) => {
  return (
    <li className='item' key={item.id} >

    <input type="checkbox" onChange={() => handleCheck(item.id)} checked={item.checked} />
    <label style={(!item.checked) ? { textDecoration: "line-through" } : null} onDoubleClick={() => handleCheck(item.id)}>{item.name}</label>
    <FcFullTrash onClick={() => handleDelete(item.id)} role="button" tabIndex="0" />
</li>
  )
}
