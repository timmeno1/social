
const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_POST_TEXTAREA = 'UPDATE-POST-TEXTAREA'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    PostsData : [
        {
            id: 1,
            postText: "Клевый пост",
            postLikes: 10
        },
        {
            id: 2,
            postText: "Hello, how are you?",
            postLikes: 8
        },
        {
            id: 3,
            postText: "Somebody loves me",
            postLikes: 24
        },
        {
            id: 4,
            postText: "It's my first post",
            postLikes: 3
        }
    ],
    newPostTextArea : "",
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                id: 5,
                postText: state.newPostTextArea,
                postLikes: 0
            }
            return {
                ...state,
                newPostTextArea: '',
                PostsData: [...state.PostsData, newPost]
            }
        case UPDATE_POST_TEXTAREA:
            return {
                ...state,
                newPostTextArea : action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}


export const AddPostActionCreator = () => ({type: ADD_NEW_POST})

export const UpdatePostActionCreator = (text) => ({type: UPDATE_POST_TEXTAREA, newText:text})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile })

export default profileReducer