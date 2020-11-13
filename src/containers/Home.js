import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header";

const Home = () => {
  const [data, setData] = useState({ useState });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <Header />
      <section className="intro">
        <div>
          <p>Prêts à faire du tri dans vos placards ?</p>
          <button>Commencez à vendre</button>
        </div>
      </section>
      {/* <Link to={"/offer"}>Go to Offer</Link> */}
      <section className="offers">
        {data.offers.map((offer, index) => {
          return (
            <section className="offer">
              <div>
                <img src="{offer.owner.account.avatar.secure_url}" />
                <p>{offer.owner.account.username}</p>
              </div>
              <div>
                <Link to={`/offer/${offer._id}`} key={offer._id}>
                  <img src="{offer.product_pictures.url}" />
                </Link>
              </div>
              <div>
                <p>{offer.product_price} €</p>
                <p>TAILLES</p>
                <p>MARQUE</p>
              </div>
            </section>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
