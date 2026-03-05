import React from 'react'

export default function Card(props) {
    let options = props.options;
    let optionsCatArr = Object.keys(options);
  return (
    <div>
        <div className="card mt-3" style={{"width" : "18rem", "maxHeight" : "360px"}}>
            <img src={props.imgSrc} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.foodName}</h5>
                    <p className="card-text">Filled with Cheese, Tomato, Onion, Corn and Capsicum</p>
                    <div className="container w-100">
                        <select className="m-2 h-100 bg-success rounded">
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

                        <select className="m-2 h-100 bg-success rounded">
                            {optionsCatArr.map( (optionsCat) => {
                                return <option key={optionsCat} value={optionsCat}> {optionsCat} </option>
                            })}
                        </select>

                        <div className="d-inline h-100 fs-6">
                            Total Price
                        </div>
                    </div>
                    
                </div>
        </div>
    </div>
  )
}
