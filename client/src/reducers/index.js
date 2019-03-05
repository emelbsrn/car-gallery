import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import carReducer from './carReducer';

export default combineReducers({
    form: formReducer,
    cars: carReducer
});