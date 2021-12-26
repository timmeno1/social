import React from "react";
import css from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessagesItem from "./MessageItem/MessageItem";



const Dialogs =  (props) => {

    let DialogsComponents = props.dialogs.map( (dialog, key) => <DialogItem key={key} name={dialog.name} id={dialog.id}/>);
    let MessageComponents = props.messages.map( (message, key) => <li key={key}><MessagesItem  message={message.message} id={message.id} own={message.own}/></li>);

    let newMessageBody = props.messageBody;

    let onChange = (e) => {
        let body = e.target.value
        props.onChange(body)
    }

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {DialogsComponents}
            </div>
            <div className={css.messages}>
                <div>
                    {MessageComponents}
                </div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onChange}
                                   placeholder={"Enter your message"}
                    /></div>
                    <div><button onClick={props.sendMessage}>Send</button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;