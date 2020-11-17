import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoVinted from "../img/Vinted_logo.png";

const Header = ({ token, setUser }) => {
  return (
    <section className="header">
      <Link to="/">
        <img src={logoVinted} alt="logoVinted" />
      </Link>
      <section className="buttons">
        <div>
          {" "}
          {token ? (
            <button
              onClick={() => {
                setUser(null);
              }}
            >
              Se déconnecter
            </button>
          ) : (
            <div className="menu">
              <Link to="/signup">
                <button>S'inscrire</button>
              </Link>
              <Link to="/login">
                <button>Se connecter</button>
              </Link>
            </div>
          )}
        </div>
        <button>Vends tes articles</button>
      </section>
    </section>
  );
};

export default Header;
