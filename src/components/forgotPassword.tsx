import React from "react";
import "./assets/styles/forgotPassword.css"

const ForgotPassword = () => {
    return (
        <div className="main-container">
            <div className="forget-password-form-container">
                <div className="forget-password-form">
                    <div className="logo">
                        <img src="/images/alta-logo.png" alt="Alta Logo" />
                    </div>
                    <div className="reset-password-form-container">
                        <div className="title-form">
                            <span className="span-15">Đặt lại mật khẩu</span>
                        </div>
                        <div className="reset-password-form">
                            <span className="span-15">Vui lòng nhập email để đặt lại mật khẩu của bạn *</span>
                            <input className="user-input" type="text" placeholder="abc@gmail.com" />
                        </div>
                    </div>
                    <div className="container-btn">
                        <button className="cancel-btn">Hủy</button>
                        <button className="continue-btn">Tiếp tục</button>
                    </div>
                </div>
            </div>
            <div className="frame-bg-container">
                <div className="frame-bg">
                    <img className="frame-img" src="/images/Frame.png" alt="Frame Alta"/>
                </div>
            </div>
        </div>
    )
};

export default ForgotPassword;