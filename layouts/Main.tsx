import React from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

interface Props {

}

const Main : React.FC = (props) => {
    return (
        <div className="main-container">
        <Navbar/>
         {props.children}  
         <Footer/>
        </div>
    )
}

export default Main

