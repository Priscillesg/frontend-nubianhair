import React, {useState, useEffect} from 'react'
import APIService from './APIService';
import {useCookies} from 'react-cookie'
import {useHistory} from 'react-router-dom';
import Register from './Register';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(["mytoken"])
    const [isLogin, setLogin] = useState(true)

    let history = useHistory()



    const loginBtn = () => {
        APIService.LoginUser({username, password})
        .then(resp => {
            setToken('mytoken',resp.token)
            // setLogin(true)
            history.push('/')
        })
        
        .catch(error => console.log(error))

    }

    const RegisterBtn = () => {
        APIService.RegisterUser({username, password})
        .then(() =>  loginBtn())
        .catch(error =>console.log(error))

    }

    return (
        <div>
           
            {isLogin ? <h1>Please Login </h1> : <h1>Please Register </h1>}
            
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

                {isLogin ?  <button onClick = {loginBtn}>Login</button>
            :  <button onClick = {RegisterBtn} >Register</button>
            }

            </div>
                {isLogin ? <h5>If You Don't Have Account, Please <button onClick = {() => setLogin(false)} >Register</button>Here</h5>
                
                :  <h5>If You Have Account, Please <button onClick = {() => setLogin(true)} >Login</button>Here</h5>
                }

            </div>

    )
}

export default Login