import React from "react";
import './assets/styles/login.css'

const Login = () => {
    return (
        <div className="main-container">
            <div className="login-form-container">
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
                            <div className="hide-pwd">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-eye-off">
                                    <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                                    <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                                    <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                                    <path d="m2 2 20 20" />
                                </svg>
                            </div>

                        </div>
                    </div>
                    <div className="forgot-password">
                        <span>Quên mật khẩu ?</span>
                    </div>
                    <div className="btn-container">
                        <button className="submit-btn">Đăng nhập</button>
                    </div>
                </div>
            </div>
            <div className="image-section">
                <img className="bg-login" src="./images/alta-login.png" alt="Description about system" />
                <div className="text-overlay">
                    <span className="text-1">Hệ thống</span>
                    <br />
                    <span className="text-2">QUẢN LÝ XẾP HÀNG</span>
                </div>
            </div>
        </div>
    )
}

export default Login;