import React from "react";
import './assets/styles/changePassword.css'

const ChangePassword = () => {
    return (
        <div className="main-container">
            <div className="change-password-form-container">
                <div className="change-password-form">
                    <div className="logo">
                        <img src="/images/alta-logo.png" alt="Alta Logo" />
                    </div>
                    <div className="reset-password-form-container">
                        <div className="form-title">
                            <span className="span-15">Đặt lại mật khẩu mới</span>
                        </div>
                        <div className="reset-password-form-container">
                            <div className="reset-password-form">
                                <span className="span-15">Mật khẩu mới *</span>
                                <div className="change-pwd-input">
                                    <input className="new-pwd" type="password" id="password" name="password" placeholder="••••••••" />
                                    <div className="hide-img">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" className="lucide lucide-eye-off">
                                            <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                                            <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                                            <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                                            <path d="m2 2 20 20" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="confirm-password-form">
                                <span className="span-15">Nhập lại mật khẩu *</span>
                                <div className="confirm-pwd-input">
                                    <input className="confirm-pwd" type="password" id="password" name="password" placeholder="••••••••" />
                                    <div className="hide-img">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" className="lucide lucide-eye-off">
                                            <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                                            <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                                            <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                                            <path d="m2 2 20 20" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-btn">
                        <button className="confirm-btn">Xác nhận</button>
                    </div>
                </div>
            </div>
            <div className="frame-bg-container">
                <div className="frame-bg">
                    <img className="frame-img" src="/images/Frame.png" alt="Frame Alta" />
                </div>
            </div>
        </div>
    )
};

export default ChangePassword;