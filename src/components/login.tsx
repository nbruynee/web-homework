import React from "react";
import "./login.css"

const Login = () => {
    return (
        <div className="main-container">
            <div className="login-form">
                <div className="logo">
                    <img src="/images/alta-logo.png" alt="Alta Logo" />
                </div>
                <div className="input-form">
                    <div className="username">
                        <span className="span-15">Tên đăng nhập *</span>
                        <input className="user-input" type="text" placeholder="abc@gmail.com" />
                    </div>
                    <div className="password">
                        <span className="span-15">Mật khẩu *</span>
                        <input className="pwd-input" type="password" id="password" name="password" placeholder="••••••••" />
                        <img src="/images/eye-off.png" alt="Toggle password visibility"></img>
                    </div>
                </div>
                <div className="forgot-password">
                    <span>Quên mật khẩu ?</span>
                </div>
                <button className="submit-btn">Đăng nhập</button>
            </div>
            <div className="image-section">
                <img className="bg-login" src="./images/alta-login.png" alt="Description about system" />
                <div className="text-overlay">
                    <span className="text-1">Hệ thống</span>
                    <br/>
                    <span className="text-2">QUẢN LÝ XẾP HÀNG</span>
                </div>
            </div>
        </div>
    )
}

export default Login;