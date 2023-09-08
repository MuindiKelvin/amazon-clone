import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://mydawa.com/_fileupload/Image/1_1920_Rascal_2.jpg"
                alt=""
                />
         <div className="home__row">
                    {/*product*/}
        <Product 
        id="12321341"
        title='Acnes Creamy Wash with TRIO-ACTIV
        advanced formula deeply cleanses the face
        by removing excess  oil and dirt. Foamy & gentle with no irritation. Isopropylmethylphenol - removes pimple
        causing germs thus preventing pimples.' 
        price={740.99} 
        image='https://media.mydawa.com/Images/Products/014cb0d7-cd3b-496b-809e-3410a41b95f5.JPG'
        rating={5}
        />
        <Product 
        id="49538094"
        title='Diabetone tablets contain 21 nutrients including Chromium which helps to maintain normal blood glucose levels. It safeguards your daily intake of key micronutrients via a formula based on published nutritional research.'
        price={1580.00}
        rating={4}
        image="https://media.mydawa.com/Images/Products/efe036ad-c87d-4469-bacb-487dd9f00398.JPG"
        />

        <Product 
            id="4903850"
            title='Berocca performance is combination of B vitamins (B1,B2,B3,B5,B6,B12) Vitamin C , Vitamin H(Biotin) folic acid and essential minerals calcium, Magnesium and Zinc which work to support mental alertness and physical energy throughout the day.' 
            price={760.00} 
            image='https://media.mydawa.com/Images/Products/dfccc632-fd5c-4218-b411-dbf696688e63.JPG'
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
            title='Avalife Colon Care is a perfect combination of unique and innovative DGL Licorice root extract, Gutguard and Ayurvedic herbs to help maintain gut integrity, support colon health and bring natural balance to your intestinal microbiome.' 
            price={1,920.00} 
            image='https://media.mydawa.com/Images/Products/6d645b0c-7c93-4be9-9328-68c631efaf64.JPG'
            rating={3}
            />
            <Product 
            id="4903850"
            title='This toilet paper is strong and uniquely designed with extra-absorbent ripples. It is soft just like a cushion and you will feel heavenly using it. It is absorbent and it gives you value for your money. It offers strength and does not break apart easily like other tissues.' 
            price={545.00} 
            image='https://media.mydawa.com/Images/Products/755b5fcc-de2d-4d3e-8d57-87e847a4d6ec.JPG'
            rating={4}
            />
            <Product
            id="3254354345"
            title='Avalife Daily Flora Balance is a premium quality, with 5 strain, formulation indeed one of its kind, with increased potency being both acid and bile resistant.' 
            price={1080.00} 
            image='https://media.mydawa.com/Images/Products/2fc7ed26-fc75-473c-abf7-01b01e4ae9ca.JPG'
            rating={5} />
            </div>

            <div className="home__row">
                    {/*product*/}
                    {/*product*/}
                    {/*product*/}
            <Product 
            id="4903850"
            title='Provides Glucosamine present in the preferred potassium form, and a high quality Low Molecular Weight form of Chondroitin, together with Ginger Root extract, a well-known botanical ingredient. Copper contributes to the maintenance of normal connectiv' 
            price={1900.00} 
            image='https://media.mydawa.com/Images/Products/d9c277fb-df30-4487-9268-44eadd2e45ac.JPG'
            rating={4}
            />
            <Product 
            id="4903850"
            title='The Garnier Micellar Cleansing Water with Vitamin C works for all skin types. It effectively cleanses and removes makeup like a magnet, micelles capture and lift away dirt, oil and makeup without harsh rubbing leaving skin perfectly clean without over drying.' 
            price={645} 
            image='https://media.mydawa.com/Images/Products/02b08737-d57e-46ae-8479-b351d1990c82.JPG'
            rating={3}
            />
            <Product
            id="3254354345"
            title='Holland & Barrett High Strength Glucosamine & Chondroitin Complex tablets contain a high strength blend of Glucosamine and Chondroitin with MSM. Glucosamine and Chondroitin are naturally found in the joints of the body.' 
            price={2750.00} 
            image='https://media.mydawa.com/Images/Products/896a5628-8817-414c-a228-643b889e7af0.JPG'
            rating={4} />
            </div>


            <div className="home__row">
                   {/*product*/}
            <Product 
            id="90829332"
            title='The best of both worlds, our fruit and nut muesli is packed with raisins, sultanas, almonds, cashews and macadamia.  We make it in small batches to make every spoonful perfectly delicious and ready for you to enjoy.' 
            price={849.00} 
            image='https://media.mydawa.com/Images/Products/c22c1e01-6628-4e04-8199-92c1e2e0f9cb.JPG'
            rating={4} />

            <Product
            id="90829332"
            title="Skin Type: All skin types
            • Contents: Enriched with Vitamin E and sunscreen it provides protection against harmful UV
            rays for radiant healthy skin."
            price={400.00}
            rating={5}
            image="https://media.mydawa.com/Images/Products/240ce496-3d0a-4337-9f43-b2c76a281c09.JPG"
            />

            <Product
            id="12321341"
            title="Irresistible healthy and vegan friendly chocolate oatmeal cookies. Rich in fibre and contain no eggs, no dairy and no preservatives."
            price={385.00}
            rating={5}
            image="https://media.mydawa.com/Images/Products/ddca62f3-a6ba-48aa-8042-d02718cf9b24.JPG"
            />
             </div>


             <div className="home__row">
          <Product
            id="4903850"
            title="Olive oil is an antioxidant that helps prevent or reverse damage from cancer-causing ultraviolet radiation. It is also an excellent choice for acne-prone skin as it helps to decrease acne by killing off the bacteria that causes acne."
            price={500.00}
            rating={4}
            image="https://media.mydawa.com/Images/Products/27bb9d47-20fd-4f2e-ada0-b3e7a1a47387.JPG"
          />
          <Product
            id="23445930"
            title="Adopt Extreme Sensation is shiver for Virile Water, a fragrance of vibrant freshness expressed by bergamot.
            The aromatic heart of lavandin mixed with a marine accord express an assertive virility."
            price={3800.00}
            rating={5}
            image="https://media.mydawa.com/Images/Products/8c933553-bc8d-435a-8989-f9c12925a761.JPG"
          />
          <Product
            id="3254354345"
            title="Softcare Baby Soft Diapers are made of cotton with a triple-layered absorbent system that quickly and evenly absorb fluid to effectively protect your baby from wetness keeping him/her skin dry a healthy."
            price={715}
            rating={4}
            image="https://media.mydawa.com/Images/Products/e6df69aa-14ff-4228-9023-2b494748dc4c.JPG"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Maybelline Super Stay Active Wear 30h Foundation is a long-lasting and full coverage foundation that evens out the complexion. Ideal for all year round, including hot season and humid weather,
             this formula comfortably adjusts to all skin types granting a beautiful result that lasts all day"
            price={2405.99}
            rating={4}
            image="https://media.mydawa.com/Images/Products/988e57c6-f909-40f7-bfcb-2fd517426014.JPG"
          />

          <Product
            id="90829332"
            title="Codseas Syrup is an orange flavored syrup that contains codliver oil with Vitamin A, D and E. The syrup itself is orange in color."
            price={670.00}
            rating={4}
            image="https://media.mydawa.com/Images/Products/058d4ef8-54a7-48b0-b7d3-016d8d58ff4d.JPG"
          />
          

          <Product
            id="90829332"
            title="Durex Fetherlite 3 pack condoms are ultra-fine for enhanced sensitivity. They are the thinnest in the Durex latex range and are non-spermiciadally lubricated. They have an odour masker and are shaped to be easier to put on and to provide a better fit and feel.
            They can aid to prevent pregnancy and the possibility of catching sexually transmitted infections."
            price={370.00}
            rating={4}
            image="https://media.mydawa.com/Images/Products/b766bca2-6bb1-43ef-bcac-825811637852.JPG"
          />

       </div>

       <div className="home__row">
       <Product
            id="90829332"
            title="USN's Pure Creatine is a micronized form of creatine, enhancing the absorption and bioavailability. Pure Creatine is designed to support protein synthesis which aids muscle gains, enhance recovery and improve physical performance.
             Micronized creatine is absorbed faster and better than other compounds of creatine."
            price={2000.00}
            rating={4}
            image="https://media.mydawa.com/Images/Products/13f3d91c-64b2-4795-b431-ad7a6c84cb05.JPG"
          />
          
         <Product
            id="90829332"
            title="Adol 125 mg suppositories: Each suppository contains Paracetamol as the Active ingredient. Paracetamol Suppositories are used for pain relief and fever in children under the age of 6 years. Adol 125 mg is suitable for children who find it difficult to take paracetamol as tablets or syrup."
            price={370.00}
            rating={4}
            image="https://media.mydawa.com/Images/Products/d816b434-1f08-45ea-925a-a586837cc38e.JPG"
          />
       </div>



            </div>
        </div>
    )
}

export default Home
