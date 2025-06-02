import React from 'react';
import { Link } from 'react-router-dom';
import '../style/gnb.css'
function Gnb(props) {
  return (
    <main>
     <ul className='gnb'>
     <li><Link to='/shop'>지니펫쇼핑몰 </Link></li>
        <li><Link to='/brand'>브랜드 소개</Link></li>
        <li><Link to='/info'>반려견 정보</Link></li>
        <li><Link to='/event'>이벤트</Link></li>
        <li><Link to='/customer'>고객지원</Link></li>
      </ul> 
    </main>
  );
}

export default Gnb;