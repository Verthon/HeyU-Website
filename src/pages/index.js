import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";
import Navbar from '../components/navbar';
import Header from '../components/header';
import Hero from '../components/hero';
import Article from '../components/article';
import Testimonials from '../components/testimonials';
import Functions from '../components/functions';
import Newsletter from '../components/newsletter';
import Download from '../components/download';
import Footer from '../components/footer';


import smartphone from './../images/HeyU-smartphone.png'
import HeyUMessaging from '../images/HeyU-easy-messaging.png';
import HeyUKeep from '../images/HeyU-keep-in-touch.png';
import Avatar1 from '../images/HeyU-ceo-avatar-1.png';
import Avatar2 from '../images/HeyU-ceo-avatar-2.png';
import smartphone2 from '../images/HeyU-smartphone-2.png';
import fconversation from '../images/HeyU-start-conversation.png';
import fpicture from '../images/HeyU-take-a-picture.png';
import fphone from '../images/HeyU-make-a-free-call.png';
import fcamera from '../images/HeyU-send-your-video.png';
import logo from '../images/App_Icon.png'
import iosbtn from '../images/HeyU-app-store-btn.png';

const IndexPage = () => (
  <React.Fragment>
    <Header>
      <SEO title="HeyU innovative messenger" keywords={[`gatsby`, `application`, `react`]} />
      <Navbar/>
      <Hero image={smartphone}/>
    </Header>
    <Article title="Easy messaging" text="Content is clipped if necessary to fit the padding box. Browsers always display scrollbars whether or not any content is actually clipped, preventing scrollbars from appearing or disappearing as content changes. Printers may still print overflowing content." image={HeyUMessaging} imageAlt="Easy messaging"/>
    <Article title="Keep in touch" text="This module discusses text styling fundamentals, including setting fonts, boldness, italics, line and letter spacing, text drop shadows, and other text properties." image={HeyUKeep} imageAlt="Keep in touch"/>
    <Testimonials images={[Avatar1, Avatar2]} names={['Dave Adams', 'John Doe', 'Derek Coleman']} roles={['CEO', 'CTO', 'Sales manager']}/>
    <Functions images={[fconversation, fpicture, fphone, fcamera, smartphone2]}/>
    <Newsletter/>
    <Download image={logo} button={iosbtn}/>
    <Footer/>

  </React.Fragment>
)

export default IndexPage
