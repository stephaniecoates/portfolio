import React from 'react';
import Layout from './../components/layout'
import Profile from './../components/profile'

export default function Intro (props) {
    return (
        <Layout title={`SC`} location={props.location}>
    <Profile />
    <p>Hi! I'm</p>
    <h1>Stephanie Coates</h1>
    <p>I write code, obsess over Javascript, and blog about developer things.</p>
        </Layout>
        
    )
}