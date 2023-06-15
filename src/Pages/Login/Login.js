import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import logo from "../../assets/login_register_image/login-logo.png";
import loginImage from "../../assets/login_register_image/1680041886-syBeWszo7b.png";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-hot-toast";
const Login = () => {
  const getuser = localStorage.getItem("user");
  const getuser2 = JSON.parse(getuser);
  const getPhone = getuser2?.phoneNumber;
  const getPassword = getuser2?.password;
  const navigate = useNavigate();
  const loginHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const password = form.password.value;
    if (getPhone === phone && getPassword === password) {
      toast.success("Login Successfully");
      navigate("/dashboard");
    } else {
      toast.error("Pleasecheck your Phone Number or Password");
    }
  };
  return (
    <div>
      <Container fluid>
        <Row className="align-items-center">
          <Col lg={5} sm={12} className="left-side-content">
            <div className="login-up-logo">
              <Link>
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="middel-pra">
              <p>
                There is an opportunity to earn from the first day of learning
                the course
              </p>
            </div>
            <div className="bottom-image">
              <img src={loginImage} alt="" className="img-fluid" />
            </div>
          </Col>
          <Col lg={7} sm={12}>
            <div className="login-right-side-content">
              <form onSubmit={loginHandler}>
                <h5 className="title mb-1">Sign In</h5>
                <p className="mb-3 creatacc_Link">
                  New user? <Link to="/register">Create an account</Link>
                </p>
                <Row>
                  <Col lg={12} sm={12}>
                    <Form.Label className="form_label mb-3">
                      Student ID or Phone
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      placeholder="Type your student ID or Phone number"
                      className="from-control"
                    />
                  </Col>
                  <Col lg={12} sm={12} className="mt-4">
                    <Form.Label className="form_label mb-3">
                      Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Type your password"
                      className="from-control"
                    />
                  </Col>
                  <p className=" mb-4 creatacc_Link mt-4">
                    <Link>Forgate Password</Link>
                  </p>
                  <Col lg={12} sm={12} className="">
                    <Button type="submit" className="w-100" variant="primary">
                      Login
                    </Button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
