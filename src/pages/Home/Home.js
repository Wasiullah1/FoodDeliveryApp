import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';
import '../../styles/HeaderStyle.css'
import Layout from '../../components/Layouts/Layout';
import Section1 from './Section1';
import '../../styles/HomeStyle.css';
import Section2 from './Section2';
import Section3 from './Section3';

function Home() {
  return (
    <>
      <Layout>
          <Section1 />
          
          {/* Home Section About Us */}
          <Section2 />

          {/* Home Section Items */}
          <Section3/>
      </Layout>
    </>
  )
}

export default Home