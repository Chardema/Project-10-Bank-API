import { createStore, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import userReducer from "./reducers/userReducer"; // importez vos reducers ici

const rootReducer = combineReducers({
    auth: authReducer, // ajoutez vos reducers à l'objet passé à combineReducers
    user: userReducer
});

const store = createStore(rootReducer);

export default store;
