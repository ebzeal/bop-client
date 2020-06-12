import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import { useFormik, Formik } from 'formik';
import * as yup from 'yup';
import TinyMCE from 'react-tinymce';
import { connect } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';

import { MarginedBody } from '../../homePage/homePage.styles';
import FormDiv from '../login.styles';
import {createArticle} from '../../../redux/actions/article.actions'

const AddArticle = ({createArticle}) => {
  const history = useHistory();
  const [contentState, setContentState] = useState('');
  const handleEditorChange = (e) => {
    console.log(e.target.getContent());
    const content = e.target.getContent()
    setContentState(content)
  }
  const initialForm = {
    title: '',
    content: ''
  };

  const formik = useFormik({
    initialValues: initialForm,
    onSubmit: async values => {
      const {title} = values
      const content = contentState;
      createArticle({title, tweets:{}, content}, history )
    }
  });

    return (
      <MarginedBody>
        <FormDiv>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title of Article" 
              onChange={formik.handleChange}
              value={formik.values.title}  />
              </Form.Group>

              <Form.Group controlId="content">
                <Form.Label>Article Body</Form.Label>
                <TinyMCE
        config={{
          plugins: 'autolink link image lists print preview',
          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | image'
        }}
        name="content"
        onChange={handleEditorChange}
      />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
        </FormDiv>
      </MarginedBody>
    );
  }


const mapDispatchToProps = {
  createArticle
};


export default connect(null,mapDispatchToProps)(AddArticle);
