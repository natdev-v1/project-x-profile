import React from 'react'

interface Props {

}

const Main : React.FC = (props) => {
    return (
        <div>
         {props.children}  
        </div>
    )
}

export default Main

