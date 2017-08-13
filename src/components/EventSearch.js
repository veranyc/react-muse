 import React from 'react'
 const getSetlistSearchUrl = 'https://api.setlist.fm/rest/0.1/artist/2aaf7396-6ab8-40f3-9776-a41c42c8e26b/setlists'


 export default class EventSearch extends React.Component{
   constructor(){
     super()
     this.state = {
       setlistResults: null,
       selectedSetlist: null
     }
   }

   componentDidMount() {
   fetch(getSetlistSearchUrl, {
       method: 'GET',
       headers: {
         "x-api-key": "31fb9db3-0d0f-493c-8b73-8b824360134f",
         'Accept': 'application/json'
       }
   })
     .then(response => response.json())
     .then(responseData => {
       this.setState({setlistResults: responseData.setlists.setlist})
     })
     .catch(error => {
       console.log('Error in fetching data', error)
     })
 }
   render(){
     console.log(this.state.setlistResults)
      return(
        <div>
          <p>Search for Event</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              Artist Name:
              <input type="text" value={this.state.artistName} onChange={this.handleChangeArtist} />
            </label>
            <label>
              City:
              <input type="text" value={this.state.cityName} onChange={this.handleChangeCity} />
            </label>
            <input type="submit" value="Submit" />
      </form>
        </div>
     )
    }
  }
