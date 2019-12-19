import React, { useEffect } from 'react'


export default function Friend(props) {
    console.log('props.data')
    return <div>
        <h1>name: {props.data.name}</h1>
        <h2>age: {props.data.age}</h2>
        <h2>email: {props.data.email}</h2>
        <p>id: {props.data.id}</p>
    </div>
}