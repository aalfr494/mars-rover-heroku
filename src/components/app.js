import React, { Component } from 'react';
import QueryBar from '../containers/query_bar';
import RoverList from '../containers/rover_list';


export default class App extends Component {
  render() {
    return (
      <div>
      	<QueryBar />
      	<RoverList />
      </div>
    );
  }
}
