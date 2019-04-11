import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Navbar from '../components/navbar'
import Header from '../components/header'
import Hero from '../components/hero'

const IndexPage = () => (
  <React.Fragment>
    <Header>
      <SEO title="HeyU innovative messenger" keywords={[`gatsby`, `application`, `react`]} />
      <Navbar/>
      <Hero/>
    </Header>
  </React.Fragment>
)

export default IndexPage
