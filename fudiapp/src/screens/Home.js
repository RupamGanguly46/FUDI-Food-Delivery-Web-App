import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card';

export default function Home() {

    const [foodCatArr, setFoodCat] = useState([]);
    const [foodItemArr, setFoodItem] = useState([]);

    const [search, setSearch] = useState('');



    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        response = await response.json();

        setFoodItem(response[0])
        setFoodCat(response[1])

        console.log(response[0], response[1]);
    }

    useEffect(() => {
        loadData();
    },
        []);

    return (
        <div>
            <div><Navbar /></div>
            <div>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://i.postimg.cc/JzfXXJ6f/Burger_Wallpaper.webp" className="d-block w-100" alt="..." style={{ filter: "brightness(30%)" }} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Best Burgers</h5>
                                <p>Stuffed and heavily loaded, yet soft on bite</p>
                                <div className="d-flex justify-content-center" >
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(event) => {setSearch(event.target.value)}} />
                                    { /*<button className="btn btn-outline-success" type="submit">Search</button> */ }
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.postimg.cc/mr7HyDJX/Pizza_Wallpaper.webp" className="d-block w-100" alt="..." style={{ filter: "brightness(30%)" }} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Best Pizzas</h5>
                                <p>Greater cheese pulls and crispy texture, fitter base and loaded with veggies </p>
                                <div className="d-flex justify-content-center">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(event) => {setSearch(event.target.value)}} />
                                    {/*<button className="btn btn-outline-success" type="submit">Search</button>*/}
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.postimg.cc/MZnj9dC7/Sandwich-Wallpaper.webp" className="d-block w-100" alt="..." style={{ filter: "brightness(30%)" }} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Best Sandwichs</h5>
                                <p>Healthy and quick stomach filler with taste like nowhere</p>
                                <div className="d-flex justify-content-center">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(event) => {setSearch(event.target.value)}} />
                                    {/*<button className="btn btn-outline-success" type="submit">Search</button>*/}
                                </div>
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
            <div className="m-3 container">
                {
                    foodCatArr.length > 0
                        ? foodCatArr.map((foodCat) => {
                            return (
                                <div key={foodCat._id} className='row mb-3 g-4'>
                                    <div className='fs-3 m-3'>{foodCat.CategoryName}</div>
                                    <hr />
                                    {
                                        foodItemArr.length > 0
                                            ? foodItemArr.filter((foodItem) => (foodItem.CategoryName === foodCat.CategoryName) && (foodItem.name.toLowerCase().includes(search.toLocaleLowerCase())))
                                                .map(filteredFoodItem => {
                                                    return (
                                                        <div key={filteredFoodItem._id} className='col-12 col-sm-6 col-md-4 col-lg-3'>
                                                            <Card
                                                                foodName={filteredFoodItem.name}
                                                                options={filteredFoodItem.options[0]}
                                                                imgSrc={filteredFoodItem.img}
                                                            />
                                                        </div>
                                                    )
                                                })
                                            : <div>No such data found</div>
                                    }
                                </div>
                            )
                        })
                        : ""
                }
            </div>
            <div><Footer /></div>
        </div>
    );
}
