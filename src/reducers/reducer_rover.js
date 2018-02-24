import { FETCH_ROVER_DATA } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_ROVER_DATA:
			// return state.concat([ action.payload.data ]); same as below
			return [ action.payload.data, ...state ];
	}


	return state;
}