import React from 'react'
import axios from "axios";
import userPhoto from "../../assets/img/user.png"
import css from './Users.module.css'

class Users extends React.Component {
    constructor(props) {
        super(props)

        this.currentPage = this.props.pagination.currentPage
        this.totalPages = []
        
        for(let i=1; i<=this.props.pagination.totalPages; i++) {
            this.totalPages.push(i)
        }
    }
    
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            console.log(response)
            this.props.setUsers(response.data.items)
        })
    }
    componentDidUpdate(){

        this.currentPage = this.props.pagination.currentPage
        this.totalPages = []
        
        for(let i=1; i<=this.props.pagination.totalPages; i++) {
            this.totalPages.push(i)
        }
    }
    
    render () {
        return <div>
            
            
            <div> 
                <ul className={css.pages}>
                    {
                        this.totalPages.map( p => {
                            return p===this.currentPage 
                                    ?  <li className={css.page + " "  + css.active }>{p}</li>
                                    :  <li className={css.page} onClick={(()=>this.props.setPage(p))}>{p}</li>
                            
                        })
                    }
                </ul>        
            </div>


            {
                this.props.users.map( u => <div key={u.id}>
            <span>
            <div><img src={u.photos.small ? u.photos.small : userPhoto } alt="" width="100"/></div>
            <div>{
                u.followed
                    ?   <button onClick={()=>this.props.unfollow(u.id)}>Unfollow</button>
                    :   <button onClick={()=>this.props.follow(u.id)}>Follow</button>
            }</div>
            </span>
                    <span>
            <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
            </span>
            <span>
            <div>{u.location ? u.location.city : "some city"}</div>
            <div>{u.location ? u.location.country : "some country"}</div>
            </span>
            </span>
                </div>)
            }
        </div>;
    }
}

export default Users;