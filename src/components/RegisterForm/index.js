import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Home from '../Home'
import MeetupContext from '../../context/MeetupContext'

import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const RegisterForm = props => (
  <MeetupContext.Consumer>
    {value => {
      const {
        changeName,
        changeData,
        name,
        errorChange,
        error,
        cookieValue,
      } = value
      const onNameChange = event => {
        changeName(event.target.value)
      }

      const onChoiceChange = event => {
        changeData(event.target.value)
      }

      const onSubmitForm = event => {
        event.preventDefault()
        if (name.length === 0) {
          errorChange(true)
        }

        const {history} = props
        Cookies.set('jwt_token', 'clicked', {
          expires: 30,
        })
        const jwtToken = Cookies.get('jwt_token')

        cookieValue(jwtToken)

        history.replace('/')
      }

      return (
        <div style={{fontFamily: 'Roboto'}}>
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
              className="website-logo"
            />
          </div>
          <div className="register-form-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
              className="website-register"
            />
            <form onSubmit={onSubmitForm}>
              <h1 style={{color: '#334155'}}>Let us join</h1>
              <label htmlFor="name" className="label-value">
                NAME
              </label>{' '}
              <br />
              <input
                type="text"
                id="name"
                className="input-style"
                placeholder="Your name"
                onChange={onNameChange}
              />{' '}
              <br />
              <label htmlFor="selection" className="label-value">
                TOPICS
              </label>{' '}
              <br />
              <select
                id="selection"
                className="input-style"
                onChange={onChoiceChange}
              >
                {topicsList.map(eachTopic => (
                  <option key={eachTopic.id} value={eachTopic.id}>
                    {eachTopic.displayText}
                  </option>
                ))}
              </select>
              <br />
              <button type="submit" className="register-btn">
                Register Now
              </button>
              {error ? <p>Please enter your name</p> : null}
            </form>
          </div>
        </div>
      )
    }}
  </MeetupContext.Consumer>
)

export default RegisterForm
