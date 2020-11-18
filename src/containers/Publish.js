import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const Publish = ({ token }) => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState(0);

  const formData = new FormData();
  formData.append("picture", file);
  formData.append("title", title);
  formData.append("description", description);
  formData.append("brand", brand);
  formData.append("size", size);
  formData.append("color", color);
  formData.append("condition", condition);
  formData.append("city", city);
  formData.append("price", price);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
      formData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(response.data);
  };

  return token ? (
    <div className="publish">
      <h2>Vends ton article</h2>
      <form onSubmit={handleSubmit}>
        <div className="fileDiv">
          <label htmlFor="file">Ajouter une photo </label>
          <label htmlFor="file">+</label>
          <input
            id="file"
            className="file"
            type="file"
            onChange={(event) => setFile(event.target.files[0])}
          />
        </div>
        <br />
        <div className="productName">
          <div>
            <span>Titre:</span>
            <span>Description: </span>
          </div>
          <div>
            <input
              type="text"
              placeholder="nom du produit"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <br />
            <textarea
              placeholder="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              name=""
              id=""
              cols="80"
              rows="10"
            />
          </div>
        </div>
        <br />
        <div className="infos">
          <div>
            <span>Marque:</span>
            <span>Taille:</span>
            <span>Couleur(s):</span>
            <span>État:</span>
            <span>Lieu:</span>
          </div>
          <div>
            <input
              type="text"
              placeholder="Marque"
              value={brand}
              onChange={(event) => setBrand(event.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Taille"
              value={size}
              onChange={(event) => setSize(event.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Couleur(s)"
              value={color}
              onChange={(event) => setColor(event.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="État"
              value={condition}
              onChange={(event) => setCondition(event.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Lieu"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
        </div>
        <br />
        <div className="prix">
          <div>
            <span>Prix (en €):</span>
          </div>
          <div>
            <input
              type="number"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>

          <br />
        </div>
        <button type="submit">Ajouter l'article</button>
      </form>
    </div>
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { fromPublish: true },
      }}
    />
  );
};

export default Publish;
