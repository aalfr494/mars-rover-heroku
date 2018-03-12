import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRoverData } from '../actions/index';

class QueryBar extends Component {
	constructor(props) {
		super(props);

		this.state = { searchdate: '', rovername: 'opportunity' };

		this.onInputChange = this.onInputChange.bind(this);
		this.onSelectChange = this.onSelectChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		
		this.setState({ searchdate: event.target.value });
		

	}

	onSelectChange(event) {
		this.setState({ rovername: event.target.value });
		

	}

	onFormSubmit(event){
		event.preventDefault();

		//we need to fetch rover data

		console.log("my test",this.state.searchdate)

		const theRoverName = this.state.rovername;
		const theRoverDate = this.state.searchdate;


		this.props.fetchRoverData(theRoverDate, theRoverName);
		this.setState({ searchdate: '' });
	}



	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<div className="form-group">
				   <label> Enter a Date</label>
					<input placeholder="YYYY-MM-DD" className="form-control" value={this.state.searchdate}	onChange={this.onInputChange} /> 
					<br />
					<label> Select A Rover</label>
					<select className="form-control" name="Rovers" value={this.state.rovername} onChange={this.onSelectChange} >
							<option value="curiosity">Curiosity</option>
							<option value="opportunity">Opportunity</option>
							<option value="spirit">Spirit</option>
					</select>

					<span className="input-group-btn">
							<button type="submit" className="btn btn-secondary">Submit</button>
					</span>
				</div>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchRoverData }, dispatch);
}

export default connect(null, mapDispatchToProps)(QueryBar);