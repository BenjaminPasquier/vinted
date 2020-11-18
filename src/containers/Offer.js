import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import defaultNoPicture from "../img/defaultNoPicture.png";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <section className="offerResult">
        <div className="photo">
          <img src={data.product_pictures[0].secure_url} />
        </div>
        <div className="description">
          <section>
            <div>
              <p>{data.product_price} €</p>
              <section>
                <div>
                  <p>MARQUE</p>
                  <p>TAILLE</p>
                  <p>ETAT</p>
                  <p>COULEUR</p>
                  <p>EMPLACEMENT</p>
                </div>
                <div>
                  <p>{data.product_details[0].MARQUE}</p>
                  <p>{data.product_details[1].TAILLE}</p>
                  <p>{data.product_details[2].ÉTAT}</p>
                  <p>{data.product_details[3].COULEUR}</p>
                  <p>{data.product_details[4].EMPLACEMENT}</p>
                </div>
              </section>
            </div>
            <div>
              <p>{data.product_name}</p>
              <p>{data.product_description}</p>
              <span>
                <img src={data.owner.account.avatar.secure_url} />
                <p>{data.owner.account.username} </p>
              </span>
            </div>
          </section>
          <section>
            <Link to="/payment">
              <button>Acheter</button>
            </Link>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Offer;
