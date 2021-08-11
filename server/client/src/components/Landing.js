import React from 'react';
import M from 'materialize-css';
import survey from '../assets/createsurvey.png';
import data from '../assets/data.png';
import login from '../assets/login.png';
import stripe from '../assets/stripe.png';
import './landing.css';

const Landing = () => {
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.carousel');
        var instance = M.Carousel.init(elems, {
            fullWidth: true,
            indicators: true
        });
      });
    return (
        <div style={{textAlign: "center"}}>
            <div style={{background: "#e6e6e6", margin: "0", padding: "100px"}}>
                <h1 style={{margin: "0"}}> I-Survey </h1>
                <h4> A web application to easily create simple polls </h4>
            </div>
            <div className="carousel carousel-slider center">
                <div className="carousel-fixed-item center">
                </div>
                <div className="carousel-item red white-text" href="#one!" style={{overflow: "hidden"}}>
                    <h2> 1. Log in with Google Oauth </h2>
                    <img src={login} style={{height: "350px", width:"auto"}}></img>
                </div>
                <div className="carousel-item amber white-text" href="#two!">
                    <h2>2. Load survey credits into your account using Stripe </h2>
                    <img src={stripe} style={{height: "350px", width:"auto"}}></img>
                </div>
                <div className="carousel-item green white-text" href="#three!">
                    <h2>3. Create and send your surveys </h2>
                    <img src={survey} style={{height: "350px", width:"auto"}}></img>
                </div>
                <div className="carousel-item blue white-text" href="#four!">
                    <h2>4. Review your Data</h2>
                    <img src={data} style={{height: "350px", width:"auto"}}></img>
                </div>
            </div>
        </div>
    );
};

export default Landing;