import { createStore, combineReducers } from "redux";
import authReducer from "./reducers/authReducer"; // importez vos reducers ici

const rootReducer = combineReducers({
    auth: authReducer, // ajoutez vos reducers à l'objet passé à combineReducers
});

const store = createStore(rootReducer);

export default store;
