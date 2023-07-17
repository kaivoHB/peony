import React, { useEffect, useState } from 'react'
import { toast } from 'wc-toast';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'js-cookie';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer'
import './Login.css'
import { useDispatch, useSelector } from 'react-redux';
import { saveToken, selectLoginSuccess } from './LoginSlice';

// axios.defaults.baseURL = 'http://localhost:5566';

function Login() {

    const [userInputInfor, setUserInpitInfor] = useState({ username: '', password: ''});

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginSuccess =  useSelector(selectLoginSuccess);
    const [loginResult, setLoginResult] = useState(null);

    const handleInput = (e) => {
        setUserInpitInfor({...userInputInfor, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e, value) => {  
        e.preventDefault();
        try {
            const result = await axios.post('http://localhost:5566/login', userInputInfor);
            setLoginResult(result.data);
            dispatch(saveToken(result.data));
            Cookies.set('token', result.data);
        } catch (error) {
            console.log('Error: ', error);
            setLoginResult(error);
            toast.error('Đăng nhập không thành công');
        }
    }

    const handleRegister = () => {
        window.location.href = '/register';
    }
    useEffect(() => {
        loginSuccess && navigate('/')
    }, [loginSuccess])

    return (
        <div>
            <Nav />

            <div className='container main-content'>
                <div className='row'>
                    <div className='col-sm'>
                        <h1 className='mt-5 mb-5 text-center'>Đăng nhập</h1>
                        <form className='ms-auto me-auto mb-5 login_mobile' onSubmit={ (e) => handleSubmit(e, userInputInfor) }>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Tên tài khoản</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="username" 
                                    name="username"
                                    value={userInputInfor.username}
                                    onChange={handleInput}></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Mật khẩu</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="password" 
                                    name='password'
                                    value={userInputInfor.password}
                                    onChange={handleInput}></input>
                            </div>
                            <button type="submit" className="cart-btn w-100 mt-2 toast-error">Đăng nhập</button>
                        </form>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-sm'>
                        <div className='login-box w-25 ms-auto me-auto'>
                            <label htmlFor="password" className="form-label">Đăng ký nếu bạn chưa có tài khoản?</label>
                            <button type="submit" className="login-btn-register w-100 mt-2" onClick={handleRegister}>Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>

            
                <Footer />
            
        </div>
    )
}

export default Login