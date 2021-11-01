import React, { useEffect, useState } from 'react';
import { useParams , useHistory} from 'react-router';
import Image from 'react-bootstrap/Image';
import useFirebase from '../../hooks/useFirebase';
import './Details.css';

const Details = () => {
    const [offer, setOffer] = useState({});
    const { id } = useParams();
    const history = useHistory();
    const { user } = useFirebase();

    useEffect(() => {
        const url = `http://localhost:5000/offers/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setOffer(data));
    }, {});

    const handlePlaceOrder = (e) => {

        const name = offer[0]?.name;
        const price = offer[0]?.price;
        const img = offer[0]?.img;

        const datas = {
            userName: user.displayName,
            email:user.email,
            offerId:id,
            offerName: name,
            offerPrice: price,
            offerImg: img
        };

        const url = `http://localhost:5000/place-order`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(datas)
        })
        .then(res => res.json())
        .then(data => {
            history.push('/my-orders');
        })
        e.preventDefault();
    }

    return (
        <div>
            <div className="container pb-5">
                <div className="pt-4">
                    <Image className="details-img" src={offer[0]?.img} fluid />
                    <h2 className="pt-2">Package Name: {offer[0]?.name}</h2>
                    <h4>Price : {offer[0]?.price}</h4>
                    <p className="pb-2">Description: {offer[0]?.description}</p>

                    <button onClick={handlePlaceOrder} variant="dark">Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Details;