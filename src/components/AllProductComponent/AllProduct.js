import React from 'react';
import { Card, button } from 'react-bootstrap';
import AdCard from '../CardComponent/AdCard'
import './AllProduct.css';

function AllProduct() {
    return (
        <div className="container-fluid product__section">
            <div className="product__top row">
                <div className="col-12 p-3 text-left">
                    <span> <h4>Todays deal</h4></span>
                </div>
            </div>
            <div className="row my-2">
                <div className="col-lg-2">
                    <Card>
                        <div className="product__img">
                            <img variant="top" src="https://rukminim1.flixcart.com/image/150/150/jm0wscw0/cup-saucer/d/b/k/fbncflbl-femora-original-imaf9yn87z4qamek.jpeg?q=70" />
                        </div>
                        <Card.Body>
                        <Card.Title style={{ fontSize: '14px', fontWeight: 'bold' }}>Dinner Set and More</Card.Title>
                        {/* Add link to */}
                        <Card.Link href="" className="text-success">See More</Card.Link>
                        <Card.Subtitle className="m-2 text-muted">Best Selling</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-2">
                    <Card>
                        <div className="product__img">
                            <img  variant="top" src="https://rukminim1.flixcart.com/image/150/150/k0wqwsw0/sticker/u/n/g/wall-wallpaper-rose-flowers-green-nature-bedroom-design-extra-original-imafkhkdhyhqxhuv.jpeg?q=70" />
                        </div>

                        <Card.Body>
                        <Card.Title style={{ fontSize: '14px', fontWeight: 'bold' }}>Dinner Set and More</Card.Title>
                        {/* Add link to */}
                        <Card.Link href="" className="text-success">See More</Card.Link>
                        <Card.Subtitle className="m-2 text-muted">Best Selling</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-2">
                    <Card>
                        <div className="product__img">
                            <img className="py-4" variant="top" src="https://rukminim1.flixcart.com/image/150/150/k5lcvbk0pkrrdj/shoe/r/g/k/7-sm-379-sparx-original-imafbqjfvabzthhy.jpeg?q=70" />
                        </div>
                        <Card.Body>
                        <Card.Title style={{ fontSize: '14px', fontWeight: 'bold' }}>Dinner Set and More</Card.Title>
                        {/* Add link to */}
                        <Card.Link href="" className="text-success">See More</Card.Link>
                        <Card.Subtitle className="m-2 text-muted">Best Selling</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-2">
                    <Card>
                        <div className="product__img">
                            <img  variant="top" src="https://rukminim1.flixcart.com/image/150/150/k6l2vm80/headphone/9/x/b/mivi-be5cl-bk-original-imafhwg3krehwywv.jpeg?q=70" />
                        </div>

                        <Card.Body>
                        <Card.Title style={{ fontSize: '14px', fontWeight: 'bold' }}>Dinner Set and More</Card.Title>
                        {/* Add link to */}
                        <Card.Link href="" className="text-success">See More</Card.Link>
                        <Card.Subtitle className="m-2 text-muted">Best Selling</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-2">
                    <Card>
                        <div className="product__img">
                            <img variant="top" src="https://rukminim1.flixcart.com/image/150/150/kfyasnk0-0/watch/a/j/f/38039pp22-fastrack-original-imafwaq5kevcsyuj.jpeg?q=70" />
                        </div>

                        <Card.Body>
                        <Card.Title style={{ fontSize: '14px', fontWeight: 'bold' }}>Dinner Set and More</Card.Title>
                        {/* Add link to */}
                        <Card.Link href="" className="text-success">See More</Card.Link>
                        <Card.Subtitle className="m-2 text-muted">Best Selling</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-2">
                    <Card>
                        <div className="product__img">
                            <img variant="top" src="https://rukminim1.flixcart.com/image/150/150/jqwny4w0/kajal/c/v/q/0-7-eyeconic-kajal-twin-pack-lakme-original-imafcthtdzhzpdjg.jpeg?q=70" />
                        </div>

                        <Card.Body>
                        <Card.Title style={{ fontSize: '14px', fontWeight: 'bold' }}>Dinner Set and More</Card.Title>
                        {/* Add link to */}
                        <Card.Link href="" className="text-success">See More</Card.Link>
                        <Card.Subtitle className="m-2 text-muted">Best Selling</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </div>
                
            </div>
        </div>
    )
}

export default AllProduct
