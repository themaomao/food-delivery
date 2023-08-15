import React,{useEffect} from "react";
import './footer.css';
import video2 from '../Food-Assets/video2.mp4'
import {FiChevronRight, FiSend} from 'react-icons/fi'
import {MdOutlineFastfood} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

        //create a react hook to add a scroll animation
        useEffect(()=>{
            Aos.init({duration:2000})
         },[])


    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>
            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                       <h2>Order with us</h2>
                    </div>

                    <div data-aos="fade-up" className="inputDiv flex">
                        <input type="text" placeholder="Enter Email Address" />
                        <button data-aos="fade-up" className="btn flex" type="submit">
                           SEND <FiSend className="icon" />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="" className="logo flex">
                             <MdOutlineFastfood className="icon" />   M-food .
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam inventore eos fuga hic cum voluptatem minima, tempore non odio provident novis ipsam at, doloremque sed cupiditate ipsum in, atque soluta?
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <AiOutlineTwitter className="icon" />
                            <AiFillYoutube className="icon" />
                            <AiFillInstagram className="icon" /> 
                            <FaTripadvisor className="icon" />

                        </div>
                    </div>

                    <div className="footerLinks grid">

                           {/*Group One */}

                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">
                                Any question
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Customer service
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Call us
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Email us
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                App issue
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Payment
                            </li>
                        </div>

                         {/*Group Two */}

                         <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                               Most Search
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                The people
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Great wall
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Rainbow ice
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                BBQ factory
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Healthy bowl
                            </li>
                        </div>

                             {/*Group Three */}

                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">
                                MOST POPULAR
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Chinese
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Korean
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Mexico
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                America
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                French
                            </li>
                        </div>

                    </div>
                     
                     <div className="footerDiv flex">
                        <small>BEST FOOD ORDER WEBSITE</small>
                        <small>COPYRIGHTS RESERVED - Maomao - 2023</small>
                     </div>

                </div>
            </div>
        </section>
    )
}

export default Footer