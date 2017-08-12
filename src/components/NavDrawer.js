import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Menu from 'material-ui/svg-icons/navigation/menu'
import Link from 'react-router'

export default class NavDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <FloatingActionButton onTouchTap={this.handleToggle}>
            <Menu />
        </FloatingActionButton>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Profile</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Events</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Logout</MenuItem>
        </Drawer>
      </div>
    );
  }
}
