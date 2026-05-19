import React, { useState, useEffect } from "react";
import MovieDataService from "../services/movies";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import moment from "moment";

const Movie = (props) => {
  const { id } = useParams();
  const [movie, setMovie] = useState({
    id: null,
    title: "",
    rated: "",
    reviews: [],
  });

  const getMovie = (movieId) => {
    MovieDataService.get(movieId)
      .then((response) => {
        setMovie(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const deleteReview = (reviewId, index) => {
    console.log("reviewId gửi lên:", reviewId);
    console.log("userId gửi lên:", props.user.id);

    MovieDataService.deleteReview(reviewId, props.user.id)
      .then((response) => {
        console.log("Delete response:", response.data);

        setMovie((prevState) => ({
          ...prevState,
          reviews: prevState.reviews.filter((_, i) => i !== index),
        }));
      })
      .catch((e) => {
        console.log("Delete error:", e.response?.data || e.message);
      });
  };

  useEffect(() => {
    getMovie(id);
  }, [id]);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            {movie.poster && <Image src={movie.poster + "/100px250"} fluid />}
          </Col>
          <Col>
            <Card>
              <Card.Header as="h5">{movie.title}</Card.Header>
              <Card.Body>
                <Card.Text>{movie.plot}</Card.Text>
                {props.user && (
                  <Link to={"/movies/" + id + "/review"}>Add Review</Link>
                )}
              </Card.Body>
            </Card>
            <br />
            <h2>Reviews</h2>
            <br />
            {movie.reviews.map((review, index) => {
              return (
                <Card key={index} className="mb-3">
                  <Card.Body>
                    <h5>
                      {review.name + " reviewed on "}
                      {moment(review.date).format("Do MMMM YYYY")}
                    </h5>
                    <p>{review.review}</p>
                    {props.user && (
                      <Row>
                        <Col>
                          <Link
                            to={"/movies/" + id + "/review"}
                            state={{ currentReview: review }}
                          >
                            Edit
                          </Link>
                        </Col>
                        <Col>
                          <Button
                            variant="link"
                            onClick={() => deleteReview(review._id, index)}
                          >
                            Delete
                          </Button>
                        </Col>
                      </Row>
                    )}
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Movie;
