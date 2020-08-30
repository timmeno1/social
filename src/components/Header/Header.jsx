import React from "react";
import css from './Header.module.css'

const Header = () => {
    return (
        <header className={css.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="" width='100'/>
    </header>
    );
}

export default Header;