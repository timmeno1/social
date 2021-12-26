import axios from 'axios'

const fetcher = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {'API-KEY': '152cb6d7-6e6e-44ca-a3d0-ba83a04c32d5'}
})

const getUsers = ( currentPage = 1, pageLimit = 10 ) => {
    return fetcher.get(`/users?count=${pageLimit}&page=${currentPage}`)
}
const getUserProfile = (userId) => {
    return fetcher.get(`/profile/${userId}`)
}
const follow = ( userId ) => {
    return fetcher.post(`/follow/${userId}`, {})
}
const unfollow = ( userId ) => {
    return fetcher.delete(`/follow/${userId}`, {})
}

const authMe = () => {
    return fetcher.get('auth/me')
}


export {
    getUsers,
    follow,
    unfollow,
    authMe,
    getUserProfile
}