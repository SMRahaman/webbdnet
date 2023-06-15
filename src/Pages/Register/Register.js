import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import logo from "../../assets/login_register_image/login-logo.png";
import loginImage from "../../assets/login_register_image/1680041886-syBeWszo7b.png";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Register = () => {
  const [selects, setSelects] = useState("");
  const [enable, setEnable] = useState(false);

  const registerHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const phone = form.phnNumber.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const referralCode = form.referralCode.value;

    const register = {
      email,
      password,
      name: firstName + lastName,
      phoneNumber: selects + phone,
      referralCode,
    };

    localStorage.setItem("user", JSON.stringify(register));
    form.reset();
    toast.success("Registration Successfully");
  };
  return (
    <div>
      <Container fluid>
        <Row className="">
          <Col lg={5} className="left-side-content ">
            <div className="up-logo">
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
            <div className="register-right-side-content ">
              <form onSubmit={registerHandler}>
                <h5 className="title mb-1">Create an account</h5>
                <p className="mb-3 creatacc_Link">
                  Already have an account? <Link to="/login">Sign In</Link>
                </p>
                <Row>
                  <Col lg={12} sm={12}>
                    <Form.Label className="form_label mb-3">Email *</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Type your Email"
                      className="from-control"
                      required
                    />
                  </Col>
                  <Col lg={12} sm={12}>
                    <Row>
                      <Col lg={4} sm={12}>
                        <Form.Label className="form_label mt-4">
                          Country Code
                        </Form.Label>
                        <Form.Control
                          as="select"
                          value={selects}
                          onChange={(e) => setSelects(e.target.value)}
                        >
                          <option value="">Select your code</option>
                          <option value="+88">BD(+88)</option>
                          <option value="+91">India(+99)</option>
                        </Form.Control>
                      </Col>
                      <Col lg={8} sm={12}>
                        <Form.Label className="form_label mt-4">
                          What's app number
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Type your phone number"
                          name="phnNumber"
                          className="from-control"
                          required
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={12} sm={12}>
                    <Row>
                      <Col lg={6} sm={12}>
                        <Form.Label className="form_label mt-4">
                          First name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          placeholder="Type your first name"
                          className="from-control"
                        />
                      </Col>
                      <Col lg={6} sm={12}>
                        <Form.Label className="form_label mt-4">
                          Last name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="lastName"
                          placeholder="Type your last name"
                          className="from-control"
                        />
                      </Col>
                    </Row>
                  </Col>

                  <Col lg={12} sm={12} className="mt-4">
                    <Form.Label className="form_label mb-3">
                      Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="********"
                      className="from-control"
                      required
                    />
                  </Col>
                  <Col lg={12} sm={12} className="mt-4">
                    <Form.Label className="form_label mb-3">
                      Referral code
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="referralCode"
                      placeholder="Referral Code"
                      className="from-control"
                    />
                  </Col>
                  <p className=" mb-4 creatacc_Link mt-4">
                    <Form.Check
                      custom
                      inline
                      type="checkbox"
                      id="custom-inline-checkbox"
                      className="mr-3"
                      onChange={(e) => setEnable(e.target.value)}
                    />
                    By clicking Create account, I agree that I have read and
                    accepted the <Link>Terms of Use </Link> and
                    <Link>Privacy Policy</Link>.
                  </p>
                  <Col lg={12} sm={12} className="">
                    <Button
                      type="submit"
                      disabled={!enable}
                      className="w-100"
                      variant="primary"
                    >
                      Register
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

export default Register;
