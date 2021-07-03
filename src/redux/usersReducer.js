
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';


let initialState = {
    users : [],
    pagination: {
        currentPage: 1,
        totalPages: 20,
        pageLimit: 10
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if( u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if( u.id === action.userID  ) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS:
            return {...state, users: [...action.users]}

        case SET_PAGE:
            let stateCopy = {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: action.page
                }
            }
            debugger;
            return stateCopy

        default:
            return state
    }
}


export const followAC = (userID) => {
    return {
        type: FOLLOW,
        userID
    }
}
export const unfollowAC = (userID) => {
    return {
        type: UNFOLLOW,
        userID
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setPageAC = (page) => {
    return {
        type: SET_PAGE,
        page
    }
}


export default userReducer
