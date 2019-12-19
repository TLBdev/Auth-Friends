import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { axiosWithAuth } from '../utils/axiosWithAuth'
export default function Login() {
    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
                axiosWithAuth()
                    .post('/login', { ...values })
                    .then(res => {
                        localStorage.setItem('token', res.data.payload);

                    })
                    .catch(err => console.log(err))
            }}
        >
            <Form>
                <Field type='username' name='username'></Field>
                <Field type='password' name='password'></Field>
                <button type='submit' >
                    Log In
                </button>
            </Form>
        </Formik>
    )
}