const INITIAL_STATE = {
    brands: [],
    models: [],
    selectedModel: '',
    images: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
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
                images: [...state.images, action.payload]
            })
        default:
            return state;
    }
}
