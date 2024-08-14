import React, { useState } from 'react';
import '../Login.css'; // ไฟล์ CSS สำหรับจัดรูปแบบ
import { Link } from 'react-router-dom';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // ตรวจสอบข้อมูลการเข้าสู่ระบบ (ในที่นี้ สมมติว่าส่งข้อมูลไปยัง API)
      console.log('Username:', username);
      console.log('Password:', password);
    };
  
  return (
    <div className="app-container">
      <div className="login-box">
        <div className="user-icon">
          <img src="image/logo.jpg" ></img>
        </div>
        <div className='text'>
        <h2 >สำนักงานตำรวจแห่งชาติ</h2>
        <p>SMART TICKET</p>
        </div>

        <div className="input-group">
          <label htmlFor="username" ></label>
          <input placeholder='ชื่อผู้ใช้'
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="password"></label>
          <input placeholder='รหัสผ่าน'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-group">
          <div className='list-password'>
          <div className='remember'><input type='checkbox' className='remem'
          ></input>จำรหัสผ่าน</div>
          <div className='forgot'>ลืมรหัสผ่าน </div>
          </div>
        </div>

        <button className="log" onClick={handleLogin}>เข้าสู่ระบบ</button>
      </div>
    </div>
  )
}

export default Login