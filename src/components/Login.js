import React, {useState, useEffect} from 'react'
// import queryString from 'query-string'
import APIService from './APIService';
import {useCookies} from 'react-cookie'
import {useHistory} from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(["mytoken"])
    // const [token, setToken] = useState({})

    let history = useHistory()

    useEffect(() => {
       
        if(token['mytoken']) {
            history.push('/')
        }
    }, [history, token])

    const loginBtn = () => {
        APIService.LoginUser({username, password})
        .then(resp => setToken('mytoken',resp.token))
        .catch(error => console.log(error))

    }
  

    // const loginUser = (body) => {

    //     return fetch('http://127.0.0.1:8000/auth/', {
    //       'method':'POST',
    //       headers: {
    //           'Content-Type':'application/json',
              
    //         }, 
    //         body:JSON.stringify(body)
  
    //     })
  
    //   }
   
    //     const loginBtn = () => {
    //         const fetchLoginData = async() => {
    //             try {
    //                 const loginData = await loginUser({username, password})
    //                 const resp = await loginData.json();
        
    //                 setToken("mytoken" ,resp.token)
                    
    //             }catch(e){
    //                 console.error(e)
    //             }
    //         }
    //         fetchLoginData()
        
    //     }
   



    return (
        <div>
            <h2>Please login</h2>
            <div className="mb-3 row">
                <label htmlFor="username" className="col-sm-2 col-form-label" placeholder="Please enter your username">Username</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputText" value = {username} onChange = {e => setUsername(e.target.value)}/>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="password" className="col-sm-2 col-form-label" placeholder="Please enter your password">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword"value = {password} onChange = {e => setPassword(e.target.value)}/>
                </div>
            </div>
            <button className = "btn btn-primary" onClick = {loginBtn}>Login</button>
        </div>

    )
}

export default Login