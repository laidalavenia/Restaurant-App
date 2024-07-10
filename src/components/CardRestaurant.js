import React from "react";
import { Button, Card } from "react-bootstrap";

const CardRestaurant = ({ restaurant }) => {
  if (!restaurant) {
    return <div>No Data Available</div>;
  }

  return (
    <div className='card-restaurant'>
      <Card style={{ width: "16rem" }}>
        <Card.Img variant='top' src={`https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}`} />
        <Card.Body>
          <Card.Title>{restaurant.name}</Card.Title>
          <Card.Text>
            {restaurant.description}
          </Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardRestaurant;
