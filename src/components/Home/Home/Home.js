import { Button, Grid } from "@mui/material";
import "@splidejs/splide/dist/css/splide.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SwiperCore, {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar
} from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { locationData } from "../../../data";
import background from "../../../Rectangle1.png";
import Items from "../Item/Items";
import "./Home.css";
const Home = () => {
  SwiperCore.use([Autoplay]);
  let navigate = useNavigate();
  const [product, setProduct] = useState("");
  const handleClick = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <div>
      <div className="bg-opacity"> </div>
      <div className="bg-img">
        <img src={background} alt="" />
      </div>
      <div className="content" style={{ placeItems: "center", color: "white" }}>
        <div style={{ width: "80%", margin: "5rem auto" }}>
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm={5}>
              <div>
                <div nowrap style={{ fontSize: "75px", fontWeight: "bold" }}>
                  {locationData[product]?.name}
                </div>
                <p style={{fontSize:'25px',margin:'1rem 0 2rem', color:'rgb(187 187 187)'}}>{locationData[product]?.desc.slice(0, 100)}...</p>
                <Button variant="contained" style={{background:'#ffeb3b'}} >
                  <Link style={{textDecoration:'none', color:'black', fontWeight:'bold'}} to={`/details/${product + 1}`}>Booking..</Link>
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={7} style={{cursor:'pointer'}}>
              <Swiper
                navigation
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                autoplay={{ delay: 2000, disableOnInteraction: true }}
                
                spaceBetween={20}
                slidesPerView={1}
                onSlideChange={(e) => setProduct(e.activeIndex)}
                onSwiper={(swiper) => setProduct(swiper.activeIndex)}
              >
                {locationData.map((item) => (
                  <SwiperSlide key={Math.random()}>
                    <Items item={item} handleClick={handleClick} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Home;
