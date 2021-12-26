
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES'
const TOGGLE_ISFETCHING = 'TOGGLE_ISFETCHING'
const TOGGLE_FOLLOWINGINPROGRESS = 'TOGGLE_FOLLOWINGINPROGRESS'


let initialState = {
    users : [],
    pagination: {
        currentPage: 1,
        totalPages: 0,
        pageLimit: 10
    },
    isFetching: false,
    followingInProgress: []
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
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: action.page
                }
            }
        case SET_TOTAL_PAGES:
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    totalPages: action.totalPages
                }
            }
        case TOGGLE_ISFETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWINGINPROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId )
            }

        default:
            return state
    }
}


export const follow = (userID) => {
    return {
        type: FOLLOW,
        userID
    }
}
export const unfollow = (userID) => {
    return {
        type: UNFOLLOW,
        userID
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setPage = (page) => {
    return {
        type: SET_PAGE,
        page
    }
}

export const setTotalPages = (totalPages) => {
    return {
        type: SET_TOTAL_PAGES,
        totalPages
    }
}

export const setIsFetching = (isFetching) => {
    return {
        type: TOGGLE_ISFETCHING,
        isFetching
    }
}
export const setFollowingInProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_FOLLOWINGINPROGRESS,
        isFetching, userId
    }
}


export default userReducer
