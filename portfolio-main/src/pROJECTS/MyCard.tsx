import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

export type details={
    email: string,
    name:{
        first:string,
        title:string,
        last:string

    },
    picture:{
      large:string,
    
    },

    location:{
      city:string,
    
    },
    cell:string
}

const MyCard = ({ email, name, cell,picture,location}:details) => {
  return (
    <Card>
    <CardBody className="text-center">
      <img
        height="150"
        width="150"
        className="rounded-circle img-thumbnail border-danger"
        src={picture.large}
      />
      <CardTitle className="text-primary">
        <h1>
          <span className="pr-2">{name.title}</span>
          <span>{name.first}</span>
          <span>{name.last}</span>
        </h1>
      </CardTitle>
      <CardText>
        <FaMapMarkedAlt />
        {location.city}
        <p>{cell}</p>
      </CardText>
    </CardBody>
  </Card>
);
};

export default MyCard;