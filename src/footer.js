import React from 'react'

const Footer = ({length}) => {
    const year = new Date();
  return (
    // <div>footer</div>
    <footer>{length} list {length ===0 ?"item":length ===1 ?"item":"items"} - Copyright &copy; {year.getFullYear()}</footer>
  )
}

export default Footer