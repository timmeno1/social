import React from "react";
import css from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessagesItem from "./MessageItem/MessageItem";



const Dialogs =  (props) => {

    let DialogsComponents = props.data.DialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let MessageComponents = props.data.MessagesData.map( message => <li><MessagesItem message={message.message} id={message.id} own={message.own}/></li>);

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {DialogsComponents}
            </div>
            <div className={css.messages}>
                <ul>
                    {MessageComponents}
                </ul>
            </div>
        </div>
    );
}

export default Dialogs;