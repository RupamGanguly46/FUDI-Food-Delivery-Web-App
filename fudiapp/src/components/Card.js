import React, { useState, useRef, useEffect } from 'react'
import { useDispatchCart, useCart } from './ContextReducer';
export default function Card(props) {
    let options = props.options;
    let optionsCatArr = Object.keys(options);

    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");

    let dispatch = useDispatchCart();
    let data = useCart()
    
    const handleAddToCart = async () => {
        const food = data.find(
            item => item.id === props.item._id && item.size === size
        );

        if(food){
            dispatch({
                type: "UPDATE",
                id: props.item._id,
                size: size,
                qty: qty,
                price: finalPrice
            });
        } else {
            dispatch({
                type: "ADD",
                id: props.item._id,
                name: props.item.name,
                qty: qty,
                size: size,
                price: finalPrice
            });
        }
    };
    
    // For Default Value
    const sizeRef = useRef();
    let finalPrice = qty * parseInt(options[size]);
    useEffect( () => {
        setSize(sizeRef.current.value)
    },
    [] )

  return (
    <div>
        <div className="card mt-3 h-100">
            <img src={props.item.img} className="card-img-top" alt="..." style={{ height: "160px", objectFit: "cover" }}/>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{props.item.name}</h5>
                    <p className="card-text">{props.desc}</p>
                    <div className="container w-100 mt-auto">
                        <select className="m-2 h-100 bg-success rounded" onChange={(event) => setQty(parseInt(event.target.value))}>
                            { // JS is written in curly brackets
                                Array.from(
                                    Array(6), (e, i) => {
                                        return(
                                            <option key={i+1} value={i+1}> {i+1} </option>
                                        );
                                    }

                                )
                            }
                        </select>

                        <select className="m-2 h-100 bg-success rounded" ref={sizeRef} onChange={(event) => setSize(event.target.value)}>
                            {optionsCatArr.map( (optionsCat) => {
                                return <option key={optionsCat} value={optionsCat}> {optionsCat} </option>
                            })}
                        </select>

                        <div className="d-inline h-100 fs-6">
                            Rs. {finalPrice}/-
                        </div>

                        <hr />

                        <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                    
                </div>
        </div>
    </div>
  )
}
