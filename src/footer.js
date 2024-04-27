import React from 'react'

const Footer = () => {
    const year = new Date();
  return (
    // <div>footer</div>
    <footer>Copyright &copy; {year.getFullYear()}</footer>
  )
}

export default Footer