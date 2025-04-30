import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';
import '../../styles/HeaderStyle.css'
import Layout from '../../components/Layouts/Layout';
import Section1 from './Section1';
import '../../styles/HomeStyle.css';

function Home() {
  return (
    <>
    <Layout>
        <Section1 />
    </Layout>
    </>
  )
}

export default Home