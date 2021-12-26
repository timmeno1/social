import React from "react";
import Profile from "./Profile"
import axios from "axios";
import {connect} from "react-redux"
import {setUserProfile, setIsProfileFetching} from "../../redux/profileReducer"
import { withRouter } from "react-router-dom";
import {Preloader} from '../common/Preloader'
import {authMe, getUserProfile} from "../../api/api";

class ProfileContainer extends React.Component  {

    componentDidMount() {

        let userId = null
        this.props.setIsProfileFetching(true)

        if(this.props.match.params.userId) {
            userId = this.props.match.params.userId

            getUserProfile(userId).then(response => {
                this.props.setUserProfile(response.data)
                this.props.setIsProfileFetching(false)
            })
        } else {
            authMe().then(response => {
                if(response.data.resultCode === 0 ) {
                    userId = response.data.data.id

                    getUserProfile(userId).then(response => {
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