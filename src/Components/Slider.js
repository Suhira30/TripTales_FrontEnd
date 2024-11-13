import React, { useRef } from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'bootstrap-icons/font/bootstrap-icons.css';
import C_Solotravel from '../Images/C_Solotravel.jpg';
import C_Family from '../Images/C_Family.jpg'
import C_Couples from "../Images/C_Couples.jpg";
import C_Frds from "../Images/C_Frds.jpg";
import C_Historical from "../Images/C_Historical.jpg";
import C_Jungle from "../Images/C_Jungle.jpg";
import C_Mountain from "../Images/C_Mountain.jpg";
import C_Ocean from "../Images/C_Ocean.jpg";
import C_Oldcity from "../Images/C_Oldcity.jpg";
import C_Road from "../Images/C_Road.jpg";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const MySwiper = () => {
  const navigate = useNavigate();
  const slideStyle = {
    width: '120px',
    height: '240px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px 10px 10px 10px',
    
  };
const imageStyle={
    width: '100%',
    height: '100%',
    borderRadius: '10px 10px 10px 10px',
    opacity:'0.95'
}
  const swiperRef = useRef(null);

  return (
    <div style={{ position: 'relative', padding: '0px', margin: '70px 150px' }}>
      <button
        className="swiper-button-prev-custom"
        style={{
          position: 'absolute',
          top: '50%',
          left: '-50px',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '2rem', 
          color: '#000', 
          opacity:'0.8'
        }}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <i className="bi bi-arrow-left-circle"></i>
      </button>

      <button
        className="swiper-button-next-custom"
        style={{
          position: 'absolute',
          top: '50%',
          right: '-50px',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '2rem', 
          color: '#000', 
          opacity:'0.8'
        }}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <i className="bi bi-arrow-right-circle"></i>
      </button>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={15}
        slidesPerView={6}
        pagination={{ clickable: true }} 
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
      >
      <SwiperSlide style={slideStyle}><img src={C_Road} style={{...imageStyle}} onClick={()=>navigate('/ROAD')}/>
      <div style={{ position: 'absolute',  textAlign: 'center', background: 'rgba(0, 0, 0, 0.3)', color: '#fff', padding: '8px' }}>
      <Link to={"/ROAD"} 
      style={{
        textDecoration:"none",
        color:"white"
      }}>
      Road travel</Link>
      </div></SwiperSlide>
      <SwiperSlide style={slideStyle}><img src={C_Ocean} style={{...imageStyle}} onClick={()=>navigate('/oceanTravel')}/>
      <div style={{ position: 'absolute',  textAlign: 'center', background: 'rgba(0, 0, 0, 0.3)', color: '#fff', padding: '8px' }}>
      <Link to={"/oceanTravel"} 
      style={{
        textDecoration:"none",
        color:"white"
      }}>Ocean travel</Link>
      </div></SwiperSlide>
      <SwiperSlide style={slideStyle}><img src={C_Mountain} style={{...imageStyle}} onClick={()=>navigate('/mountaintravel')}/>
      <div style={{ position: 'absolute',  textAlign: 'center', background: 'rgba(0, 0, 0, 0.3)', color: '#fff', padding: '8px' }}>
      <Link to={"/mountaintravel"} 
      style={{
        textDecoration:"none",
        color:"white"
      }}>Mountain travel</Link>
      </div></SwiperSlide>
      <SwiperSlide style={slideStyle}><img src={C_Jungle} style={{...imageStyle}} onClick={()=>navigate('/jungleTravel')}/>
      <div style={{ position: 'absolute',  textAlign: 'center', background: 'rgba(0, 0, 0, 0.3)', color: '#fff', padding: '8px' }}>
      <Link to={"/jungleTravel"} 
      style={{
        textDecoration:"none",
        color:"white"
      }}>Jungle travel</Link>
      </div></SwiperSlide>
      <SwiperSlide style={slideStyle}><img src={C_Oldcity} style={{...imageStyle}} onClick={()=>navigate('/oldCityTravel')}/>
      <div style={{ position: 'absolute',  textAlign: 'center', background: 'rgba(0, 0, 0, 0.3)', color: '#fff', padding: '8px' }}>
      <Link to={"/oldCityTravel"} 
      style={{
        textDecoration:"none",
        color:"white"
      }}>Old City travel</Link>
      </div></SwiperSlide>
      <SwiperSlide style={slideStyle}><img src={C_Historical} style={{...imageStyle}} onClick={()=>navigate('/historicalTravel')}/>
      <div style={{ position: 'absolute',  textAlign: 'center', background: 'rgba(0, 0, 0, 0.3)', color: '#fff', padding: '8px' }}>
      <Link to={"/historicalTravel"} 
      style={{
        textDecoration:"none",
        color:"white"
      }}>Historical travel</Link>
      </div></SwiperSlide>
        <SwiperSlide style={slideStyle}><img src={C_Solotravel} style={{...imageStyle}} onClick={()=>navigate('/soloTravel')}/>
        <div style={{ position: 'absolute',  textAlign: 'center', background: 'rgba(0, 0, 0, 0.3)', color: '#fff', padding: '8px' }}>
        <Link to={"/soloTravel"} 
      style={{
        textDecoration:"none",
        color:"white"
      }}>Solo travel</Link>
        </div> </SwiperSlide>
        <SwiperSlide style={slideStyle}><img src={C_Family} style={{...imageStyle}} onClick={()=>navigate('/familyTravel')}/>
        <div style={{ position: 'absolute',  textAlign: 'center', background: 'rgba(0, 0, 0, 0.3)', color: '#fff', padding: '8px' }}>
        <Link to={"/familhTravel"} 
      style={{
        textDecoration:"none",
        color:"white"
      }}>Family travel</Link>
        </div></SwiperSlide>
        <SwiperSlide style={slideStyle}><img src={C_Couples} style={{...imageStyle}} onClick={()=>navigate('/coupleTravel')}/>
        <div style={{ position: 'absolute',  textAlign: 'center', background: 'rgba(0, 0, 0, 0.3)', color: '#fff', padding: '8px' }}>
        <Link to={"/coupleTravel"} 
      style={{
        textDecoration:"none",
        color:"white"
      }}>Couples travel</Link>
        </div></SwiperSlide>
        <SwiperSlide style={slideStyle}><img src={C_Frds} style={{...imageStyle}} onClick={()=>navigate('/friendsTravel')}/>
        <div style={{ position: 'absolute',  textAlign: 'center', background: 'rgba(0, 0, 0, 0.3)', color: '#fff', padding: '8px' }}>
        <Link to={"/friendsTravel"} 
      style={{
        textDecoration:"none",
        color:"white"
      }}>Friends travel</Link>
        </div></SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default MySwiper;
