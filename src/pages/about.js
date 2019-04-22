import React from "react"
import Navbar from '../components/navbar'
import Groups from '../images/Groups.png'
import Preferences from '../images/Preferences.png'
import Messages from '../images/Messages.png'
import Footer from '../components/footer'
import WOW from 'wowjs';


class AboutPage extends React.Component {

  componentDidMount(){
    const wow = new WOW.WOW();
    wow.init();
  }

  render(){
    return (
      <React.Fragment>
        <Navbar activeClass="site-navigation site-navigation__secondary"/>
        <div className="about container">
          <div className="row">
            <h1 className="about__title">About HeyU<span className="red-dot">.</span></h1>
            <p className="about__description">HeyU is a calling and messaging app that connects people–no matter who they are, or where they’re from. </p>
            <div className="about__col wow slideInLeft" data-wow-offset="50" data-wow-delay="0.25s">
              <h2 className="about__title">Groups support<span className="red-dot">.</span></h2>
              <p className="about__description">Find best group for you or create your own. Stay updated with your friends using that feature.</p>
            </div>
            <div className="about__col">
              <img className="about__image" src={Groups} alt="Groups page in HeyU app"/>
            </div>
          </div>
          <div className="row">
            <div className="about__col">
              <img src={Preferences} alt="Preferences page in HeyU app" className="about__image"/>
            </div>
            <div className="about__col wow slideInRight" data-wow-offset="50" data-wow-delay="0.25s">
              <h2 className="about__title">Personalize your profile<span className="red-dot">.</span></h2>
              <p className="about__description">Customize your profile page in order to share with your firends</p>
            </div>
          </div>

          <div className="row">
            <div className="about__col wow slideInLeft" data-wow-offset="50" data-wow-delay="0.25s">
              <h2 className="about__title">Manage your messages<span className="red-dot">.</span></h2>
              <p className="about__description">Backup your messages data with ease. You can delete or group them the way you like</p>
            </div>
            <div className="about__col">
              <img src={Messages} alt="Messages page in HeyU app" className="about__image"/>
            </div>
          </div>  
        </div>
        <Footer/>
      </React.Fragment>  
    )
  }
}

export default AboutPage;