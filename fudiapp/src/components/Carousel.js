import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.postimg.cc/JzfXXJ6f/Burger_Wallpaper.webp" className="d-block w-100" alt="..." style={{ filter : "brightness(30%)" }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Best Burgers</h5>
                            <p>Stuffed and heavily loaded, yet soft on bite</p>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.postimg.cc/mr7HyDJX/Pizza_Wallpaper.webp" className="d-block w-100" alt="..." style={{ filter : "brightness(30%)" }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Best Pizzas</h5>
                            <p>Greater cheese pulls and crispy texture, fitter base and loaded with veggies </p>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.postimg.cc/MZnj9dC7/Sandwich-Wallpaper.webp" className="d-block w-100" alt="..." style={{ filter : "brightness(30%)" }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Best Sandwichs</h5>
                            <p>Healthy and quick stomach filler with taste like nowhere</p>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
