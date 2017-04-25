export default {
    accesToken: (state) => {
        return state.login.UserToken
    },
    userName: (state) => {
        return state.login.NikeName;
    },
    isLogin: (state) => {
        return state.login.isLogin;
    },
    headers: (state) => {
        return { UserToken: state.login.UserToken }
    },
    isAdmin: (state) => {
        return Boolean(state.login.SuperAdmin);
    },
    getUserId: (state) => {
        return state.login.UserID;
    },
    dateFormat: state => {
        return `${state.nowDate.getFullYear()}-${state.nowDate.getMonth()+1}-${state.nowDate.getDate()}  ${state.nowDate.getHours()}:${state.nowDate.getMinutes()}:${state.nowDate.getSeconds()}`;
    }
}