import _ from 'lodash';
const INITIAL_STATE = {
    brands: [],
    models: [],
    selectedModel: '',
    imagePath: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_CARS':
            return {...state, ..._.mapKeys(action.payload, 'id')}
        case 'FETCH_CAR': 
            return {...state, [action.payload.id]: action.payload}
        case 'CREATE_CAR': 
            return {...state, [action.payload.id]: action.payload}
        case 'EDIT_CAR': 
            return {...state, [action.payload.id]: action.payload}
        case 'DELETE_CAR': 
            return _.omit(state, action.payload)
        case 'GET_BRANDS':
            return Object.assign({}, state, {
                brands: action.payload
            })
        case 'GET_MODELS':
            return Object.assign({}, state, {
                models: action.payload
            })
        case 'EMPTY_SELECTED_MODEL':
            return Object.assign({}, state, {
                selectedModel: ''
            }) 
        case 'GET_SELECTED_MODEL':
            return Object.assign({}, state, {
                selectedModel: action.payload
            })
        case 'EMPTY_MODEL_LIST':
            return Object.assign({}, state, {
                models: []
            })
        case 'IMAGE_UPLOAD':
            return Object.assign({}, state, {
                imagePath: action.payload
            })
        default:
            return state;
    }
}
