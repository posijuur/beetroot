import { REMOVE_SOFTWARE_LANGS } from '../constants';

export default store => next => action => {
    const { type, payload, ...rest } = action;

    if (type === '@@router/LOCATION_CHANGE' && payload.pathname !== "/beetroot/filters") {
        next({
            type: "@@router/LOCATION_CHANGE",
            payload,
            ...rest
        })

        next({
            type: REMOVE_SOFTWARE_LANGS
            
        })
    } else {
        return next(action)
    }
}