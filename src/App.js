import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import RegisterForm from './components/RegisterForm'
import MeetupContext from './context/MeetupContext'
import NotFound from './components/NotFound'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
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

// Replace your code here
class App extends Component {
  state = {
    name: '',
    choice: topicsList[0].id,
    errorMsg: '',
    error: false,
    alreadyHaveCookie: '',
  }

  changeChoice = choice => {
    this.setState({choice})
  }

  updateName = name => {
    this.setState({name})
  }

  updateError = value => {
    this.setState({error: value})
  }

  cookieEntry = jwtToken => {
    this.setState({alreadyHaveCookie: jwtToken})
  }

  render() {
    const {choice, name, alreadyHaveCookie} = this.state
    return (
      <MeetupContext.Provider
        value={{
          name,
          topic: choice,
          cookieUser: alreadyHaveCookie,
          changeData: this.changeChoice,
          changeName: this.updateName,
          errorChange: this.updateError,
          cookieValue: this.cookieEntry,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={RegisterForm} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}

export default App
