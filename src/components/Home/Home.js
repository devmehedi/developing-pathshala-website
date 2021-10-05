import React from "react";
import { Card } from "react-bootstrap";
import "./Home.css";
import Services from "./../Services/Services";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="bg-body">
        <div className="header-div">
          <h2 className="title">Web Design and Development Services</h2>
          <p>
            We have technology experts who have mastered everything from
            documentation to custom mobile app development & custom web design
            and development to deployment. Be it a website, mobile app or
            software, we bet, you will not get a better solution from anywhere
            else!
          </p>
          <Link as={Link} to="/services">
            <button className="btn" onClick="">
              Services
            </button>
          </Link>
        </div>
        <div className="img-div">
          <img
            src="https://www.8therate.com/wp-content/uploads/2021/05/above-fold-mockup.png"
            alt=""
          />
        </div>
      </div>

      <div className="container mt-5">
        <h2>Services we offer</h2>
        <p>
          Your business has its unique strengths and that should also be
          reflected in your online presence. Our team of experts will give you
          the solution that is best for your business and mirrors your vision.
        </p>
        <div className="cart">
          <Card>
            <Card.Img
              variant="top"
              src="https://www.rgbwebtech.com/services/images/uploads/nodejs-website-development-service-provider-company-in-india.jpg"
            />
            <Card.Body>
              <Card.Title>Lets with Javascript</Card.Title>
              <Card.Text>
                JavaScript adds behaviour to the web page. It allows you to
                improve your visitors experience of the web page. JavaScript
                fully sustains object oriented design.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://5.imimg.com/data5/YU/BC/MY-31064092/reactjs-app-development-500x500.jpg"
            />
            <Card.Body>
              <Card.Title>Lets with React</Card.Title>
              <Card.Text>
                React adds behaviour to the web page. It allows you to improve
                your visitors experience of the web page.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://betterstudio.com/wp-content/uploads/2019/11/free-wordpress-installation-service-1.jpg"
            />
            <Card.Body>
              <Card.Title>Lets with Wordpress</Card.Title>
              <Card.Text>
                Wordpress adds behaviour to the web page. It allows you to improve your visitors experience of the web page.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
