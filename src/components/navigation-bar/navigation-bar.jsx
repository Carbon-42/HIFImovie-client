import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useEffect } from "react";
import "../../index.scss";

export const NavigationBar = ({ user, onLoggedOut, onSearch }) => {
  const [query, setQuery] = useState("");
  const [homeView, setHomeView] = useState("");
  const location = useLocation();

  useEffect(() => {
    onSearch(query);
  }, [query]);

  //checks Route before rendering search input field
  useEffect(() => {
    if (location.pathname === "/") {
      setHomeView("true");
    } else {
      setHomeView(null);
    }
  }, [location]);

  return (
    <Navbar id="navbar" bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand className="fs-1" id="navbar" as={Link} to="/">
          HIFI Movies
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user && (
              <>
                <Nav.Link className="fs-3" as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link className="fs-3" as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link className="fs-3" as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link className="fs-3" as={Link} to="/profile">
                  Profile
                </Nav.Link>
                <Nav.Link
                  className="fs-3"
                  onClick={onLoggedOut}
                  as={Link}
                  to="/"
                >
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
          {homeView && (
            <>
              <Form className="d-flex mt-1">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  value={query}
                  className="me-2 fs-3"
                  aria-label="Search"
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                />
              </Form>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
