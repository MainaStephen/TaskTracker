import React from 'react'
import Button from './Button'

const Header = ({onAdd,ShowAdd}) => {
    
  return (
    <header className='header'>
      <h1>task tracker</h1>
      <Button color={ShowAdd ? "red" : "green"}text={ShowAdd ? "Close" : "Add"} onClick={onAdd}/>
    </header>
  )
}

export default Header
