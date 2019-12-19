import React, { useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import Friend from './Friend'
export default function Friends() {
    const [friends, updateFriends] = React.useState({ friendsArr: [], counter: 0 })
    useEffect(() => {
        axiosWithAuth().get('/friends')
            .then(res => updateFriends({ ...friends, friendsArr: [...res.data] }))
            .catch(err => console.log(err))
    }, [friends]
    )
    return (
        <>
            <Formik
                initialValues={{ id: 0, name: '', age: 0, email: '' }}
                onSubmit={values => {
                    axiosWithAuth()
                        .post('/friends', { ...values, id: Date.now() })
                        .then(res => {
                            console.log(res)
                            updateFriends({ ...friends, counter: friends.counter + 1 })
                            console.log(friends.friendsArr)
                        })
                        .catch(err => { console.log(err) })
                }}>
                <Form>
                    <Field type='text' name='name'></Field>
                    <Field type='text' name='age'></Field>
                    <Field type='email' name='email'></Field>
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
            <div>{friends.friendsArr.map(e => { return <Friend data={e} /> })}</div>
        </>
    )


}