import { SET_VALUE_USER, DISPLAY_FORM, LOAD_SOFTWARE_LANGS } from '../constants';

export function setValueUser(userFormInfo) {
	return {
        type: SET_VALUE_USER,
        payload: userFormInfo
    }
}

export function displayForm(state) {
	return {
        type: DISPLAY_FORM,
        payload: state
    }
}

export function loadSoftwareLangs() {
    return {
        type: LOAD_SOFTWARE_LANGS,
        callAPI: 'https://api.myjson.com/bins/xiy7t'
    }
}