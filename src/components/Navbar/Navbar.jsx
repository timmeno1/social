import React from "react";
import css from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={css.nav}>
            <div className={css.item}>Profile</div>
            <div className={css.item}>Messages</div>
            <div className={css.item}>News</div>
            <div className={css.item}>Music</div>
            <div className={css.item}>Settings</div>
        </nav>
    );
}

export default Navbar;