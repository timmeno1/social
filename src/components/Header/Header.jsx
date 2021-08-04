import React from "react";
import css from './Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
    return (
        <header className={css.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="" width='100'/>
            <div className={css.loginBlock}>
                {   
                    props.isAuth  
                        ? <div classname={css.login}>{props.login} </div>
                        : <NavLink to="/login" className={css.loginButton}>Login</NavLink>
                    }
            </div>
        </header>
    );
}

export default Header;