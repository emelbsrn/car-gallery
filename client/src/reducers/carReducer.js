import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_CARS':
            return {...state, ..._.mapKeys(action.payload, '_id')}
        case 'FETCH_CAR': 
            return {...state, [action.payload._id]: action.payload}
        case 'CREATE_CAR': 
            return {...state, [action.payload.id]: action.payload}
        case 'EDIT_CAR': 
            return {...state, [action.payload.id]: action.payload}
        case 'DELETE_CAR': 
            return _.omit(state, action.payload)
        default:
            return state;
    }
}
