import React, { useState, useRef } from 'react';

const ListWithRef = () => {
    const [items, setItems] = useState([]);
    const itemInputRef = useRef(null);

    const addItem = () => {
        const newItem = itemInputRef.current.value;
        if (newItem) {
            setItems((prevItems) => [...prevItems, newItem]);
            itemInputRef.current.value = ''; // Clear input after adding
        }
    };

    return (
        <div>
            <h2>List with useRef</h2>
            <input type="text" ref={itemInputRef} />
            <button onClick={addItem}>Add</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListWithRef;