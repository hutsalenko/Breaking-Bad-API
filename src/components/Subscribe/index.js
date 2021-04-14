import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './index.scss';

import { useDispatch } from 'react-redux';
import { form } from '../../redux/actions';

const initialValues = {
  name: '',
  surname: '',
  age: '',
  email: '',
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  surname: Yup.string().required('Required'),
  age: Yup.number().required('Required').positive().integer().min(1).max(100),
  email: Yup.string().email('Invalid email address').required('Required'),
});

export const Subscribe = () => {
  const dispatch = useDispatch();

  return (
    <div className="form">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form className="form__wraper">
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" placeholder="Enter name" />
          <ErrorMessage name="name">{(msg) => <div>{msg}</div>}</ErrorMessage>

          <label htmlFor="surname">Surname</label>
          <Field type="text" name="surname" id="surname" placeholder="Enter surname" />
          <ErrorMessage name="surname">{(msg) => <div>{msg}</div>}</ErrorMessage>

          <label htmlFor="age">Age</label>
          <Field type="text" id="age" name="age" placeholder="Enter age" />
          <ErrorMessage name="age">{(msg) => <div>{msg}</div>}</ErrorMessage>

          <label htmlFor="email">E-mail</label>
          <Field type="email" name="email" id="email" placeholder="Enter email" />
          <ErrorMessage name="email">{(msg) => <div>{msg}</div>}</ErrorMessage>

          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <div className="form__exit" onClick={() => dispatch(form())}>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="times-circle"
          className="svg-inline--fa fa-times-circle fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"
          ></path>
        </svg>
      </div>
    </div>
  );
};
