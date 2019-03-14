import cars from '../apis/cars';
import history from '../history';

export const createCar = formValues => async dispatch => {

    const response = await cars.post('/cars', 
        formValues
    );
    
    dispatch({
        type: 'CREATE_CAR',
        payload: response.data
    });
    history.push('/');
};

export const fetchCars = () => async dispatch => {
    const response = await cars.get('/cars');
    dispatch({
        type: 'FETCH_CARS',
        payload: response.data
    });
};

export const getBrandList = () => async dispatch => {
    const response = await cars.get('/brands');
    dispatch({
        type: 'GET_BRANDS',
        payload: response.data
    })
}

export const getModelList = id => ({
    type: 'GET_MODELS',
    payload: id.models
});

export const getSelectedModel = model => ({
    type: 'GET_SELECTED_MODEL',
    payload: model
});

export const emptySelectedModel = () => ({
    type: 'EMPTY_SELECTED_MODEL'
});

export const emptyModelList = () => ({
    type: 'EMPTY_MODEL_LIST'
});

export const getImages = file => ({
    type: 'IMAGE_UPLOAD',
    payload: file
});