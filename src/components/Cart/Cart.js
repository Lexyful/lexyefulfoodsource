import React from 'react';
import { FoodItem } from '../../FoodItem/FoodItem';
import './Cart.css';
import { NavLink } from 'react-router-dom';

export const Cart = ({ selected, deleteSelected, clearCart, addOneItem, removeOneItem }) => {
    const calculateTotalQuantity = selected.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.quantity;
    }, 0);

    const checkOut = () => {
        if (selected.length === 0) {
            alert('There are no items in your cart. Search for what you want to purchase and items will be added.');
        } else {
            alert(`Thank you. You purchased ${calculateTotalQuantity} items!`);
            clearCart();
        }
    }

    return (
        <div className="cart-container">
            <h2>This is your Cart</h2>
            <div className="cart-items">
                {selected.map((item) => (
                    <div key={item.id}>
                        <FoodItem item={item} handleItem={deleteSelected} buttonDistinction={'remove from cart'} />
                        <div className="quantity-controls">
                            <button className="more-or-less" onClick={() => addOneItem(item)}>+</button>
                            <p>{item.quantity}</p>
                            <button className="more-or-less" onClick={() => removeOneItem(item)}>-</button>
                        </div>
                    </div>
                ))}
            </div>
            <h2>Total quantity {calculateTotalQuantity}</h2>
            <NavLink to="/">
                <button onClick={checkOut}>Checkout</button>
            </NavLink>
        </div>
    );
};
