import React, { useEffect, useState } from 'react';
import CardSection from '../../CardSection/CardSection';
import './MainContainer.css'
import logo from '../../images/logo.png'

const MainContainer = () => {
    const [cards,setCards] = useState([]);
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=>res.json())
        .then(data=> setCards(data))
        // .then(data=> console.log(data))
    }, [])


    return (
        <div className='main-container'>
            <div className="left-side">         
                <nav className='nav-container'>
                    <img className='img-nav' src={logo} alt="" />
                    <h1 className='txt-nav'>ACTIVITY-CLUB</h1>
                </nav>
                <h1 className='txt'>Select today’s exercise</h1>
                <div className="card-section">
                {
                    cards.map(card=> <CardSection card={card} key={card.id}></CardSection>)
                }
                </div>
            </div>


            <div className="right-side">
                
            </div>
        </div>
    );
};

export default MainContainer;