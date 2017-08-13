 import React from 'react'
 const getSetlistSearchUrl = 'https://api.setlist.fm/rest/0.1/search/setlists?artistName=lcd+soundsystem&cityName=atlanta'


 export default class EventSearch extends React.Component{
   constructor(){
     super()
     this.state = {
       setlistResults: null,
       selectedSetlist: null,
       artistName: null,
       cityName: null
     }
   }

  formSetlistSearchUrl = (getSetlistSearchUrl) => {
    //if artistName is not blank or null, add artistName=this.state.artistName to the url string
    let searchURLwithArtist = ""
    let searchURLwithArtistandCity = ""

    if (this.state.artistName !== null || this.state.artistName !== "") {
      searchURLwithArtist = getSetlistSearchUrl+`artistName={this.state.artistName}`
      return searchURLwithArtist
    } else {
      alert('Please enter the name of an Artist. Thank you.')
    }
    
    //if cityName is not blank or null, add &cityName=this.state.cityName it to the url string
    if (this.state.cityName !== null || this.state.cityName !== "") {
      searchURLwithArtistandCity = searchURLwithArtist+`&cityName={this.state.cityName}`
      return searchURLwithArtistandCity
    }
  }

  handleChangeArtist = (e) => {
     this.setState({artistName: e.target.value})
   }

   handleChangeCity = (e) => {
     this.setState({cityName: e.target.value})
   }

   handleSubmit = (e) => {
     e.preventDefault()
     fetch(formSetlistSearchUrl(), {
         method: 'get',
         headers: {
           "x-api-key": "31fb9db3-0d0f-493c-8b73-8b824360134f",
           'Accept': 'application/json'
         }
     })
       .then(response => response.json())
       .then(responseData => {
         this.setState({artistResults: responseData.artists.artist})
       })
       .catch(error => {
         console.log('Error in fetching data', error)
       })
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
