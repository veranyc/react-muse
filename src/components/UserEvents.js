 import React from 'react'
 import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';



 export default class UserEvents extends React.Component{
    constructor(){
      super()
      this.state = {
        events: null,
        displayRowCheckbox: false,
        displaySelectAll: false,
        adjustForCheckbox: false
      }
    }


    componentDidMount() {
    fetch('http://api.setlist.fm/rest/0.1/search/setlists.json?artistName=lcd+soundsystem')
      .then(response => response.json())
      .then(responseData => {
        this.setState({events: responseData.setlists.setlist[0]})
      })
      .catch(error => {
        console.log('Error in fetching data', error)
      })
  }

   render(){
      console.log(this.state.events)
      return(
        <div>
          <h1>My Events</h1>
          <Table >
            <TableHeader
                displaySelectAll={this.state.displaySelectAll}
                adjustForCheckbox={this.state.adjustForCheckbox}
              >
              <TableRow>
                <TableHeaderColumn>Date</TableHeaderColumn>
                <TableHeaderColumn>Band</TableHeaderColumn>
                <TableHeaderColumn>Venue</TableHeaderColumn>
                <TableHeaderColumn>Location</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={this.state.displayRowCheckbox}>
              <TableRow>
                <TableRowColumn>06/05/2017</TableRowColumn>
                <TableRowColumn>U2</TableRowColumn>
                <TableRowColumn>Barclay's Center</TableRowColumn>
                <TableRowColumn>Brooklyn, NY</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </div>
     )
    }
  }
