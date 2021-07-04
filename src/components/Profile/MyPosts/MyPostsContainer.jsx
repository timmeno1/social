import {AddPostActionCreator, UpdatePostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.PostsData,
        newPostTextArea: state.profilePage.newPostTextArea
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost : () => {
            dispatch(AddPostActionCreator())
        },
        updateNewPostText : (text) => {
            dispatch(UpdatePostActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;