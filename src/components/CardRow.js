import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import CardRestaurant from "./CardRestaurant";
import CONFIG from "../global/config";
import "../styles/Components/CardRestaurant.scss";

const CardRow = () => {
  const [loading, setLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchGetRestaurants = async () => {
      try {
        const res = await axios.get(`${CONFIG.BASE_URL}/list`);

        if (res.data && res.data.restaurants) {
          setRestaurants(res.data.restaurants);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchGetRestaurants();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row>
        {restaurants.map((restaurant, index) => (
          <Col key={index} md={3}>
            <CardRestaurant restaurant={restaurant} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardRow;
