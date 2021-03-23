const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'


let initialState = {
    DialogsData : [
        {id: 1, name: "Timych"},
        {id: 2, name: "Yulia"},
        {id: 3, name: "Asal"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Dimych"}
    ],
    MessagesData : [
        {id: 1, message: "How are you?!", own:false},
        {id: 2, message: "Cool! Learning react!", own:true},
        {id: 3, message: "Node rules", own:false},
        {id: 4, message: "Node rules", own:false},
        {id: 5, message: "Node rules", own:false}
    ],
    newMessageText : ""
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageText;
            return {
                ...state,
                newMessageText : "",
                MessagesData : [...state.MessagesData, {id: 6, message: body, own: true}]
            }

        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.body
            }

        default:
            return state
    }

}



export const SendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const UpdateNewMessageText = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE, body:text
    }
}

export default dialogsReducer