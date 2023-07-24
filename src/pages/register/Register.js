import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'wc-toast'
import Nav from '../nav/Nav';
import Footer from '../footer/Footer'
import './Register.css'
function Register() {

    const [registerInfo, setRegisterInfo] = useState({ username: '', password: '', second_password: ''});
    const [registerResult, setRegisterResult] = useState(null);

    const handleInput = (e) => {
        setRegisterInfo({...registerInfo, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e, value) => {  
        e.preventDefault();
        if(value.username !== '' && value.password !== '' && value.second_password !== ''){
            if(value.password ===  value.second_password){
                try {
                    const result = await axios.post(`https://peony-be.glitch.me/register?username=${registerInfo.username}&password=${registerInfo.password}`, registerInfo);
                    setRegisterResult(result.data);
                    if(result.data === 'Đăng ký thành công!'){
                        toast.success(result.data)
                        setTimeout(function() {
                            window.location.href = '/login';
                        }, 0);
                    }else{
                        toast.error(result.data)
                    }
                    
                } catch (error) {
                        console.log('Error: ', error);
                        toast.error('Đăng ký không thành công');
                }
            }else{
                toast.error("Mật khẩu và mật khẩu xác minh chưa khớp");
            }
        }else{
            toast.error('Vui lòng nhập đầy đủ thông tin');
        }
    }

    return (
        <div>
            <wc-toast></wc-toast>
            <Nav />
            <div className='container'>
                <div className='row-sm'>
                    <div className='col-sm'>
                        <h1 className='mt-5 mb-5 text-center'>Đăng ký</h1>
                        <form className='ms-auto me-auto mb-5 register_mobile' onSubmit={ (e) => handleSubmit(e, registerInfo) }>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Tên tài khoản</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="username" 
                                    name="username"
                                    value={registerInfo.username}
                                    onChange={handleInput}></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Mật khẩu</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="password" 
                                    name='password'
                                    value={registerInfo.password}
                                    onChange={handleInput}></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Nhập lại mật khẩu</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="second_password"
                                    name='second_password'
                                    value={registerInfo.second_password}
                                    onChange={handleInput}></input>
                            </div>
                            <button className="cart-btn w-100 mt-2 toast-error">Đăng ký</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='fixed-bottom'>
                <Footer />
            </div>
        </div>
    )
}

export default Register