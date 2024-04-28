import React from 'react'

const Header = ({title}) => {
  return (

        <header> 
        <h1>
            {title}
        </h1>
    </header>
  )
}

Header.defaultProbs={
  title:"To do Lists"
}

export default Header