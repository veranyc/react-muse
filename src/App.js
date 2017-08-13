import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import {teal800, deepOrange300} from 'material-ui/styles/colors'
import NavDrawer from './components/NavDrawer'
import SearchRouter from './routes/SearchRouter'
import UserRouter from './routes/UserRouter'
import EventsRouter from './routes/EventsRouter'

injectTapEventPlugin()
// const muiTheme = getMuiTheme(darkBaseTheme)

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: teal800,
    accent1Color: deepOrange300
  }
})

class App extends Component {  
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
          <div>
            <AppBar title="Vera's App">
              <NavDrawer />
            </AppBar>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route path='/user' component={UserRouter} />
            <Route path='/events' component={EventsRouter} />
            <Route path='/search' component={SearchRouter} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
