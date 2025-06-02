import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../style/main.css'
import {Link} from 'react-router-dom';
import '../style/common.css'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
function Main(props) {
  return (
    <main>
      <section id="sec1">
      <h2>메인슬라이드</h2>
     <Swiper
        modules={[Navigation,Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        slidesPerGroup={2}
        navigation
        autoplay={{delay:1000}}
        pagination={{clickable:true}}
        className='giniSlide'
     >
      <SwiperSlide className='gslide'>
          <img src={`${process.env.PUBLIC_URL}/images/slide1.jpg`} alt="슬라이드1" />
      </SwiperSlide>

      <SwiperSlide className='gslide gslide2'>
          <img src={`${process.env.PUBLIC_URL}/images/slide2.png`} alt="슬라이드2" className='slide2over' />
          <img src={`${process.env.PUBLIC_URL}/images/slide2bg.png`} alt="슬라이드2" className='slide2bg' />
      </SwiperSlide>
      </Swiper> 
      </section>

      <section id="sec2">
        <h2 className='sec2_title'>
          <img src={`${process.env.PUBLIC_URL}/images/shop_icon.png`} alt="샵아이콘" id='shop_icon' />
          지니펫 쇼핑하러가기
          </h2>
        <Link to='/shop' id='shop'>바로가기</Link>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          autoplay={{delay:1000}}
          scrollbar={{draggable:true}}
          className='shopslide'
        >
        <SwiperSlide className='productslide'>
          <div className='qwe'>
            <div className="img_wrap">
              <img src={`${process.env.PUBLIC_URL}/images/product1.jpg`} alt="" />
            </div>
            <div className='info_wrap'>
             <h2>[사료]홀리스틱</h2>
             <h3>홍삼&국내산 오리(1.2kg)</h3>
             <p><span className='price'>22,000</span>원</p>
            </div>
          </div>

          <div className='qwe'>
            <div className="img_wrap">
              <img src={`${process.env.PUBLIC_URL}/images/product1_1.jpg`} alt="" />
            </div>
            <div className='info_wrap'>
             <h2>[사료]홀리스틱</h2>
             <h3>홍삼&국내산 오리(5.2kg)</h3>
             <p><span className='price'>78,000</span>원</p>
            </div>
          </div>
         
          </SwiperSlide>

          <SwiperSlide className='productslide'>
          <div className='qwe'>
            <div className="img_wrap">
              <img src={`${process.env.PUBLIC_URL}/images/product2.jpg`} alt="" />
            </div>
            <div className='info_wrap'>
             <h2>[사료]홀리스틱</h2>
             <h3>홍삼&호주산 양고기(1.2kg)</h3>
             <p><span className='price'>22,000</span>원</p>
            </div>
          </div>

          <div className='qwe'>
            <div className="img_wrap">
              <img src={`${process.env.PUBLIC_URL}/images/product2_1.jpg`} alt="" />
            </div>
            <div className='info_wrap'>
             <h2>[사료]홀리스틱</h2>
             <h3>홍삼&호주산 양고기(5.2kg)</h3>
             <p><span className='price'>78,000</span>원</p>
            </div>
          </div>
         
          </SwiperSlide>

          <SwiperSlide className='productslide'>
          <div className='qwe'>
            <div className="img_wrap">
              <img src={`${process.env.PUBLIC_URL}/images/product3.jpg`} alt="" />
            </div>
            <div className='info_wrap'>
             <h2>[사료]홀리스틱</h2>
             <h3>홍삼&신선한 연어(1.2kg)</h3>
             <p><span className='price'>22,000</span>원</p>
            </div>
          </div>

          <div className='qwe'>
            <div className="img_wrap">
              <img src={`${process.env.PUBLIC_URL}/images/product3_1.jpg`} alt="" />
            </div>
            <div className='info_wrap'>
             <h2>[사료]홀리스틱</h2>
             <h3>홍삼&신선한 연어(1.2kg)</h3>
             <p><span className='price'>22,000</span>원</p>
            </div>
          </div>
         
          </SwiperSlide>

          <SwiperSlide className='productslide'>
          <div className='qwe'>
            <div className="img_wrap">
              <img src={`${process.env.PUBLIC_URL}/images/product4.jpg`} alt="" />
            </div>
            <div className='info_wrap'>
             <h2>[사료]유기농</h2>
             <h3>유기농&균형과조화(1kg)</h3>
             <p><span className='price'>22,000</span>원</p>
            </div>
          </div>

          <div className='qwe'>
            <div className="img_wrap">
              <img src={`${process.env.PUBLIC_URL}/images/product4_1.jpg`} alt="" />
            </div>
            <div className='info_wrap'>
             <h2>[사료]유기농</h2>
             <h3>유기농&균형과조화(6kg)</h3>
             <p><span className='price'>110,000</span>원</p>
            </div>
          </div>
         
          </SwiperSlide>

          <SwiperSlide className='productslide'>
          <div className='qwe'>
            <div className="img_wrap">
              <img src={`${process.env.PUBLIC_URL}/images/product5.jpg`} alt="" />
            </div>
            <div className='info_wrap'>
             <h2>[사료]유기농</h2>
             <h3>[OR]유기농&활기찬일상(1kg)</h3>
             <p><span className='price'>22,000</span>원</p>
            </div>
          </div>

          <div className='qwe'>
            <div className="img_wrap">
              <img src={`${process.env.PUBLIC_URL}/images/product5_1.jpg`} alt="" />
            </div>
            <div className='info_wrap'>
             <h2>[사료]오리지널</h2>
             <h3>[OR]유기농&활기찬일상(6kg)</h3>
             <p><span className='price'>110,000</span>원</p>
            </div>
          </div>
         
          </SwiperSlide>

          <SwiperSlide className='productslide'>
          <div className='qwe'>
            <div className="img_wrap">
              <img src={`${process.env.PUBLIC_URL}/images/product6_1.jpg`} alt="" />
            </div>
            <div className='info_wrap'>
             <h2>[사료]오리지널</h2>
             <h3>홍삼넣은 연어와 닭고기(1kg)</h3>
             <p><span className='price'>18,000</span>원</p>
            </div>
          </div>

          <div className='qwe'>
            <div className="img_wrap">
              <img src={`${process.env.PUBLIC_URL}/images/product6.jpg`} alt="" />
            </div>
            <div className='info_wrap'>
             <h2>[사료]오리지널</h2>
             <h3>홍삼 넣은 연어와 닭고기(6kg)</h3>
             <p><span className='price'>78,000</span>원</p>
            </div>
          </div>
         
          </SwiperSlide>

          <SwiperSlide className='productslide'>
          <div className='qwe'>
            <div className="img_wrap">
              <img src={`${process.env.PUBLIC_URL}/images/product7.jpg`} alt="" />
            </div>
            <div className='info_wrap'>
             <h2>[영양제]더케어</h2>
             <h3>더케어 관절&근육(120g)</h3>
             <p><span className='price'>19,000</span>원</p>
            </div>
          </div>

          <div className='qwe'>
            <div className="img_wrap">
              <img src={`${process.env.PUBLIC_URL}/images/product7_1.jpg`} alt="" />
            </div>
            <div className='info_wrap'>
             <h2>[간식]더스낵</h2>
             <h3>홍삼 함유 연어맛 저키</h3>
             <p><span className='price'>5,000</span>원</p>
            </div>
          </div>
         
          </SwiperSlide>
          <SwiperSlide className='productslide'>
          <div className='qwe'>
            <div className="img_wrap">
              <img src={`${process.env.PUBLIC_URL}/images/product8.jpg`} alt="" />
            </div>
            <div className='info_wrap'>
            <h2>[간식]더스낵</h2>
            <h3>홍삼 함유 소고기맛 저키(80g)</h3>
             <p><span className='price'>5,000</span>원</p>
            </div>
          </div>

          <div className='qwe'>
            <div className="img_wrap">
              <img src={`${process.env.PUBLIC_URL}/images/product8_1.png`} alt="" />
            </div>
            <div className='info_wrap'>
             <h2>[간식]더스낵</h2>
             <h3>멍블리타임 해산물 4개입 560g </h3>
             <p><span className='price'>20,000</span>원</p>
            </div>
          </div>
         
          </SwiperSlide>

          <SwiperSlide className='productslide'>
          <div className='qwe'>
            <div className="img_wrap">
              <img src={`${process.env.PUBLIC_URL}/images/product9.jpg`} alt="" />
            </div>
            <div className='info_wrap'>
             <h2>[간식]더스낵</h2>
             <h3>멍블리타임 황태 40개입 560g</h3>
             <p><span className='price'>20,000</span>원</p>
            </div>
          </div>

          <div className='qwe'>
            <div className="img_wrap">
              <img src={`${process.env.PUBLIC_URL}/images/product9_1.jpg`} alt="" />
            </div>
            <div className='info_wrap'>
             <h2>[영양제]더캣 더케어</h2>
             <h3>더캣 더케어 헤어볼&장건강 60g</h3>
             <p><span className='price'>12,000</span>원</p>
            </div>
          </div>
         
          </SwiperSlide>

          <SwiperSlide className='productslide'>
          <div className='qwe'>
            <div className="img_wrap">
              <img src={`${process.env.PUBLIC_URL}/images/product10.jpg`} alt="" />
            </div>
            <div className='info_wrap'>
            <h2>[영양제]더캣 더케어</h2>
            <h3>더캣 더케어 유리너리&스트레스 60g</h3>
             <p><span className='price'>12,000</span>원</p>
            </div>
          </div>

          <div className='qwe'>
            <div className="img_wrap">
              <img src={`${process.env.PUBLIC_URL}/images/product10_1.jpg`} alt="" />
            </div>
            <div className='info_wrap'>
            <h2>[간식]더스낵</h2>
            <h3>냥블리타임 참치 140g</h3>
             <p><span className='price'>5,000</span>원</p>
            </div>
          </div>
         
          </SwiperSlide>

        </Swiper>

\
      </section>

      <section id="sec3">
        <div className='banner_wrap'>
          <div className='sec3_left'>
                  <img src={`${process.env.PUBLIC_URL}/images/sec3_img.png`} id='left_img'  alt="지니펫스토리 작은 이미지" />
                <h3>지니펫 스토리</h3>
                <p>소중한 반려견을 위한<br></br>지니펫의 다양한 소식을 만나보세요!</p>
                <p>
                  <Link to='/detail' id='detail'>자세히보기</Link>
                </p>
          </div>

          <div className='sec3_right'>
            <img src={`${process.env.PUBLIC_URL}/images/sec3_banner.png`} alt="섹션3 배너사진" />
          </div>
        </div>
      </section>

      <section id='sec4'>
        <h2>지니펫 in스타</h2>
        <h3>지니펫의 다양한 소식과 정보를 만나보세요</h3>
        <div className='sec4_wrap'>
            <div className='sec4_left'>
                <div className='sec4_left_img'><img src={`${process.env.PUBLIC_URL}/images/sec4_img1.jpg`} alt="" /></div>
                <div className='sec4_right_img'>
                <img src={`${process.env.PUBLIC_URL}/images/sec4_img1_1.jpg`} alt="" />
                </div>
            </div>

            <div className='sec4_right'>
            <div className='sec4_left_img'><img src={`${process.env.PUBLIC_URL}/images/sec4_img2.jpg`} alt="" /></div>
            <div className='sec4_right_img'><img src={`${process.env.PUBLIC_URL}/images/sec4_img2_1.jpg`} alt="" /></div>
            </div>
        </div>
      </section>
      <button id="top">TOP</button>
    </main>
  );
}

export default Main;