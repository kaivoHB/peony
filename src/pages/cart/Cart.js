import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import { selectToken } from '../../pages/login/LoginSlice';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'wc-toast'

import { removeFromCart } from '../detail/DetailSlice';

import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
import './Cart.css'

function Cart() {

    const token = Cookies.get('token');
    const accessToken =useSelector(selectToken);
    const navigate = useNavigate();

    useEffect( () => {
        !token && navigate('/login');
    }, [accessToken, navigate]);

    const [formInput, setFormInput] = useState({ name: undefined, phone: undefined, content: undefined, address: undefined});

    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const [totalPrice, setTotalPrice] = useState(0);

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleInput = (e) => {
        setFormInput({...formInput, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        // Tính tổng giá trị của các mặt hàng trong cartItems
        const calculateTotalPrice = () => {
            let total = 0;
            cartItems.forEach(item => {
                total += parseInt(item.price);
            });
            setTotalPrice(total);
        };
        calculateTotalPrice();
    }, [cartItems]);

    const checkOut = (e, value) => {
        e.preventDefault()
        if (cartItems.length === 0) {
            toast.error('Bạn chưa chọn được sản phẩm nào. Xem tiếp sản phẩm nổi bật từ chúng tôi');
            setTimeout(function() {
                window.location.href = '/';
            }, 0);
        }else{
            if(value){
                toast.success('Thanh toán thành công');
                setTimeout(function() {
                    window.location.href = '/';
                }, 2500);
            }else{
                toast.error('Vui lòng nhập đầy đủ thông tin');
            }
        }
    }

    const handleShopping = (e) => {
        e.preventDefault()
        window.location.href = '/';
    }


    return (
        <div>
            <wc-toast></wc-toast>
            <Nav />

            <div className='container main-content mt-5'>
                {cartItems.length !== 0 ?
                    <div className='row'>
                        <div className='col-sm-6'>
                            <div className='cart_box1'>
                            {cartItems.map(item => (
                                <div className="card mb-3" key={item.id}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={item.image} className="img-fluid rounded-start item-img-cart" alt={item.name}></img>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <p className="card-text"><small className="text-muted">Size: {item.size} - Quantity: {item.quantity}</small></p>
                                                <p className="card-text">{item.price  ? item.price.toLocaleString('en-US') : ''}đ</p>
                                                <button className='btn btn-outline-danger' onClick={() => handleRemoveFromCart(item.id)}><i className="fa-regular fa-trash-can"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        
    
                        <div className='cart_box2'>
                            <div className='size d-flex align-items-center'>
                                <p className='flex-grow-1'>Tạm tính</p>
                                <p>{totalPrice  ? totalPrice.toLocaleString('en-US') : ''}đ</p>
                            </div>
    
                            <div className='diameter d-flex align-items-center'>
                                <p className='flex-grow-1'>Phí giao hàng</p>
                                <p>20,000đ</p>
                            </div>
    
                            <div className='quantity d-flex'>
                                <p className='flex-grow-1'>Tổng</p>
                                <p>{totalPrice ? (parseInt(totalPrice) +  20000).toLocaleString('en-US') : ''}đ</p>
                            </div>
    
                        </div>
                    </div>
    
                    <div className='col-sm-6'>
                        <form className='mb-5' onSubmit={ (e) => checkOut(e, formInput) }>
                            <div className="mb-3">
                                <label htmlFor="fullname" className="form-label">Họ và tên</label>
                                <input type="text" className="form-control" id="fullname" name='fullname' required value={formInput.name} onChange={handleInput}></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phoneNumber" className="form-label">Số điện thoại</label>
                                <input type="text" className="form-control" id="phoneNumber" name='phoneNumber' pattern="^(0\d{9})|\+(\d{10})$" required value={formInput.phone} onChange={handleInput}></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="bakeryContent" className="form-label">Nội dung trên bánh</label>
                                <input type="text" className="form-control" id="bakeryContent" name='bakeryContent' required value={formInput.content} onChange={handleInput}></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Địa chỉ giao hàng & ghi chú</label>
                                <textarea className="form-control" id="address" name='address' required value={formInput.address} onChange={handleInput}></textarea>
                            </div>
                            <button type="submit" className="cart-btn w-100">Thanh toán</button>
                        </form>
                    </div>
                </div>
            : 
            <div className='container d-flex justify-content-center align-items-center height'>
                <div className="card mb-5">
                    <div className="card-header fs-4">
                        Peony
                    </div>
                    <div className="card-body">
                        <h5 className="card-title fs-4">Bạn chưa chọn được sản phẩm nào sao?</h5>
                        <p className="card-text fs-5 mt-4 mb-5">Xem thêm vài sản phẩm nổi bật từ chúng tôi nhé!</p>
                        <button className="cart-btn w-100 fs-4 mb-sm-5" onClick={(e) => handleShopping(e)}>Shopping</button>
                    </div>
                </div>
            </div>
            
            }</div>
            <Footer/>
        </div>
    )
}

export default Cart