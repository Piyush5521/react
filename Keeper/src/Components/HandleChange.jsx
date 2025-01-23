import React, { useState } from 'react'
import "./Counter.css"

function HandleChange() {

    const [name, setName] = useState("test");
    const [quantity, setQuantity] = useState(1);
    const[comment, SetComment] = useState("");
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleCommentChange = (event) => {
        SetComment(event.target.value);
    }

    const handlePaymentChange = (event) => {
        setPayment(event.target.value);
    }

    const handleShippingChange = (event) => {
        setShipping(event.target.value);
    }

  return (
    <div className='containers1'>
        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type='number' />
        <p>Number: {quantity}</p>

        <textarea value={comment} rows={10} cols={40} onChange={handleCommentChange} placeholder='Enter delivery instructions'></textarea>
        <p>Comment: {comment}</p>

<br />
        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="GiftCard">GiftCard</option>
        </select>
        <p>Payment: {payment}</p>

        <br />
        <label>
            <input type="radio" value="Pick Up"
                checked={shipping === "Pick Up"}
                onChange={handleShippingChange}
            /> Pick Up
        </label>
        <br />
        <label>
            <input type="radio" value="Delivery"
                checked={shipping === "Delivery"}
                onChange={handleShippingChange}
            /> Delivery
        </label>
        <p>Shipping: {shipping}</p>
    </div>
  )
}

export default HandleChange