import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import MeetupContext from '../../context/MeetupContext'

import './index.css'

class Home extends Component {
  state = {
    available: false,
  }

  onRegisterForm = () => {
    const token = Cookies.get('jwt_token')

    const {available} = this.state
    if (token !== undefined) {
      this.setState(prevState => ({
        available: !prevState.available,
      }))
    }
  }

  render() {
    const {available} = this.state
    console.log(available)

    return (
      <MeetupContext.Consumer>
        {value => {
          const {topic, name, cookieUser} = value

          return (
            <div className="app-container">
              <div className="logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                  alt="website logo"
                  className="website-logo"
                />
              </div>
              <div className="home-bottom-container">
                {cookieUser !== 'clicked' ? (
                  <>
                    <h1 style={{color: '#334155'}}>Welcome to Meetup</h1>

                    <p style={{color: '#475569', fontWeight: 'bold'}}>
                      Please register for the topic
                    </p>

                    <Link to="/register">
                      <button
                        type="button"
                        className="register-btn"
                        onClick={this.onRegisterForm}
                      >
                        Register
                      </button>
                    </Link>
                  </>
                ) : (
                  <>
                    <h1>Hello {name}</h1>
                    <p>Welcome to {topic}</p>
                  </>
                )}

                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                  className="meetup-image"
                />
              </div>
              <h1>{name}</h1>
            </div>
          )
        }}
      </MeetupContext.Consumer>
    )
  }
}

export default Home
