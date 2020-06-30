import React from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { withRouter } from 'react-router-dom';

import { MarginedBody } from '../homePage/homePage.styles';
import FormDiv from './login.styles';
import { loginUser } from '../../redux/actions/auth.actions';

const Login = ({ loginUser, history }) => {
  const initialForm = {
    email: '',
    password: ''
  };
  const formik = useFormik({
    initialValues: initialForm,
    onSubmit: async values => {
      loginUser(values, history);
    }
  });
  return (
    <MarginedBody>
      <FormDiv>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </FormDiv>
    </MarginedBody>
  );
};

const mapDispatchToProps = {
  loginUser
};

export default withRouter(connect(null, mapDispatchToProps)(Login));
