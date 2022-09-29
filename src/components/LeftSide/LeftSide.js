import React, { useEffect, useState } from 'react';
import CardSection from '../../CardSection/CardSection';
import './LeftSide.css'
import logo from '../../images/logo.png'


const LeftSide = () => {
   
    const [cards,setCards] = useState([]);
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=>res.json())
        .then(data=> setCards(data))
        // .then(data=> console.log(data))
    }, [])


    const [details,setDetails]=useState([]);

    const addToListHandler =(card) =>{
        // console.log(card);
        const newDetails = [...details, card];
        setDetails(newDetails);
        // console.log(newDetails);
    }


    return (
        <div className="left-side">                  
                <nav className='nav-container'>
                    <img className='img-nav' src={logo} alt="" />
                    <h1 className='txt-nav'>ACTIVE-GYM-CLUB</h1>
                </nav>
                <h1 className='txt'>Select today’s exercise</h1>
                <div className="card-section">
                {
                    cards.map(card=> <CardSection card={card} key={card.id} addToListHandler={addToListHandler}></CardSection>)
                }
                </div>
            </div>
    );
};

export default LeftSide;