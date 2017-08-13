import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ArtistSearch from '../components/ArtistSearch'
import EventSearch from '../components/EventSearch'


const SearchRouter = () => {
  return (
    <div>
      <Route exact path='/search/artist' component={ArtistSearch} />
      <Route exact path='/search/events' component={EventSearch}/>
    </div>
  )
}

export default SearchRouter
