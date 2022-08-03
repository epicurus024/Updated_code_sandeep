import React from "react";
import { Button, Card } from "react-bootstrap";
import movieDetails from "../models/movieDetails";

type Props = {
    moviedetails : movieDetails
};

const MovieItem = ({moviedetails} : Props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`${process.env.REACT_APP_BASE_URL}/img/${moviedetails.poster}`} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default MovieItem;