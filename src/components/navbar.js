import { Link } from "gatsby"
import React from "react"
import propTypes from 'prop-types';

class Navbar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      listToggle: false,
      listClass: '',
    }
    this.listRef = React.createRef();
  }

  toggleList = () => {
    this.setState({
      listToggle: !this.state.listToggle,
    })
  }

  render(){
    return(
      <nav className="site-navigation">
        <p className="site-navigation__logo"><Link to="/">{this.props.name}</Link></p>
        <ul className={this.state.listToggle ? "site-navigation__list--active" : "site-navigation__list"}>
          {
            this.props.links.map((link, id) => {
              return (
                <li key={id} className="site-navigation__item">
                  <Link className="site-navigation__link" to={"/"+link}>{link}</Link>
                </li>
              )
            })

          }
        </ul>
        <button className="nav-btn" id="nav-hamburger" onClick={this.toggleList}>
          <span className="nav-btn__line"></span>
          <span className="nav-btn__line nav-btn__line--small"></span>
          <span className="nav-btn__line"></span>
        </button>   
      </nav>
    )
  }
}

Navbar.defaultProps = {
  name: "HeyU",
  links: [ "about", "contact" ]
}

export default Navbar;