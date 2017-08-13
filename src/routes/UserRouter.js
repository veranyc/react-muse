import React from 'react'
import {Switch, Route} from 'react-router-dom'
import UserProfile from '../components/UserProfile'
import UserEvents from '../components/UserEvents'
import UserSignUp from '../components/UserSignUp'


const SearchRouter = () => {
  return (
    <div>
      <Route path='/user/profile/:userID' component={UserProfile} />
      <Route exact path='/user/events' component={UserEvents}/>
      <Route exact path='/user/signup' component={UserSignUp}/>
    </div>
  )
}

export default SearchRouter
