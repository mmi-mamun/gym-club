import React from 'react';
import './CardSection.css'



const CardSection = (props) => {
    const {card,addToListHandler} = props;
    const {name ,url, title, age, timeRequired} = card;

    // const addToListHandler =() =>{
    //     console.log('Clicked');
    // }
    return (
        <div className='card-div'>
            <div className='style-info'>
            <img src={url} alt="" />
            <h3>{name}</h3>
            <p>{title}</p>
            <h5>For age: {age}</h5>
            <h4>Time required: {timeRequired} Seconds</h4>
            </div>
            <button onClick={()=>addToListHandler(card)} className='btn-addToList'>Add to list</button>

        </div>
    );
};

export default CardSection;