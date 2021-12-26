import React from "react";
import { Preloader } from "../../common/Preloader";
import css from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    } else {
        return (
            <div className={css.profileInfoBlock}>
                <div className={css.cover}>
                    <img src="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg" alt=""/>
                </div>
                <div className={css.descriptionBlock}>
                    <span className={css.name}>{props.profile.fullName}</span>
                    <img className={css.avatar} src={props.profile.photos.large ? props.profile.photos.large : "https://cdn.iconscout.com/icon/free/png-512/avatar-375-456327.png"} alt=""/>
                    <span className={css.name}>About me: {props.profile.aboutMe}</span>
                </div>
            </div>
        )
    }
    
}

export default ProfileInfo;