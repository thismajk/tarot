import '../Css/contact.css'
import contact from '../Img/contact.svg'
import telephone from '../Img/telephone.svg'
const PriceList = () => {
    return(
        <section className="contact" id="contact">
            <img className="header" src={contact} alt="Kontakt"/>
            <div className="desc">

                <div className="telephone-card">

                    <div>Zapraszam do kontaktu tel:</div>
                    <a href="tel:+54666206918">+48 666 206 918</a>

                </div>
                <img className="telephone" src={telephone} alt="Telefon"/>

            </div>
        </section>
    )
}

export default PriceList