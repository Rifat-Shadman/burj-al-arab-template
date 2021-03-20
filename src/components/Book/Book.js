import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Book = () => {
    const {bedType} = useParams();
    return (
        <div style={{textAlign: 'center'}}>
            <h1 style={{color: 'black'}}>This is the {bedType} room booking area</h1>
            
        </div>
    );
};

export default Book; 