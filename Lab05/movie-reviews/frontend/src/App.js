import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import AddReview from "./component/add-review";
import Login from "./component/login";
import MoviesList from "./component/movies-list";
import Movie from "./component/movie";

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }
  async function logout() {
    setUser(null);
  }

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Movie Reviews</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"/movies"}>
            Movies
          </Nav.Link>
          <Nav.Link>
            {user ? (
              <a
                onClick={(e) => {
                  logout();
                }}
                href="#"
              >
                Logout User
              </a>
            ) : (
              <a
                onClick={(e) => {
                  login({ name: "User" });
                }}
                href="#"
              >
                Login
              </a>
            )}
          </Nav.Link>
        </Nav>
      </Navbar>
      {/* Routes will be here */}
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movies" element={<MoviesList />} />
        <Route path="/movies/:id/review" element={<AddReview user={user} />} />
        <Route path="/movies/:id/" element={<Movie user={user} />} />
        <Route path="/login" element={<Login login={login} />} />
      </Routes>
    </div>
  );
}
export default App;
