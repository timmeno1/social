import React from 'react'
import axios from "axios";
import userPhoto from "../../assets/img/user.png"
import css from './Users.module.css'
import {Preloader} from '../common/Preloader'
import {NavLink} from 'react-router-dom'
import {follow, getUsers, unfollow} from "../../api/api";




let Users = (props) => {

    return <div>
            
    {
        props.users.map( u => <div key={u.id}>
            <div>
                <div>
                    <NavLink to={`/profile/${u.id}`}>
                        <img src={u.photos.small ? u.photos.small : userPhoto } alt="" width="100"/>
                    </NavLink>
                </div>
                <div>{
                    u.followed
                        ?   <button onClick={()=> {
                            unfollow(u.id)
                                .then(response => {
                                if(response.data.resultCode === 0 ) {
                                    props.unfollow(u.id)
                                } else console.log(response.data)

                            })
                        }}>Unfollow</button>
                        :   <button onClick={()=> {
                            follow(u.id)
                                .then(response => {
                                if(response.data.resultCode === 0 ) {
                                    props.follow(u.id)
                                } else console.log(response.data)
                            })
                        }}>Follow</button>
                }</div>
                </div>
                        <div>
                <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
                </span>
            </div>
        </div>)
    }
    </div>;
        
}

class UsersApiComponent extends React.Component {

    componentDidMount() {

        this.props.setIsFetching(true)

        getUsers().then(response => {
            this.props.setUsers(response.data.items)

            this.props.setIsFetching(false)
            let totalPages = Math.ceil(response.data.totalCount/this.props.pagination.pageLimit)
            this.props.setTotalPages(totalPages)
        })
    }
    
    render () {

        let currentPage = this.props.pagination.currentPage
        let totalPages = []

        for(let i=1; i<=100; i++) {
            totalPages.push(i)
        }

        return (
            <div>
                {
                    this.props.isFetching 
                    ? <Preloader />
                    : null

                } 
                <ul className={css.pages}>
                    {
                        totalPages.map( p => {
                            return p===currentPage 
                                    ?  <li className={css.page + " "  + css.active } key={p}>{p}</li>
                                    :  <li className={css.page}  key={p} onClick={(()=>{
                                        this.props.setPage(p)
                                        getUsers(p, this.props.pagination.pageLimit).then(response => {
                                            this.props.setUsers(response.data.items)
                                        })
                                    })}>{p}</li>
                        })
                    }
                </ul> 
                <Users users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}/>
            </div>
        )
    }
}

export default UsersApiComponent;