import Navbar from "react-bootstrap/Navbar";

function navbar() {
  return (
    <>
      <Navbar bg="dark">
        <Navbar.Brand href="#">
          <img
            src="../../logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default navbar;
