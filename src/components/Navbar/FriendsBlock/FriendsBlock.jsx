import React from "react";
import css from "./FriendsBlock.module.css"
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friends = props.friends.map(friend => <Friend name={friend.name} photo={friend.photo}/>)
    return (
        <div>
            <h3>Friends</h3>
            <div className={css.friends}>
                {friends}
            </div>
        </div>
    )
}

export default Friends;