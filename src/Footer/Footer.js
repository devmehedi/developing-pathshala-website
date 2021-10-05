import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ModalFooter } from "react-bootstrap";
import { Link } from "react-router-dom";
const ModalFooterPagePro = () => {
  return (
    <div>
      <ModalFooter className="font-small lighten-3 pt-4 mt-4">
        <Container className="text-center text-md-left">
          <Row className="my-4">
            <Col md="4" lg="4">
              <h5 className="text-uppercase mb-4 font-weight-bold">
                ModalFooter Content
              </h5>
              <p>
                Here you can use rows and columns here to organize your
                ModalFooter content.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                error amet numquam iure provident voluptate esse quasi, veritatis
                totam voluptas nostrum.{" "}
              </p>
            </Col>
            <hr className="clearfix w-100 d-md-none" />
            <Col md="2" lg="2" className="ml-auto">
              <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
              <ul className="list-unstyled">
                <p>
                  <Link as={Link} to="/services">
                    Services
                  </Link>
                </p>
                <p>
                  <Link as={Link} to="/contactUs">
                    Contact Us
                  </Link>
                </p>
              </ul>
            </Col>
            <hr className="clearfix w-100 d-md-none" />
            <Col md="5" lg="3">
              <h5 className="text-uppercase mb-4 font-weight-bold">Address</h5>
              <p>
                <i className="fa fa-home mr-3" /> New York, NY 10012, US
              </p>
              <p>
                <i className="fa fa-envelope mr-3" /> info@example.com
              </p>
              <p>
                <i className="fa fa-phone mr-3" /> + 01 234 567 88
              </p>
              <p>
                <i className="fa fa-print mr-3" /> + 01 234 567 89
              </p>
            </Col>
          </Row>
        </Container>

      </ModalFooter>
      <div className="ModalFooter-copyright copyright py-3">
        <p>This site is create by &copy;Md.Mehedi Hasan</p>
      </div>
    </div>
  );
};

export default ModalFooterPagePro;
