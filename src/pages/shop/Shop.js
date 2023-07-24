import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'
import './Shop.css'

function Shop() {

    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://peony-be.glitch.me/products');
            const data = Object.values(response.data);
            setProducts(data);
            console.log(products);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    useEffect( () => {
        fetchData();
    }, [])

    return (
        <div className='container-fluid mb-5'>
            <div className='row'>
                <div className='col-sm d-flex flex-wrap justify-content-evenly align-content-start'>
                    {products.map(product => (
                        <Link to={`/bakery/${product.id}`} key={product.id}>
                            <div className="card mt-4" style={{width: '18rem'}}>
                                <img src={product.image1} className="card-img-top" alt={product.name}></img>
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.price.toLocaleString('en-US')}đ</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Shop