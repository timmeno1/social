import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsDataReducer from "./friendsDataReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogPage : dialogsReducer,
    friendsData : friendsDataReducer,
    usersPage : usersReducer
})

let store = createStore(reducers)

export default store;