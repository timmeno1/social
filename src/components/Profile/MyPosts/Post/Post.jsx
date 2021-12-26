import React from "react";
import css from "./Post.module.css";

const Post = (props) => {
    return (
        <div>

            <div className={css.item}>
                <img src="https://cdn.iconscout.com/icon/free/png-512/avatar-375-456327.png" alt=""/>
                {props.message}
            </div>
            <div className={css.like}>
                <span>like</span>
                <span className={css.counter}> {props.likesCounter}</span>
            </div>
        </div>
    )
}
export  default Post;
