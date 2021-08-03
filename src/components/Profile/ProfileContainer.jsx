import React from "react";
import Profile from "./Profile"
import axios from "axios";
import {connect} from "react-redux"
import {setUserProfile, setIsProfileFetching} from "../../redux/profileReducer"
import { withRouter } from "react-router-dom";
import {Preloader} from '../common/Preloader'

class ProfileContainer extends React.Component  {

    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : 2
        this.props.setIsProfileFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data)
            this.props.setIsProfileFetching(false)
        })
    }

    render () {
        if(this.props.isProfileFetching) {
            return <Preloader />
        } else {
            return <Profile {...this.props} />
        }
    }
}

let mapStateToProps = (state) => ({
    postsData: state.profilePage.PostsData, 
    newPostTextArea: state.profilePage.newPostTextArea,
    profile: state.profilePage.profile,
    isProfileFetching: state.profilePage.isProfileFetching
})

const withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile,setIsProfileFetching})(withUrlDataContainerComponent);