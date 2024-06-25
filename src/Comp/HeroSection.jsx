import '../Css/hero.css'
import tarot from '../Img/tarot.svg'
import subtitle from '../Img/subtitle.svg'
import person from '../Img/person.jpeg'

const Hero = () =>{
    return(
        <section className="hero" id="hero">
            <div className="hero-wrapper">
                <div className="hero-element">
                    <div className="hero-content">
                        <img className='title' src={tarot} alt="tarot"/>
                        <img className='subtitle' src={subtitle} alt="terapia słowem"/>
                    </div>
                </div>
                <div className="hero-element">
                    <img className='person' src={person} alt="obraz kobiety"/>
                </div>
            </div>
        </section>
    )
}

export default Hero;