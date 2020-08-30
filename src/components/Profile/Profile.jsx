import React from "react";
import css from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={css.profile}>
            <div className={css.cover}>
                <img src="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg" alt=""/>
            </div>
            <div className={css.avatar}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBW6Ds9PQ7MKWVXSnuswME-ENpLVjtuBgJlg&usqp=CAU" alt=""/>
                About me
            </div>

            <MyPosts />



        </div>
    )
}

export default Profile;