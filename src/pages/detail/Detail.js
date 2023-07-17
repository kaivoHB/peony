import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'wc-toast';
import { addToCart } from './DetailSlice';
import Nav from '../nav/Nav'
import Carousel from '../carousel/Carousel'
import Footer from '../footer/Footer'
import './Detail.css'

function Detail() {

    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const {id} = useParams();
    const [products, setProducts] = useState([]); // fecth dữ liệu
    const [sizeButton, setSizeButton] = useState(16); // chức năng chọn size
    const [quantity, setQuantity] = useState(1); // chức năng chọn số lượng

    const [sizeNoti, setSizeNoti] = useState(''); // Thông báo size
    const [price, setPrice] = useState(null); // Thông báo giá

    const [activeStyle, setActiveStyle] = useState(null); // set active style cho button size

    // const [cartItems, setCartItems] = useState([]); // chức năng giỏ hàng

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:5555/products/${id}`);
            setProducts(response.data);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    useEffect(() => {
        if (activeStyle === true) {
            setSizeNoti('Đường kính 16cm cao 6.5cm, dành cho 4-6 người sử dụng');
            const gia = products.price;
            const size = 16;
            setPrice(gia);
            setSizeButton(size);
        } else if (activeStyle === false) {
            setSizeNoti('Đường kính 20cm cao 6.5cm, dành cho 10-12 người sử dụng');
            const gia = products.price + 200000;
            const size = 20;
            setPrice(gia);
            setSizeButton(size);
        }
    }, [activeStyle, products.price]);

    const handleButtonClick = (value) => {
        setActiveStyle(value);
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };
    
    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = (e) => {
        e.preventDefault();
        const newItem = {
            id: Math.floor(Math.random() * 1000000),
            name: products.name,
            image: products.image1,
            price: price * quantity || products.price * quantity,
            quantity: quantity,
            size: sizeButton
        };
        dispatch(addToCart(newItem));
        toast.success('Đã thêm sản phẩm vào giỏ hàng');
        console.log(cartItems);
    };

    useEffect( () => {
        fetchData();
    }, []);

    useEffect(() => {
        // console.log("Giỏ hàng:", cartItems);
    }, [cartItems]);

    return (
        <div className='bg-light'>
            <wc-toast></wc-toast>
            <Nav />
            <div className='container mt-3 mb-5'>
            <div className='row ps-0 pe-0'>
                <div className='col-sm-6 pe-sm-0'>
                    <div id="carouselExampleControls" className="carousel slide w-75 mobile_carousel_detail" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={products.image1} className="d-block w-100" alt={products.name}></img>
                            </div>
                            <div className="carousel-item">
                            <img src={products.image2} className="d-block w-100" alt={products.name}></img>
                            </div>
                            <div className="carousel-item">
                            <img src={products.image3} className="d-block w-100" alt={products.name}></img>
                            </div>
                            <div className="carousel-item">
                            <img src={products.image4} className="d-block w-100" alt={products.name}></img>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            
                <div className='col-sm-6 pe-sm-0'>
                    <div className='detail_box1'>
                        <h3>{products.name}</h3>
                        <p>Gía từ: <span>{products.price? products.price.toLocaleString('en-US') : (products.price && products.price.toLocaleString('en-US'))}đ</span></p>
                        <p className='fs-5 lh-lg'>{products.descripton}</p>
                    </div>

                    <div className='detail_box2'>
                        <div className='size d-flex align-items-center'>
                            <p className='flex-grow-1'>Size</p>
                            <button id="trueButton" className={activeStyle === true ? 'btn btn-outline-secondary me-2 active' : 'btn btn-outline-secondary me-2'} onClick={() => handleButtonClick(true)}>16cm</button>
                            <button id="falseButton" className={activeStyle === false ? 'btn btn-outline-secondary active' : 'btn btn-outline-secondary'} onClick={() => handleButtonClick(false)}>20cm</button>
                        </div>

                        <div className='diameter'>
                            <p>{sizeNoti? sizeNoti : 'Đường kính 16cm cao 6.5cm, dành cho 4-6 người sử dụng'}</p>
                            <p>{price ? price.toLocaleString('en-US') : (products.price && products.price.toLocaleString('en-US'))}đ</p>
                        </div>

                        <div className='quantity d-flex'>
                            <p className='flex-grow-1'>Số lượng</p>
                            <div>
                                <i className="fa-solid fa-caret-left me-3" onClick={decreaseQuantity}></i>
                                <span>{quantity}</span>
                                <i className="fa-solid fa-caret-right ms-3" onClick={increaseQuantity}></i>
                            </div>
                        </div>

                        <button className='cart-btn toast-success' onClick={(e) => handleAddToCart(e)}>Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Detail