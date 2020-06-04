import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { FaWpforms } from "react-icons/fa";
import pag from "../form";

export default function Header() {
  return (
    <div className="header">
      <div className="h-container">
        <Link to="/">
          <div onClick={pag(1)} className="h-title">
            <FaWpforms className="h-icon"></FaWpforms>
            <h1>Formulário de Devolução</h1>
          </div>
        </Link>

        <Link to="/">
          <div className="left-header">
            <a className="a-header" href="http://192.168.0.217">
              Voltar para Intranet
            </a>
            <img
              src="https://www.tintacon.com.br/uploads/tintacon/design/LogoSite1.png"
              alt="logo Tintacon"
              width="130px"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
