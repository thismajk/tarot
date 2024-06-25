import '../Css/aboutMe.css'
import about from '../Img/aboutme.svg'
import axios from 'axios'
import { useState, useEffect } from 'react'

const AboutMe = () => {
    const [aboutme, setAboutme] = useState()

    useEffect(() => {
        axios.get("https://us-central1-tarot-37626.cloudfunctions.net/api/content")
        .then(result => {
            setAboutme(result.data.aboutme)
        })
    }, [])
    return(
        <section className="about-me" id="aboutMe">
            <img className="header" src={about} alt="o mnie"/>
            <div className="desc">{aboutme}</div>
        </section>
    )
}

export default AboutMe