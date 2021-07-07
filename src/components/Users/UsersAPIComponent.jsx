import React from 'react'
import axios from "axios";
import userPhoto from "../../assets/img/user.png"
import css from './Users.module.css'
import {Preloader} from './Preloader'




let Users = (props) => {

    return <div>
            
    {
        props.users.map( u => <div key={u.id}>
            <span>
                <div><img src={u.photos.small ? u.photos.small : userPhoto } alt="" width="100"/></div>
                <div>{
                    u.followed
                        ?   <button onClick={()=>props.unfollow(u.id)}>Unfollow</button>
                        :   <button onClick={()=>props.follow(u.id)}>Follow</button>
                }</div>
                </span>
                        <span>
                <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
                </span>
            </span>
        </div>)
    }
    </div>;
        
}

class UsersApiComponent extends React.Component {

    componentDidMount() {

        this.props.setIsFetching(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pagination.pageLimit}&page=${this.props.pagination.currentPage}`).then(response => {
            this.props.setUsers(response.data.items)

            this.props.setIsFetching(false)
            let totalPages = Math.ceil(response.data.totalCount/this.props.pagination.pageLimit)
            this.props.setTotalPages(totalPages)
        })
    }
    
    render () {

        let currentPage = this.props.pagination.currentPage
        let totalPages = []

        for(let i=1; i<=this.props.pagination.totalPages; i++) {
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
                                        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pagination.pageLimit}&page=${p}`).then(response => {
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