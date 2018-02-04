import { LOAD_SOFTWARE_LANGS, START, FAIL, SUCCESS, REMOVE_SOFTWARE_LANGS } from '../constants';

const defaultState = {
	softWareLangs: [],
	loading: "",
	loaded: ""
}

export default (state = defaultState, action) => {
	const { type, response} = action;

	 switch (type) {
		case LOAD_SOFTWARE_LANGS + START:
			return Object.assign({}, state, { loading: true, loaded: false });

		case LOAD_SOFTWARE_LANGS + FAIL:
			return Object.assign({}, state);

		case LOAD_SOFTWARE_LANGS + SUCCESS:
			return Object.assign({}, state, { 
				softWareLangs: state.softWareLangs.concat(response.programLangs), 
				loading: false, 
				loaded: true 
			})

		case REMOVE_SOFTWARE_LANGS:
			return Object.assign({}, state, { softWareLangs: [], loaded: false})
	}
	
	return state
}