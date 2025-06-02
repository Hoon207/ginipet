import axios from 'axios';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../style/login.css';
function Login(props) {
  const [form, setForm] = useState({
    username:'',
    password:'',
  })
  const navigate = useNavigate();
  const [error, setError] = useState('');  
  const handleChange = (e)=>{
    const {name, value} = e.target;
    setForm((prev)=>({
      ...prev,
      [name]:value
    } ))
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();

    try{const res = await axios.post('http://localhost:9070/login',form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', form.username);
      
      alert('로그인 성공');
      navigate('/ginipet');
    }
    catch(err){setError('로그인 실패: 아이디 또는 비밀번호를 확인하세요');}


  }


  return (
    <main>
     <form action="" method='post' onSubmit={handleSubmit} className='login_form'>
     <h2>로그인</h2> 
      <p>
        <label htmlFor="username">아이디</label>
        <input type="text" id="username"  required placeholder='아이디를 입력하세요' value={form.username}  name='username' onChange={handleChange}/>
      </p>

      <p>
        <label htmlFor="password">비밀번호</label>
        <input type="password" id="password" required  name="password" placeholder='아이디를 입력하세요'  value={form.password} onChange={handleChange} />
      </p>
      <p>
        <button type="submit" className='login_btn'>로그인</button>
      </p>
      {error && <p style={{color:'red', margin:'20px 0px'}}>{error}</p> }
      <p className='login_btns'>
      <Link to='/'>아이디 찾기</Link>
      <Link to='/'>비밀번호 찾기</Link>
      <Link to='/'>회원가입</Link>
    </p>
     </form>
  
    </main>
  );
}

export default Login;