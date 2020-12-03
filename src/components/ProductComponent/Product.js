import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Product({id,title,image,price}) {

    const [ products, setProducts ] = useState('');

    // setProducts {
    //     products : e
    // }

    // Add to cart option
    const addToBasket = () => {

        setProducts({
            item : {
                id : id,
                title : title,
                image : image,
                price : price
            }
        })
        alert(id + title);
    }

    //Render product to show the selected item
    // if(products.length === 0) {
    //     const p = "";

    // } else {
    //     const p = products.item.map((product) =>{
    //         <li>{product.id}</li>
    //     } )
    // }
   

    return (
  
            <div className="col-lg-2" key={id}>
                <Card>
                    <div className="product__img">
                        <img variant="top" src={image} alt={title}/>
                    </div>
                    <Card.Body>
                    <Card.Title style={{ fontSize: '14px', fontWeight: 'bold' }}>{title}</Card.Title>
                    {/* Add link to */}
                    <Button onClick={addToBasket}>Add to Cart</Button>
                    {/* <ul>{p}</ul> */}
                    </Card.Body>
                </Card>
            </div>
            
    )
}

export default Product
