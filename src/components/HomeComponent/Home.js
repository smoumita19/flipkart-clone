import React from 'react';
import Banner from '../BannerComponent/Banner';
import AdCard from '../CardComponent/AdCard';
import AllProduct from '../AllProductComponent/AllProduct';
import Product from '../ProductComponent/Product';
import ShowProduct from '../ShowProductComponent/ShowProduct';

function Home() {
    return(
        <div>
            {/* ========= Banner ========= */}
            <Banner />
            {/* ========= All Product ========= */}
            <AllProduct />
            {/* ========= Ad of card ========= */}
            <AdCard />
            {/* ========= Products to buy ========= */}
            <ShowProduct />
            {/* ========= Footer ========= */}

        </div>
    );
}

export default Home