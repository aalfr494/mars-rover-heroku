import axios from 'axios';
import QueryBar from '../containers/query_bar';


const API_KEY= 'D5XmTzyRFPHDzKv3yBRMWwwtfYd7Ui986j8vC2KM';

const ROVER_NAME='opportunity';


const FIRST_PART_ROOT_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/`;
const MIDDLE_PART = `/photos?earth_date=`;
const SECOND_PART_ROOT_URL = `&api_key=${API_KEY}`;

export const FETCH_ROVER_DATA = 'FETCH_ROVER_DATA';




export function fetchRoverData(date, name) {

	const url = `${FIRST_PART_ROOT_URL}${name}${MIDDLE_PART}${date}${SECOND_PART_ROOT_URL}`;

	const request = axios.get(url);

console.log('Request:', request);

	return {
		type: FETCH_ROVER_DATA,
		payload: request
	};

}



// full url https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=2018-01-01&api_key=D5XmTzyRFPHDzKv3yBRMWwwtfYd7Ui986j8vC2KM