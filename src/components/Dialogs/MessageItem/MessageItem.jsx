import React from "react";
import css from "./../Dialogs.module.css";


const MessagesItem = (props) => {
    if(props.own) {
        return (
            <div className={css.message + ' ' + css.right}>
                {props.message}
            </div>
        )
    } else {
        return (
            <div className={css.message}>
                {props.message}
            </div>
        )
    }
}

export default MessagesItem;