
import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import './styles.css';

export default function StarRating({ numStars }) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (getCurrentIndex) => {
        setRating(getCurrentIndex);
    }

    const handleMouseMove = (getCurrentIndex) => {
        setHover(getCurrentIndex);
    }

    const handleMouseLeave = (getCurrentIndex) => {
        setHover(rating);
    }

    return (
        <div className="stars-container">
            {
                [...Array(numStars)].map((_, index) => {
                    index += 1;
                    return (
                        <FaStar
                            key={index}
                            className={index <= (hover || rating) ? 'active' : 'inactive'}
                            onClick={() => handleClick(index)}
                            size={40}
                            onMouseMove={() => handleMouseMove(index)}
                            onMouseLeave={handleMouseLeave}
                        />
                    )
                })}
                <h1>{rating}</h1>
        </div>  
    )   
}