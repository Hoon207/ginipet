import React from 'react';
import '../style/footer.css'
function Footer(props) {
  return (
    <footer>
      <div className='qwe'>
      <nav className='footer_lnb_wrap'>
        <ul className='footer_lnb'>
          <li>개인정보처리방침</li>
          <li>쇼핑몰약관</li>
          <li>공지사항</li>
        </ul>
      </nav>
        <div style={{display:'flex'}}>
         <div className='footer_wrap'>
        </div>
      </div>
      </div>

      <div className='footer_bottom'>
        <div className='footer_bottom1'>
              <div className='tel'>
                <h3>고객센터</h3>
                <p className='tel_num'>02-2166-7770</p>
                <p>평일 10:00 ~ 17:00</p>
                <p>(점심 12:00 ~ 13:00)</p>
              </div>

              <div className='insta'>
               <a href="https://www.instagram.com/ginipet/">
                    <img src={`${process.env.PUBLIC_URL}/images/insta.png`} alt="인스타" id='insta'/>
               </a>
                 
              </div>

              <div className='family'>
                <select name="family" id="family">
                  <option value="">FAMILY SITE</option>
                </select>
              </div>
        </div>
        <hr className='grey' />

        <div className=' class="footer_bottom2'>
          <img src={`${process.env.PUBLIC_URL}/images/kgc.png`} alt="kgc로고" id='kgc' />
          <div className='address'>
          경기도 과천시 과천대로 7길 65, 과천상상자이타워 A-105~108호(1층)<br></br>상호 및 대표자 : (주)케이지씨라이프앤진,   정철<br></br>사업자등록번호 : 211-87-38806<br></br>통신판매신고번호 : 제 2024-경기과천-0227호<br></br>사업자 정보 확인l호스팅서비스제공자 : (주)케이지씨라이프앤진<br></br>Email: ginipet@kgclifengin.com<br></br>ⓒ kgclifengin Corp.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;