import {connect} from "react-redux";
import UsersApiComponent from "./UsersAPIComponent";
import {followAC, unfollowAC, setUsersAC, setPageAC, setTotalPagesAC} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pagination: state.usersPage.pagination
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        follow : (userId)=> {
            dispatch(followAC(userId))
        },
        unfollow : (userId)=> {

            dispatch(unfollowAC(userId))
        },
        setUsers : (users)=> {
            dispatch(setUsersAC(users))
        },
        setPage : (page)=>{
            dispatch(setPageAC(page))
        },
        setTotalPages : (totalPages)=>{
            dispatch(setTotalPagesAC(totalPages))
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent);