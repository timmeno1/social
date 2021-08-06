import React from "react";
import Profile from "./Profile"
import axios from "axios";
import {connect} from "react-redux"
import {setUserProfile, setIsProfileFetching} from "../../redux/profileReducer"
import { withRouter } from "react-router-dom";
import {Preloader} from '../common/Preloader'

class ProfileContainer extends React.Component  {

    componentDidMount() {

        let userId = null
        this.props.setIsProfileFetching(true)

        if(this.props.match.params.userId) {
            userId = this.props.match.params.userId

            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
                this.props.setUserProfile(response.data)
                this.props.setIsProfileFetching(false)
            })
        } else {
            axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
                if(response.data.resultCode === 0 ) {
                    userId = response.data.data.id

                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
                    this.props.setUserProfile(response.data)
                    this.props.setIsProfileFetching(false)
                })
                }
            })
        }

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
    isProfileFetching: state.profilePage.isProfileFetching,
    authData: state.authData
})

const withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile,setIsProfileFetching})(withUrlDataContainerComponent);