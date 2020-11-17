import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );

      if (response.data.token) {
        setUser(response.data.token);
        history.push("/");
      } else {
        alert("Une erreur est suvenue");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login">
      <h2>Se connecter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onchange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br />
        <input type="submit" value="Se connecter"></input>
      </form>
      <Link to="/signup">
        <p>Vous n'avez pas de compte? créez en un!</p>
      </Link>
    </div>
  );
};

export default Login;
