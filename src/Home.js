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

        <Product 
            id="4903850"
            title='Tecno Camon 17 Pro RAM: 8 GB, Internal Storage:256 GB,Battery:5000 mAh, 
            Main camera: 64MP,8MP, 2MP,2MP, Front camera: 48MP ' 
            price={263.563} 
            image='data:image/jpeg;base64,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'
            rating={3}
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
                    {/*product*/}
                    {/*product*/}
            <Product 
            id="4903850"
            title='Bruhm BFS 90MD, 90Lts Single Door Refrigerator - Inox' 
            price={168.859} 
            image='https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/73/126874/1.jpg?2765'
            rating={4}
            />
            <Product 
            id="4903850"
            title='Fashion Mens Sports Suit Men Long 2 piece Set' 
            price={21.4424} 
            image='https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/17/326923/1.jpg?6629'
            rating={3}
            />
            <Product
            id="3254354345"
            title='Royal 40HD,40 Inch SMART TV HD USB HDMI-Netfix,Youtube+FREE GIFTS' 
            price={205.481} 
            image='https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/07/748174/1.jpg?7293'
            rating={4} />
            </div>


            <div className="home__row">
                   {/*product*/}
            <Product 
            id="90829332"
            title='Tommy Hilfiger - 1791118 Watch, Brown/Gold' 
            price={108.99} 
            image='https://m.media-amazon.com/images/I/81tal+g+P+L._AC_SS350_.jpg'
            rating={3} />

            <Product
            id="90829332"
            title="Deer Plaid Sling Shoulder Chain Quilted Bags Women Handbags Tote"
            price={179.99}
            rating={4}
            image="https://static.jamboshop.com/0/img/product/Jowadeerplaidslingshoulderchainquiltedbagstote-64/13157B.jpg"
            />

            <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
             </div>


             <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>

            </div>
        </div>
    )
}

export default Home
