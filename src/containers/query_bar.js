import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRoverData } from '../actions/index';

class QueryBar extends Component {
	constructor(props) {
		super(props);

		this.state = { searchdate: '' };

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		
		this.setState({ searchdate: event.target.value });

	}

	onFormSubmit(event){
		event.preventDefault();

		//we need to fetch rover data

		console.log("my test",this.state.searchdate)


		this.props.fetchRoverData(this.state.searchdate);
		this.setState({ searchdate: '' });
	}



	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				
					<input placeholder="YYYY-MM-DD" className="form-control" value={this.state.searchdate}	onChange={this.onInputChange} />
						
					<span className="input-group-btn">
						<button type="submit" className="btn btn-secondary">Submit</button>
					</span>
					<select className="form-control" name="Rovers">
							<option value="curiosity">Curiosity</option>
							<option value="opportunity">Opportunity</option>
							<option value="spirit">Spirit</option>
					</select>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchRoverData }, dispatch);
}

export default connect(null, mapDispatchToProps)(QueryBar);