import React from 'react'
import {Switch, Route} from 'react-router-dom'
import UserEvents from '../components/UserEvents'
import Event from '../components/Event'
import EventSearch from '../components/EventSearch'


const EventsRouter = () => {
  return (
    <div>
      <Route exact path='/myevents/' component={UserEvents} />
      <Route exact path='/events/search' component={EventSearch}/>
      <Route path='/events/:eventId' component={Event} />
    </div>
  )
}

export default EventsRouter
