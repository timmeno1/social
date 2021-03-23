import css from "./MyPosts.module.css";
import React, {useRef} from "react";
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsComponents = props.posts.map(post => <Post message={post.postText} likesCounter={post.postLikes}/>);

    let newPostElement = React.createRef()

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={css.postsBlock}>
            <div className={css.header}> My Posts </div>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostTextArea}/>
                </div>
                <button onClick={props.addPost}>Post</button></div>
            <div className={css.posts}>
                {postsComponents}
            </div>
        </div>
    )
}

export default MyPosts;