import React from 'react';
import './AdCard.css';

function AdCard() {
    return (
        <div className="container-fluid adcard__section mb-2">
             <div className="row justify-content-center">
                <div className="col-md-4">
                    <img src="../../../assets/images/bg__card__1.png" width="100%" alt="Card"/>
                </div>
                <div className="col-md-4">
                    <img src="../../../assets/images/bg__card__2.png" width="100%" alt="Card"/>
                </div>
                <div className="col-md-4">
                    <img src="../../../assets/images/bg__card__3.png" width="100%" alt="Card"/>
                </div>
            </div>
        </div>
           
    )
}

export default AdCard
