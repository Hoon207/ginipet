import axios from 'axios';
import React, { useState } from 'react';
import '../style/join.css';

function Join() {
  const [form, setForm] = useState({
    username: '',
    password1: '',
    password2: '',
    email: '',
    tel: '',
    agree: false
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError('');
    setSuccess('');
  };

  const submit = async (e) => {
    e.preventDefault();
  

    if (form.password1 !== form.password2) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      await axios.post('http://localhost:9070/register', {
        username: form.username,
        password1: form.password1,
        tel: form.tel,
        email: form.email
      });

      setSuccess('회원가입 완료');
      setForm({
        username: '',
        password1: '',
        password2: '',
        tel: '',
        email: '',
        agree: false
      });
      
    } catch (err) {
      setError('회원가입 실패: 아이디가 이미 존재하거나 서버 오류');
    }
  };

  return (
    <main>
      <form className="join_form" onSubmit={submit} method='post'>
        <h2 className="join_title">회원가입</h2>

        <p>
          <input
            type="text"
            name="username"
            id="username"
            required
            onChange={handleChange}
            value={form.username}
            placeholder="아이디를 입력하세요"
          />
        </p>

        <p>
          <input
            type="password"
            name="password1"
            id="password1"
            required
            onChange={handleChange}
            value={form.password1}
            placeholder="비밀번호를 입력하세요"
          />
        </p>

        <p>
          <input
            type="password"
            name="password2"
            id="password2"
            required
            onChange={handleChange}
            value={form.password2}
            placeholder="비밀번호를 다시 입력하세요"
          />
        </p>

        <p>
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={handleChange}
            value={form.email}
            placeholder="이메일 주소를 입력하세요"
          />
        </p>

        <p>
          <input
            type="tel"
            name="tel"
            id="tel"
            pattern="^010-\d{4}-\d{4}$"
            required
            onChange={handleChange}
            value={form.tel}
            placeholder="예: 010-1234-5678"
          />
        </p>

        <p>
          <label htmlFor="agree">개인정보처리방침 동의</label>
          <input
            type="checkbox"
            name="agree"
            id="agree"
            required
            onChange={handleChange}
            checked={form.agree}
          />
        </p>

        <button type="submit" className="join_btn">회원가입</button>

        {error && <p className="error" style={{color:'red'}}>{error}</p>}
        {success && <p className="success" style={{color:'green', fontWeight:'bold', marginTop:'20px'}}>{success}</p>}
      </form>
    </main>
  );
}

export default Join;
