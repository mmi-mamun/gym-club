import React, { useEffect, useState } from 'react';
import CardSection from '../../CardSection/CardSection';
import './MainContainer.css'
import logo from '../../images/logo.png'
import imgProfile from '../../images/profile.jpg'

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
                <div className="profile">
                    <div className="about-profile">
                        <img src={imgProfile} alt="" />
                    </div>
                    <div>
                        <h1 className='about-profile'>M MI Musafir</h1>
                        <p>Location: Dhaka</p>
                    </div>
                </div>

                <div className="details">
                    <div className="attributes">
                        <h2>75 <small>KG</small></h2>
                        <h3>Weight</h3>
                    </div>
                    <div className="attributes">
                        <h2>6.5</h2>
                        <h3>Height</h3>
                    </div>
                    <div className="attributes">
                        <h2>25 <small>Years</small></h2>
                        <h3>Age</h3>
                    </div>               
                </div>

                <div className="break-section">
                    <h3>Add a break</h3>
                    <div className="break-option">
                        <button className="break-btn">10s</button>
                        <button className="break-btn">20s</button>
                        <button className="break-btn">30s</button>
                        <button className="break-btn">40s</button>
                        <button className="break-btn">50s</button>
                    </div>
                </div>

                <div className="exercise-details">
                    <h3>Exercise Details</h3>
                    <div className="exercise-info">
                        <h3>Exercise time: </h3>
                        <h3>Break time: </h3>
                    </div>
                    <button className='btn-complete'>Activity Completed</button>
                </div>
            </div>
        </div>
    );
};

export default MainContainer;