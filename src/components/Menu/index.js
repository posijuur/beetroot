import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import {NavLink} from 'react-router-dom';

const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
    width: '270px'
  },
  colorLink: {
    color: '#4caf50'
  },
  colorActiveLink: {
    color: '#009688',
    background: '#71f3618c',
    backgroundColor: '#71f3618c'
  },
  subheader: {
    color: '#00bcd4'
  }
};

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

const Menu = () => (
  <Paper style={style.paper}>
    <SelectableList defaultValue={0}>
      <Subheader style={style.subheader}>Start Your Way</Subheader>
      <ListItem
        leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
        value={1}
        style={style.colorLink}
        hoverColor="#e1f5c4"
        containerElement={<NavLink activeStyle = {style.colorActiveLink} to="/beetroot/counter" />}
        primaryText="Sign in"
      />
      <Divider />
      <ListItem
        leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
        value={2}
        style={style.colorLink}
        hoverColor="#e1f5c4"
        containerElement={<NavLink activeStyle = {style.colorActiveLink} to="/beetroot/filters" />}
        primaryText="Programming languages"
      />
    </SelectableList>
  </Paper>
);

export default Menu;