import React from "react";
import {SendMessageCreator, UpdateNewMessageText} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogs : state.dialogPage.DialogsData,
        messages: state.dialogPage.MessagesData,
        messageBody: state.dialogPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChange : (text) => {
            dispatch(UpdateNewMessageText(text))
        },
        sendMessage : () => {
            dispatch(SendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;