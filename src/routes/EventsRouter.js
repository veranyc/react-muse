import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Events from '../components/Events'
import Event from '../components/Event'
import EventSearch from '../components/EventSearch'


const EventsRouter = () => {
  return (
    <div>
      <Route exact path='/events' component={Events} />
      <Route path='/events/:eventId' component={Event} />
      <Route path='/events/search' component={EventSearch} />
    </div>
  )
}

export default EventsRouter
