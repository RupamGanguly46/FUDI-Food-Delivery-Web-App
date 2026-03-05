import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card';
import Carousel from '../components/Carousel';

export default function Home() {

    const [foodCatArr, setFoodCat] = useState([]);
    const [foodItemArr, setFoodItem] = useState([]);

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

    useEffect( () => {
        loadData();
    },
    []);

    return (
        <div>
            <div><Navbar /></div>
            <div><Carousel /></div>
            <div className="m-3 container">
                {
                    foodCatArr !== [] 
                    ? foodCatArr.map( (foodCat) => {
                        return (
                            <div className='row mb-3'>
                                <div key={foodCat._id} className='fs-3 m-3'>{foodCat.CategoryName}</div>
                                <hr />
                                {
                                foodItemArr !== []
                                ? foodItemArr.filter( (foodItem) => foodItem.CategoryName === foodCat.CategoryName)
                                .map(filteredFoodItem => {
                                    return(
                                        <div key={filteredFoodItem._id} className='col-12 col-md-6 col-lg-3'>
                                            <Card 
                                            foodName = {filteredFoodItem.name}
                                            options = {filteredFoodItem.options}
                                            imgSrc = {filteredFoodItem.img}
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
