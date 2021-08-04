import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsDataReducer from "./friendsDataReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogPage : dialogsReducer,
    friendsData : friendsDataReducer,
    usersPage : usersReducer,
    authData: authReducer
})

let store = createStore(reducers)

export default store;

window.myStore = store;