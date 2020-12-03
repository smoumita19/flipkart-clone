import React from 'react';
import Product from '../ProductComponent/Product'

function ShowProduct() {
    return (
        <div className="container-fluid product__section">
        <div className="product__top row">
            <div className="col-12 p-3">
                <span> <h4>Todays deal</h4></span>
            </div>
        </div>
        <div className="row my-2">
            <Product id="1" title="Room Heater" image="https://rukminim1.flixcart.com/image/150/150/k4zx9jk0/room-heater/z/k/g/j-flashy-1000-watts-radiant-room-heater-steel-bajaj-original-imafmv7bbwegps5z.jpeg?q=70" price={1200}/>
            <Product id="2" title="Computer Glass" image="https://rukminim1.flixcart.com/image/150/150/k66sh3k0/frame/d/g/d/52-wayfarer-blue-clear-demo-lens-vast-original-imaf77cfbvbgtfgp.jpeg?q=70" price={200}/>
            <Product id="3" title="Bluetooth Speaker" image="https://rukminim1.flixcart.com/image/150/150/jtoorrk0/speaker/mobile-tablet-speaker/5/d/h/portronics-por-871-sounddrum-bluetooth-4-2-stereo-speaker-original-imafezm2b7k8hqre.jpeg?q=70" price={800}/>
        </div>
    </div>
    );
}

export default ShowProduct;