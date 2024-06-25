import '../Css/therapy.css'
import therapy from '../Img/therapy.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Therapy = () => {
const [therapyText, setTherapyText] = useState()

    useEffect(() => {
        axios.get("https://us-central1-tarot-37626.cloudfunctions.net/api/content")
        .then(result => {
            setTherapyText(result.data.therapy)
        })
    }, [])
    return(
        <section className="therapy" id="therapy">
            <img className="header" src={therapy} alt="Terapia"/>
            <div className="desc">{therapyText}</div>
        </section>
    )
}

export default Therapy