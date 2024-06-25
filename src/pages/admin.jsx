import { useState, useEffect } from 'react'
import axios from 'axios'


const getToken = () =>{
    const token = localStorage.getItem('token');
    return token !== null ? JSON.parse(token) : null;
}

const Admin = () =>{
    const [token, setToken] = useState(getToken)

    const onLogin = (token) => {
        setToken(token)
        localStorage.setItem('token', JSON.stringify(token))
    }

    const onLogout = () =>{
        setToken(null)
        localStorage.removeItem('token')
    }


  

    const LoginForm = () =>{

        const [name, setName] = useState('')
        const [password, setPassword] = useState('')
        
    
    
        const submit = (e) =>  {
            e.preventDefault(); 
                axios.post("https://us-central1-tarot-37626.cloudfunctions.net/api/login",{ name: name, password: password })
                .then(result => {
                    if(result.data.token){
                        onLogin(result.data.token);
                    }
                })
                .catch(err =>console.log(err)
                )
            
        }
    
        return(
            <>
                <form>
                    <label>login</label>
                    <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
                    <label>hasło</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} />
                    <input type="submit" value='zaloguj' onClick={submit}/>
                </form>
            </>
        )
    }

    const ContentPanel = () =>{
        const [loading, setLoading] = useState(true)

        const [aboutme, setAboutme] = useState()
        const [therapy, setTherapy] = useState()
        const [price1, setPrice1] = useState()
        const [price2, setPrice2] = useState()
        const [price3, setPrice3] = useState()

        useEffect(() => {
            axios.get("https://us-central1-tarot-37626.cloudfunctions.net/api/content")
            .then(result => {
                console.log(result.data)
                setAboutme(result.data.aboutme)
                setTherapy(result.data.therapy)
                setPrice1(result.data.price1)
                setPrice2(result.data.price2)
                setPrice3(result.data.price3)
                setLoading(false)
            })
        }, [])

        

        const submit = (e) =>{
            e.preventDefault(); 
            axios.post("https://us-central1-tarot-37626.cloudfunctions.net/api/content",{ aboutme: aboutme, therapy: therapy, price1: price1, price2: price2, price3: price3 })
            .then(result => {
                if(result){
                    alert('dane zostały zmienione!')
                }
            })
        } 
        
        if(loading){
            return( <div>loading....</div>)
        }

        return(
        <form>
            <p>o mnie</p>
            <textarea value={aboutme} onChange={(e)=>{setAboutme(e.target.value)}} rows={4} cols={40}/>
            <p>terapia</p>
            <textarea value={therapy} onChange={(e)=>{setTherapy(e.target.value)}} rows={4} cols={40}/>
            <br/>
            <label>tarot 1h</label>
            <input type="number" value={price1} onChange={(e)=>{setPrice1(e.target.value)}}/>
            <br/>
            <label>tarot 30min</label>
            <input type="number" value={price2} onChange={(e)=>{setPrice2(e.target.value)}}/>
            <br />
            <label>3 pytania</label>
            <input type="number" value={price3} onChange={(e)=>{setPrice3(e.target.value)}}/>
            <br />
            <input type="button" value="zmień" onClick={submit}/>
        </form>

        )
    }  
    
    
    const AdminPanel = () =>{
        return(
            <>
            <h1>Admin Panel</h1>
            <button onClick={onLogout}>logout</button>
            <ContentPanel/>
            </>
        )
    }


    return(
        token ? <AdminPanel /> : <LoginForm/>
    )
}



export default Admin