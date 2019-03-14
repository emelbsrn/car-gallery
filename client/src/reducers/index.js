import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import carReducer from './carReducer';
import carTypeReducer from './carTypeReducer';

export default combineReducers({
    form: formReducer,
    cars: carReducer,
    types: carTypeReducer
});