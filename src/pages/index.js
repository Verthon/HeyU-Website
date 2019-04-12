import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Navbar from '../components/navbar'
import Header from '../components/header'
import Hero from '../components/hero'
import Article from '../components/article';
import HeyUMessaging from '../images/HeyU-easy-messaging.png';
import HeyUKeep from '../images/HeyU-keep-in-touch.png';

const IndexPage = () => (
  <React.Fragment>
    <Header>
      <SEO title="HeyU innovative messenger" keywords={[`gatsby`, `application`, `react`]} />
      <Navbar/>
      <Hero/>
    </Header>
    <Article title="Easy messaging" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit" image={HeyUMessaging} imageAlt="Easy messaging"/>
    <Article title="Keep in touch" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit" image={HeyUKeep} imageAlt="Keep in touch"/>
  </React.Fragment>
)

export default IndexPage
