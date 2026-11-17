import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import Home_sec1 from './components/home_sec1'
import { EffectCube } from 'swiper/modules';
import Home_sec2 from './components/home_sec2';
import Home_sec3 from './components/home_sec3';
import Home_sec4 from './components/home_sec4';
import Home_sec5 from './components/home_sec5';
import Footer from './components/footer';

export default  function App() {
  return (
    <>
       <Swiper
       direction='vertical'
        effect={'cube'}
        grabCursor={false}
        cubeEffect={{
          shadow: false,
          slideShadows: false,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Home_sec1/>
        </SwiperSlide>
        <SwiperSlide>
          <Home_sec2/>
        </SwiperSlide>
        <SwiperSlide>
          <Home_sec3/>
        </SwiperSlide>
        <SwiperSlide>
          <Home_sec4/>
        </SwiperSlide>
        <SwiperSlide>
          <Home_sec5/>
        </SwiperSlide>
        <SwiperSlide>
          <Footer/>
        </SwiperSlide>
      </Swiper>
    </>
  )
}


