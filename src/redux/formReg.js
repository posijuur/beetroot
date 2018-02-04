import { SET_VALUE_USER, DISPLAY_FORM } from '../constants';

const defaultState = {
	user: '',
	email: '',
	stateForm: false
}

export default (state = defaultState, action) => {
	const { type, payload } = action;

	 switch (type) {
		case SET_VALUE_USER:
			return Object.assign({}, state, { user: payload.username, email: payload.email });

		case DISPLAY_FORM:
			return Object.assign({}, state, { stateForm: payload.stateForm });
	}
	
	return state
}