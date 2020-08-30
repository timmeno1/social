import css from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div >
            <div className={css.header}> My Posts </div>
            <div className={css.newPost}>
                <textarea name="new-post" id="new-post" cols="30" rows="4"></textarea>
                <button>Post</button>
            </div>
            <div className={css.posts}>
                <Post message={`Клевый пост`} likesCounter={10}/>
                <Post message={`Hello, how are you?`} likesCounter={8}/>
                <Post message={`Somebody loves me`} likesCounter={24}/>
                <Post message={`It's my first post`} likesCounter={3}/>
            </div>
        </div>
    )
}

export default MyPosts;