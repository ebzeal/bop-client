import React from 'react';
import { Form, Button, Col, InputGroup } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

import { MarginedBody } from '../../homePage/homePage.styles';
import FormDiv from '../login.styles';

const AddBooks = () => {
  const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    file: yup.string().required(),
    terms: yup.bool().required()
  });

  function FormExample() {
    return (
      <MarginedBody>
        <FormDiv>
          <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
              firstName: 'Mark',
              lastName: 'Otto'
            }}
          >
            {/* {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationFormik101">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                />
                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik102">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                />

                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
                <Form.Label>Username</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.username}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationFormik103">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  isInvalid={!!errors.city}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik104">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="State"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  isInvalid={!!errors.state}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.state}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik105">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Zip"
                  name="zip"
                  value={values.zip}
                  onChange={handleChange}
                  isInvalid={!!errors.zip}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.zip}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.File
                className="position-relative"
                required
                name="file"
                label="File"
                onChange={handleChange}
                isInvalid={!!errors.file}
                feedback={errors.file}
                id="validationFormik107"
                feedbackTooltip
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                required
                name="terms"
                label="Agree to terms and conditions"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                id="validationFormik106"
                feedbackTooltip
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        )} */}
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Book Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name of Book" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="Enter name of Author" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Number of Pages</Form.Label>
                <Form.Control type="number" placeholder="Enter num of pages" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Date Published</Form.Label>
                <Form.Control type="date" placeholder="Enter publication Date" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Book Genre</Form.Label>
                <Form.Control type="text" placeholder="Enter gnre of Book" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Book Description</Form.Label>
                <Form.Control type="textarea" placeholder="Enter description of Book" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Book Price</Form.Label>
                <Form.Control type="number" placeholder="Enter price of Book" />
              </Form.Group>
              <Form.Group>
                <Form.File
                  className="position-relative"
                  required
                  name="file"
                  label="Upload Book Image"
                  id="validationFormik107"
                  feedbackTooltip
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Formik>
        </FormDiv>
      </MarginedBody>
    );
  }

  return <FormExample />;
};

export default AddBooks;
