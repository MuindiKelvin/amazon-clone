import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
                />
         <div className="home__row">
                    {/*product*/}
        <Product 
        id="12321341"
        title='HP Envy 13-ba0002na 13.3-Inch Full HD Touch-screen Laptop (Natural Silver) (Intel Core i5-1035G1, 8 GB RAM, 512 GB SSD, Windows 10 Home)' 
        price={129.99} 
        image='https://m.media-amazon.com/images/I/81NW+JjhlcL._AC_UY218_.jpg'
        rating={5}
        />
        <Product 
        id="49538094"
        title='Kenwood Kmix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
        price={239.0}
        rating={4}
        image="https://m.media-amazon.com/images/I/51ae8jtSakL._AC_SL1200_.jpg"
        />
                    {/*product*/}
        </div>

            <div className="home__row">
                    {/*product*/}
                    {/*product*/}
                    {/*product*/}
            <Product 
            id="4903850"
            title='SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black' 
            price={198.99} 
            image='https://images-na.ssl-images-amazon.com/images/I/61Lb5JbFxML._AC_UL160_SR160,160_.jpg'
            rating={3}
            />
            <Product 
            id="4903850"
            title='Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal' 
            price={98.99} 
            image='https://images-na.ssl-images-amazon.com/images/I/61MZfowYoaL._AC_SY300_SX300_.jpg'
            rating={4}
            />
            <Product
            id="3254354345"
            title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Gray (4th Generation)' 
            price={598.99} 
            image='https://images-na.ssl-images-amazon.com/images/G/01/appcore/tablet/240x160_iPadPro11_031820._CB419473736_.png'
            rating={5} />
            </div>

            <div className="home__row">
                   {/*product*/}
            <Product 
            id="90829332"
            title='Tommy Hilfiger - 1791118 Watch, Brown/Gold' 
            price={108.99} 
            image='https://m.media-amazon.com/images/I/81tal+g+P+L._AC_SS350_.jpg'
            rating={3} />
             </div>

            </div>
        </div>
    )
}

export default Home
