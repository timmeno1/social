import css from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsComponents = props.data.PostsData.map(post => <Post message={post.postText} likesCounter={post.postLikes}/>);
    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
    }

    return (
        <div className={css.postsBlock}>
            <div className={css.header}> My Posts </div>
            <div className={css.newPost}>
                <div><textarea name="new-post" ref={newPostElement} cols="30" rows="4"></textarea></div>

                <button onClick={()=>{addPost()}}>Post</button>
            </div>
            <div className={css.posts}>
                {postsComponents}
            </div>
        </div>
    )
}

export default MyPosts;