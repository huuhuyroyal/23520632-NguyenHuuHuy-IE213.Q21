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
          <Nav.Link
            as={Link}
            to={"/movies"}
            style={{
              color: "blue",
              textDecoration: "underline",
            }}
          >
            Movies
          </Nav.Link>
          <Nav.Link as="span">
            {user ? (
              <button
                type="button"
                style={{
                  border: "none",
                  background: "none",
                  color: "blue",
                  textDecoration: "underline",
                }}
                onClick={logout}
              >
                Logout User
              </button>
            ) : (
              <button
                type="button"
                style={{
                  border: "none",
                  background: "none",
                  color: "blue",
                  textDecoration: "underline",
                }}
                onClick={() => login({ name: "User", id: "123456" })}
              >
                Login
              </button>
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
