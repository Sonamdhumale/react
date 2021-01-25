import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title , onAdd , showAdd}) => {
  
    return (
        <header className = 'header'>
            <h1 >{title}</h1>
            {/* <h1 style = {headerStyling}>{title}</h1> */}
            {/* <h1 style = {{color : 'red' , backgroundColor : 'black' }}>{title}</h1> */}
           <Button color = {showAdd ? 'red' : 'green'}  text = {showAdd ? 'Close' : 'Add'} onClick = {onAdd} />
        </header>
    )
}

//css in js
// const headerStyling = {
//     color : 'red' , 
//     backgroundColor : 'black' 
// }

Header.defaultProps = {
    title : 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
