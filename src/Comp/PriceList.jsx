import '../Css/priceList.css'
import pricelist from '../Img/pricelist.svg'
import libra from '../Img/libra.svg'
import axios from 'axios'
import { useState, useEffect } from 'react'

const PriceList = () => {

    const [price1, setPrice1] = useState()
    const [price2, setPrice2] = useState()
    const [price3, setPrice3] = useState()
    useEffect(() => {
        axios.get("https://us-central1-tarot-37626.cloudfunctions.net/api/content")
        .then(result => {
            setPrice1(result.data.price1)
            setPrice2(result.data.price2)
            setPrice3(result.data.price3)
        })
    }, [])
    return(
        <section className="price-list" id="priceList">
            <img className="header" src={pricelist} alt="Cennik"/>
            <div className="desc">

                <img className='libra' src={libra} alt="waga"/>

                <table>
                    <tbody>
                        <tr>
                            <td>Sesja tarota 1 godzina</td>
                            <td>{price1}</td>
                        </tr>
                        <tr>
                            <td>Sesja tarota 30 minut</td>
                            <td>{price2}</td>
                        </tr>
                        <tr>
                            <td>3 pytania</td>
                            <td>{price3}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default PriceList