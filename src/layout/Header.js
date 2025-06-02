import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import UserNav from '../components/UserNav';
import Gnb from '../components/Gnb';
import '../style/header.css';
import {Link} from 'react-router-dom';
function Header(props) {
  const username = localStorage.getItem('username'); //로컬 스토리지 값을 변수에 담는다
  const [open, setOpen]= useState(false);
  const navigate =useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login');
    window.location.reload();// 갱신
  }
  return (
    <header>
      <div className='header_wrap'>
      <Link to='/ginipet'>
      <img src={`${process.env.PUBLIC_URL}/images/logo_color.png`} alt="로고" id='logo_color' />
      </Link>
        <UserNav />
        <Gnb /> 
      </div>
      <img src={`${process.env.PUBLIC_URL}/images/toggle.png`} 
      alt="토글버튼" style={{zIndex:'100'}} id='toggle' onClick={()=>setOpen(true)}/>
      <img src={`${process.env.PUBLIC_URL}/images/cart.png`} alt="장바구니" id="cart" />

      <nav className='mobile_gnb' style={{left:open? '0%': '-100%'}}>
        <img src={`${process.env.PUBLIC_URL}/images/btn_close.png`} alt="닫기버튼" id="close" onClick={()=>setOpen(false)} />
        <ul className='mobile_gnb_menu'>
          <li><Link to='/shop' className='mobile_gnb_shop'>지니펫 쇼핑몰</Link></li>
          <li><Link to='/brand'  className='mobile_gnb_brand'>브랜드 소개</Link></li>
          <li><Link to='/info'  className='mobile_gnb_info'>반려견 정보</Link></li>
          <li><Link to='/event'  className='mobile_gnb_event'>이벤트</Link></li>
          <li><Link to='/customer' className='mobile_gnb_customer'>고객지원</Link></li>
        </ul>

        <div>
          <ul className='mobile_user_menu'>
                  {username? (
                        <span className='login_id' style={{color:'white', marginTop:'-5px'}}>
                          <b>{username}</b>님 환영합니다.
                          <button onClick={handleLogout} style={{marginLeft:'10px', border:'none', background:'#333', color:'white', fontSize:'16px'}}>로그아웃</button>
                        </span>) : (<Link to='/login' style={{color:'white', textDecoration: 'none'}}>로그인</Link>
                      )}
            <li>회원가입</li>
            <li>주문조회</li>
            <li>장바구니</li>
          </ul>
         
        </div>
      </nav>
    </header>
  );
}

export default Header;