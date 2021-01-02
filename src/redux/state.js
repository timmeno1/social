
let store = {
    _state : {
        dialogPage : {
            DialogsData : [
                {id: 1, name: "Timych"},
                {id: 2, name: "Yulia"},
                {id: 3, name: "Asal"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Dimych"}
            ],
            MessagesData : [
                {id: 1, message: "How are you?!", own:false},
                {id: 2, message: "Cool! Learning react!", own:true},
                {id: 3, message: "Node rules", own:false},
                {id: 4, message: "Node rules", own:false},
                {id: 5, message: "Node rules", own:false}
            ]
        },
        profilePage : {
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
            ]
        },
        friendsData : [
            {
                id: 1,
                name: "Sasha",
                photo: "https://www.befunky.com/images/prismic/2ba00f8e1b504cd1576ff85bd101c2137ea6a02e_landing-photo-to-art-img-4-before.png?auto=webp&format=jpg&width=736"
            },
            {
                id: 2,
                name: "Yuliya",
                photo: "https://i2.wp.com/www.alphr.com/wp-content/uploads/2018/04/how_to_back_up_photos_on_google_photos.jpg?resize=563%2C563&ssl=1"
            },
            {
                id: 3,
                name: "Asal",
                photo: "https://i.pinimg.com/474x/98/3f/e4/983fe4272910dd6579a4e046202f4c38.jpg"
            }
        ]
    },
    _callSubscriber() {
        console.log("state changed")
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState () {
        return this._state;
    },

    dispatch(action) {  // { type: "ACTION-TYPE" }
        if(action.type === "ADD-POST") {
            let newPost = {
                id:5,
                postText : action.postText,
                postLikes: 0
            }
            this._state.profilePage.PostsData.push(newPost);
            this._callSubscriber();
        }
    }

}



export default store;

window.store = store;