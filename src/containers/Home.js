import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import backgroundVinted from "../img/backgroundVinted.png";
import defaultPicture from "../img/defaultPicture.png";
import defaultNoPicture from "../img/defaultNoPicture.png";

const Home = () => {
  const [data, setData] = useState({});
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
      {/* <section className="background"> */}
      <section className="intro">
        <div>
          <p>Prêts à faire du tri dans vos placards ?</p>
          <button>Commencez à vendre</button>
        </div>
      </section>
      {/* </section> */}
      <section className="offers">
        {data.offers.map((offer, index) => {
          return (
            <section className="offer">
              <div>
                {offer.owner.account.avatar ? (
                  <div>
                    <img src={offer.owner.account.avatar.secure_url} />
                    <p>{offer.owner.account.username}</p>
                  </div>
                ) : (
                  <div>
                    <img src={defaultPicture} />
                    <p>{offer.owner.account.username}</p>
                  </div>
                )}
              </div>
              <div>
                <Link to={`/offer/${offer._id}`} key={offer._id}>
                  {offer.product_pictures[0] ? (
                    <img src={offer.product_pictures[0].secure_url} />
                  ) : (
                    <img src={defaultNoPicture} />
                  )}
                </Link>
              </div>
              <div>
                <p>{offer.product_price} €</p>
                <p>{offer.product_details[1].TAILLE}</p>
                <p>{offer.product_details[0].MARQUE}</p>
              </div>
            </section>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
