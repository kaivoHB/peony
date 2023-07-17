import React from 'react'
import './Carousel.css'

function Carousel() {
    return (
        <div className='container-fluid'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://the350f.com/wp-content/uploads/2021/06/BO-COVER.jpg" className="d-block w-100" alt="Carousel"></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://the350f.com/wp-content/uploads/2021/05/1600x678.jpg" className="d-block w-100" alt="Carousel"></img>
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
    )
}

export default Carousel