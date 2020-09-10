import React from "react";
import css from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={css.cover}>
                <img src="https://p.bigstockphoto.com/eIdTXLbqQilMs9xbjvcs_bigstock-Aerial-View-Of-Sandy-Beach-Wit-256330393.jpg" alt=""/>
            </div>
            <div className={css.description}>
                <img src="https://cdn.iconscout.com/icon/free/png-512/avatar-375-456327.png" alt=""/>
                About me
            </div>
        </div>
    )
}

export default ProfileInfo;