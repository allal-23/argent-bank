import { useState } from 'react'
import '../index.css'
import { useDispatch, useSelector } from 'react-redux'
import { userLogIn } from '../redux/reducers/userReducer'
import { useNavigate } from "react-router-dom";


function Form() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')  

    const status = useSelector((state) => state.user.status)
    const error = useSelector((state) => state.user.error)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    if (status === 'success'){
        navigate('/user')
    }

    return (
        <form id="logIn">
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            {status === 'error' &&
                <div className="errorMessage" id="errorText">{ error }</div>
            }
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button 
                href="./user.html" 
                className="sign-in-button" 
                onClick={(e) => {
                    e.preventDefault()
                    dispatch(userLogIn({ email:email, password:password }))
                }}>
                Sign In
            </button>
        </ form>
    )
}

export default Form