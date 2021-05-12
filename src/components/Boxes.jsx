import React, { useState } from 'react';




const Boxes = (props) =>{
    const [input, setInput] = useState({
        color: '',
        length: 200
    });
    const changeHandler = (event) =>{
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        props.addBox([...props.allBoxes, {...input}]);
        setInput({ 
            color: '',
            length: ''
        });
    }

    return(
        <div className="container mt-5">
            <form onSubmit={submitHandler} className="text-center">
                <label><h4>Color:</h4> </label>
                <input type="text" onChange={changeHandler} name="color" value={input.color} className="form-control w-25 d-inline m-3"/>
                <input type="text" onChange={changeHandler} name="length" value={input.length} className="form-control w-25 d-inline m-3"/>
                <input type="submit" className="btn btn-primary" value="Add Box"/>
            </form>
            <hr></hr>
        </div>
    )
}

export default Boxes;