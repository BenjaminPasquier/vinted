import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import defaultNoPicture from "../img/defaultNoPicture.png";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
        <div>
          {/* {data.id.map((offer, index) => {
          return offer.product_pictures[0] ? (
            <img src={offer.product_pictures[0].secure_url} />
          ) : (
            <img src={defaultNoPicture} />
          );
        })} */}
        </div>
        <div>
          <div>
            <p>Cette page est en travaux</p>
          </div>
          <div>
            <Link to="/payment">
              <button>Acheter</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offer;
