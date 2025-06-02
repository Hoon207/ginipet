import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Nav(props) {
  const navigate =useNavigate();
  const username = localStorage.getItem('username'); //로컬 스토리지 값을 
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login');
    window.location.reload();// 갱신
  }
  return (
    <>
     <nav>
      <ul className='user_menu'>
      {username? (
            <span className='login_id' style={{color:'white', marginTop:'-5px'}}>
              <b>{username}</b>님 환영합니다.
              <button onClick={handleLogout} style={{marginLeft:'10px', border:'none', background:'#333', color:'white', fontSize:'16px'}}>로그아웃</button>
            </span>) : (<Link to='/login' style={{color:'white', textDecoration: 'none'}}>로그인</Link>
          )}
        <li><Link to='/join'>회원가입</Link></li>
        <li><Link to='/order'>주문조회</Link></li>
        <li><Link to='/cart'>장바구니</Link></li>
      </ul>
      </nav> 
    </>
  );
}

export default Nav;