import React, { useEffect, useState } from 'react';
import banner from '../../Images/top_banner.jpg';
import { Button} from 'react-bootstrap';
import Service from '../Service/Service';
import Reviews from '../Reviews/Reviews';
import './Home.css';

const Home = () => {

    const [services, setServices] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [displayServices, setDisplayServices] = useState([]);
    const [displayReviews, setDisplayReviews] = useState([]);
    const [displayFavorites, setDisplayFavorites] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/all-offers'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setDisplayServices(data);
            });
    }, []);

    useEffect(() => {
        const url = 'http://localhost:5000/all-favorites'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setFavorites(data);
                setDisplayFavorites(data);
            });
    }, []);

    useEffect(() => {
        const url = 'http://localhost:5000/all-reviews'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setDisplayReviews(data);
            });
    }, []);


    return (
        <div>
            <section>
                <div className="pb-5">
                    <div className="col-md-12 top-banner" style={{ backgroundImage: `url(${banner})` }}>
                        <div className="container">
                            <h1 className="org-title">Liberty Travel</h1>
                            <p className="org-motto">Better Care and Better Understanding.</p>
                        </div>
                    </div>
                </div>    
            </section>
            <section>
                <div className="container pt-2 pb-5">
                  <div className="secvice">
                    <h3 className="text-center pb-3 our-services"><strong>We offers</strong></h3>
                  </div>
                  <div className="row">
                    {
                        displayServices.map(service => <Service
                            key={service.key}
                            service={service}
                        >
                        </Service>)
                    }
                  </div>
                </div>
            </section>
            <section>
                <div className="container pt-2 pb-5">
                  <div className="secvice">
                    <h3 className="text-center pb-3 our-services"><strong>Traveler Favorites</strong></h3>
                  </div>
                  <div className="row">
                    {
                        displayFavorites.map(service => <Service
                            key={service.key}
                            service={service}
                        >
                        </Service>)
                    }
                  </div>
                </div>
            </section>
            <section>
                <div className="container pt-2 pb-5">
                  <div className="secvice">
                    <h3 className="text-center pb-3 our-services"><strong>Recent Customer Reviews</strong></h3>
                  </div>
                  <div className="row">
                    {
                        displayReviews.map(review => <Reviews
                            key={review.key}
                            review={review}
                        >
                        </Reviews>)
                    }
                  </div>
                </div>
            </section>
        </div>
    );
};

export default Home;