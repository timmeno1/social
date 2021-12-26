import React, {useRef} from "react";
import {AddPostActionCreator, UpdatePostActionCreator} from "../../../../redux/profileReducer";

const PostForm = (props) => {



    const newPostElement = useRef(null)

    let addPost = () => {
        //props.dispatch(AddPostActionCreator())
    }
    let onPostChange = (event) => {
        const text = event.target.value;
        //props.dispatch(UpdatePostActionCreator(text))
    }

    return (
        <div >

        </div>
    )
}

export default PostForm;