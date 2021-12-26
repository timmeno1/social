import css from "./../FriendsBlock.module.css";
import React from "react";

const Friend = (props) => {
    return (
        <div className={css.friendsItem}>
            <img src={props.photo} alt=""/>
            <span>{props.name}</span>
        </div>
    )
};

export default Friend;
