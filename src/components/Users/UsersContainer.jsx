import {connect} from "react-redux";
import UsersApiComponent from "./UsersAPIComponent";
import {
    follow,
    unfollow,
    setUsers,
    setPage,
    setTotalPages,
    setIsFetching,
    setFollowingInProgress
} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pagination: state.usersPage.pagination,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}



export default connect(mapStateToProps, 
    {
        follow, unfollow, setUsers, setPage, setTotalPages, setIsFetching, setFollowingInProgress
    })(UsersApiComponent);