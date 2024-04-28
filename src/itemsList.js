import React from 'react'



import { LineItems } from './lineItems';

export const ItemsList = ({items,handleCheck,handleDelete}) => {
  return (
    (<ul>
        {items.map((item, index) => (
        <LineItems item={item}
        handleCheck={handleCheck}
        handleDelete={handleDelete}/>
        ))}
    </ul>)
  )
}
