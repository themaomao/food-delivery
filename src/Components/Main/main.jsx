import React, { useEffect } from "react";
import './main.css';
import img from '../Food-Assets/img1.jpg'
import img2 from '../Food-Assets/img2.jpg'
import img3 from '../Food-Assets/img3.jpg'
import img4 from '../Food-Assets/img4.png'
import img5 from '../Food-Assets/img5.webp'
import img6 from '../Food-Assets/img6.jpg'
import img7 from '../Food-Assets/img7.jpg'
import img8 from '../Food-Assets/img8.jpg'
import img9 from '../Food-Assets/img9.jpg'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsClipboardCheck} from 'react-icons/bs'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
{
    id:1,
    imgSrc:img,
    destTitle:'Sekongtong Tofu House',
    location:'Korean style',
    grade:'GOOD SERVICE',
    fees:'$30',
    description:'Korean cuisine is largely based on rice, vegetables, seafood and (at least in South Korea) meats. Dairy is largely absent from the traditional Korean diet. Traditional Korean meals are named for the number of side dishes (반찬; 飯饌; banchan) that accompany steam-cooked short-grain rice. '
},
{
    id:2,
    imgSrc:img2,
    destTitle:'The people',
    location:'America',
    grade:'GOOD SERVICE',
    fees:'$100',
    description:'The Worlds Melting Pot Whether fried chicken, biscuits, chicken and dumplings, chicken-fried steak and gravy, fried green tomatoes, or shrimp and grits, these dishes are popular from California to Maine. Furthermore, cornbread and corn pudding may have southern roots but could not be more American'
},
{
    id:3,
    imgSrc:img3,
    destTitle:'Great wall',
    location:'Chinese',
    grade:'Best dumpling place',
    fees:'$50',
    description:'There are two major classifications of Chinese cuisines based on geographical locations and cooking styles. First up are those termed the Four Major Cuisines: Lu cuisine from Shandong province; Chuan cuisine from Sichuan; Yue cuisine from Guangdong; and Su cuisine from Jiangsu'
},
{
    id:4,
    imgSrc:img4,
    destTitle:'Rainbow ice',
    location:'Fruit',
    grade:'Nutritions',
    fees:'$20',
    description:'Fruits | Definition, Types & Examples - The botanical definition of fruit is a seed-bearing part of a flowering plant or tree that can be eaten as food. By those standards, foods such as avocados, cucumbers, squash, and yes, even tomatoes are all fruits.'
},
{
    id:5,
    imgSrc:img5,
    destTitle:'Healthy bowl',
    location:'Salad',
    grade:'For fits',
    fees:'$15',
    description:'A salad is a dish consisting of mixed ingredients, frequently vegetables. They are typically served chilled or at room temperature, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.'
},
{
    id:6,
    imgSrc:img6,
    destTitle:'BBQ Factory',
    location:'America',
    grade:'Outdoor Available',
    fees:'$100',
    description:'Barbecue, an outdoor meal, usually a form of social entertainment, at which meats, fish, or fowl, along with vegetables, are roasted over a wood or charcoal fire!'
},
{
    id:7,
    imgSrc:img7,
    destTitle:'Macaron',
    location:'French',
    grade:'Dessert',
    fees:'$10',
    description:'Macaroons are made with coconut, which is a good source of fiber and healthy fats. They are also low in calories and sugar. When consumed in moderation, two cups of macaroons per day will produce no negative effects and a few surprising health benefits.'
},
{
    id:8,
    imgSrc:img8,
    destTitle:'Fpaghetto',
    location:'Italy',
    grade:'Romantic',
    fees:'$90',
    description:'Spaghetti is rich in fiber, protein, and minerals like calcium, iron, phosphorus, and magnesium. More importantly, it does not contain any cholesterol and saturated fats. '
},
{
    id:9,
    imgSrc:img9,
    destTitle:'Boco',
    location:'Mexico',
    grade:'Taco',
    fees:'$20',
    description:'In general, tacos can be a good source of protein and fiber that is not too high in calories. However, certain condiments or extra items can significantly increase the number of calories and amounts of fat or salt. This is particularly true of tacos from restaurants.'
},
]


const Main = () => {

         //create a react hook to add a scroll animation
         useEffect(()=>{
            Aos.init({duration:2000})
         },[])

    return (
       <section className="main container section">
        <div className="secTitle">
            <h3 data-aos="fade-right" className="title">
                Most popular restaurant
            </h3>
        </div>

        <div className="secContent grid">
            {
                /*here going to use high ordfer array method(map)
                to do this, need use list of object in one array.
                create an array named data and from that we shall .map()
                array to fetch destination at once.  */
            }
            {
                Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                    return(
                        <div key={id} data-aos="fade-up" className="singleDestination">
                           <div className="imageDiv">
                              <img src={imgSrc} alt={destTitle} />
                           </div>

                           <div className="cardInfo">
                            <h4 className="destTitle">{destTitle}</h4>
                            <span className="continent flex">
                               <HiOutlineLocationMarker className="icon"/>
                               <span className="name">{location}</span>
                            </span>

                            <div className="fees flex">
                                <div className="grade">
                                    <span>{grade}<small>+1</small></span>
                                </div>
                                 <div className="price">
                                    <h5>{fees}</h5>
                                 </div>
                            </div>
                            <div className="desc">
                                <p>{description}</p>
                            </div>
                            <button className="btn flex">
                                DETAILS <BsClipboardCheck className="icon"/>
                            </button>
                           </div>
                        </div> 

                    )
   
                })
            }

        </div>
       </section>
    )
}

export default Main