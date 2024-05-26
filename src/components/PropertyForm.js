import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const PropertyForm = ({ onPropertyData }) => {
  const initialValues = { address: '', city: '', zipCode: '' };
  const validationSchema = Yup.object({
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    zipCode: Yup.string().required('Zip Code is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    axios.post('/api/property', values)
      .then(response => {
        onPropertyData(response.data);
        setSubmitting(false);
      })
      .catch(error => {
        console.error('Error fetching property data', error);
        setSubmitting(false);
      });
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label>Address</label>
            <Field type="text" name="address" />
            <ErrorMessage name="address" component="div" />
          </div>
          <div>
            <label>City</label>
            <Field type="text" name="city" />
            <ErrorMessage name="city" component="div" />
          </div>
          <div>
            <label>Zip Code</label>
            <Field type="text" name="zipCode" />
            <ErrorMessage name="zipCode" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>Search</button>
        </Form>
      )}
    </Formik>
  );
};

export default PropertyForm;