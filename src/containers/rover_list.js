import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class RoverList extends Component {

	renderRoverData(dateData) {

		//console.log("looking for data", roverdata)

		const id = dateData.photos.map(roverdata => roverdata.id);
		const rovername = _.uniq(dateData.photos.map(roverdata => roverdata.rover.name));
		const image = _.head(dateData.photos.map(roverdata => roverdata.img_src));
		//const earthdate = dateData.photos.map(roverdata => roverdata.earth_date);

		const earthdate = _.uniq(dateData.photos.map(roverdata => roverdata.earth_date));






		return (
				<tr key={id}>
					<td>{rovername}</td>
					<td>{earthdate}</td>
					<td><img src={image} /> </td>
				</tr>

			);
	}


	render () {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Rover Name</th>
						<th>Date</th>
						<th>Image</th>					
					</tr>
				</thead>
				<tbody>
					{this.props.roverdata.map(this.renderRoverData)}
				</tbody>
			</table>

		);
	}
}

function mapStateToProps({ roverdata }) {

	return { roverdata };
}

export default connect(mapStateToProps)(RoverList);