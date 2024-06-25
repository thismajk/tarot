import React, {useState} from "react"
import '../Css/topBar.css'
import { CiMenuFries } from "react-icons/ci";

const Logo = () => {
    return(
        <div className="logo">Wróżka Magdalena</div>
    )
}



const TopBar = () =>{
    const [slideNav, setSlideNav] = useState('nav_passive')

    const navControl = () => {
        if(slideNav === "nav_passive"){
            setSlideNav("nav_active")
        }
        else{
            setSlideNav("nav_passive")
        }
       
        
    }

    const scrollTo = (id) =>{
        const section = document.getElementById(id)
        section?.scrollIntoView({
            behavior: 'smooth'
        })
        navControl()
    }
    const Nav = () => {
        return(
            <nav className={slideNav}>
                <button className="nav-btn" onClick={ () => scrollTo('hero')}>Start</button>
                <button className="nav-btn" onClick={ () => scrollTo('aboutMe')} >O mnie</button>
                <button className="nav-btn" onClick={ () => scrollTo('therapy')} >Terapia</button>
                <button className="nav-btn" onClick={ () => scrollTo('priceList')} >Cennik</button>
                <button className="nav-btn" onClick={ () => scrollTo('contact')} >Kontakt</button>
            </nav>
    
        )
    }

    return(
        <header>
            <div className="nav-mobile">
                <Logo/>
                <button className="hamburger" onClick={navControl}>
                <CiMenuFries color="white" size="38px"/>

                </button>
            </div>
            
            <Nav/>
        </header>
    )
}

export default TopBar