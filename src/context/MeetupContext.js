import React from 'react'

const MeetupContext = React.createContext({
  name: '',
  topic: '',
  error: false,
  cookieUser: '',
  changeData: () => {},
  changeName: () => {},
  errorChange: () => {},
  cookieValue: () => {},
})
export default MeetupContext
