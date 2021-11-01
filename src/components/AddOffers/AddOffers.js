import React, { useRef } from 'react';
import useFirebase from '../../hooks/useFirebase';

const AddOffers = () => {
    const offerNameRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();
    const imgRef = useRef();

    const { user } = useFirebase();

    const handleAddOffers = e => {
        const name = offerNameRef.current.value;
        const price = priceRef.current.value;
        const description = descriptionRef.current.value;
        const img = imgRef.current.value;

        const newOffer = { name, price , description, img};

        if (name.length == 0) {
          alert('Name field is requird.')
        }
        else if (price.length == 0) {
          alert('Price field is requird.')
        }
        else if (description.length == 0) {
          alert('Description field is requird.')
        }
        else if (img.length == 0) {
          alert('Image field is requird.')
        }else{
            fetch('http://localhost:5000/new-offer', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newOffer)
            })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added.')
                    e.target.reset();
                }
            })
        }

        
        e.preventDefault();
    }
    return (
        <div>
            <div className="container pt-5 pb-5">
                <div className="col-md-6 offset-md-3">
                    <h2>Add New Offer</h2>
                    <form onSubmit={handleAddOffers}>
                        <div className="form-group">
                            <label>Offer Name</label>
                            <input type="text" ref={offerNameRef} className="form-control" placeholder="Enter Offer Name" />
                        </div>
                        <div className="form-group">
                            <label>Offer Price</label>
                            <input type="text" ref={priceRef} className="form-control" placeholder="Offer Price" />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input type="text" ref={descriptionRef} className="form-control" placeholder="Description" />
                        </div>
                        <div className="form-group">
                            <label>Image URL</label>
                            <input type="text" ref={imgRef} className="form-control" placeholder="Image URL" />
                        </div>
                        <br/>
                        <input type="submit" value="Add Offer" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddOffers;