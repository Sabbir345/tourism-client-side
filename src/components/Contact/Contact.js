import React from 'react';
import './Contact.css';
import { Container,Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="pt-5 pb-5">
            <h3 className="text-center">Contact Us</h3>
            <Container>
                <form method="post">
                    <h3>Drop Us a Message</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value="" />
                            </div>
                            <div className="form-group pt-2">
                                <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" value="" />
                            </div>
                            <div className="form-group pt-2">
                                <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value="" />
                            </div>
                            <div className="form-group pt-2">
                                <Button variant="dark">Send Message</Button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea name="txtMsg" className="form-control text-area" placeholder="Your Message *"></textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </Container>
        </div>
    );
};

export default Contact;