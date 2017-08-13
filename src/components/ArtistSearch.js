 import React from 'react'
 import TextField from 'material-ui/TextField'
 const getArtistSearchUrl = 'https://api.setlist.fm/rest/0.1/search/artists?artistName='


 export default class ArtistSearch extends React.Component{
    constructor(){
      super()
      this.state = {
        artistResults: null,
        selectedArtist: null,
        artistInput: ""
      }
    }

  fetchArtist = () => {
    fetch(getArtistSearchUrl, {
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


  handleArtistInput = (e) => {
    this.setState({artistInput: e.target.value.split(' ').join('%')})
    fetch(getArtistSearchUrl+this.state.artistInput, {
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

   render(){
      console.log(this.state.artistResults)
      console.log(this.state.artistInput)
      return(
        <div>
          <p>Search for an Artist</p>
          <TextField
            floatingLabelText="Type the Name of the Artist Here"
            value={this.state.artistInput}
            onChange={this.handleArtistInput}
            />
        </div>
     )
    }
  }


  //   componentDidMount() {
  //   fetch(getArtistSearchUrl, {
  //       method: 'get',
  //       headers: {
  //         "x-api-key": "31fb9db3-0d0f-493c-8b73-8b824360134f",
  //         'Accept': 'application/json'
  //       }
  //   })
  //     .then(response => response.json())
  //     .then(responseData => {
  //       this.setState({artistResults: responseData.artists.artist})
  //     })
  //     .catch(error => {
  //       console.log('Error in fetching data', error)
  //     })
  // }
