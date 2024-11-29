import React from "react";
import InputForm from "../InputForm/InputForm";
import "./style.css";
import logo from '../../assets/logo.png';

export default function AppHeader() {
    return (

        <header className="app-header bg-dark text-white">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-6 col-md-4">
                        <a href="/">
                            <img
                                src={logo}
                                alt="Logo"
                                className="logo-img"
                            />
                        </a>
                    </div>


                    <InputForm />

                </div>
            </div>
        </header>
    );
}
