import axios from "axios";
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";


import pic1 from '../../design/images/image1.jpg';
import pic2 from '../../design/images/image2.jpg';
SwiperCore.use([Navigation, Pagination])
async function ApiTest () {
    return await axios.get('backend/Hello?name=LordYuk');
}


const HomeContainer = () => {
    const [ApiValue, setApiValue] = useState(null); 
    
    useEffect( () => {
            ApiTest().then( 
                function (resp) {
                    setApiValue(resp.data);
                }).catch(function (error) {
                    setApiValue("GET FAIL" + error);
                });
            

    }, [])
    
    return (
        <Container className="panel" >
            <Swiper
                className="banner"
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide>Api Result: {ApiValue}<br/><br/><br/><br/><br/><br/><br/><br/></SwiperSlide>
                <SwiperSlide><img src={pic1} alt="pic1 logo"/></SwiperSlide>
                <SwiperSlide><img src={pic2} alt="pic2 logo"/></SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
            
        </Container>
        

    )
}

export default HomeContainer;