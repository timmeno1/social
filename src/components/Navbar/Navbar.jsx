import React from "react";
import css from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./FriendsBlock/FriendsBlock";

const Navbar = (props) => {
    return (
        <nav className={css.nav}>
            <div>
                <div className={css.item}>
                    <NavLink to="/profile" activeClassName={css.active}>Profile</NavLink>
                </div>
                <div className={css.item}>
                    <NavLink to="/dialogs" activeClassName={css.active}>Dialogs</NavLink>
                </div>
                <div className={css.item}>
                    <NavLink to="/news" activeClassName={css.active}>News</NavLink>
                </div>
                <div className={css.item}>
                    <NavLink to="/music" activeClassName={css.active}>Music</NavLink>
                </div>
                <div className={css.item}>
                    <NavLink to="/settings" activeClassName={css.active}>Settings</NavLink>
                </div>
            </div>
            <Friends friends={props.data}/>
        </nav>
    );
}

export default Navbar;