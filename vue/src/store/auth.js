import axios from 'axios';

const BASE_URL = 'http://product.test';

const state = {
    user: null,
    token: window.localStorage.getItem('token')
}

const getters = {
    check: state => !!state.user,
    user: state => state.user ? state.user : '',
    token: state => state.token ? state.token : ''
}

const mutations = {
    setUser(state, user) {
        state.user = user;
    },
    setToken(state, token) {
        window.localStorage.setItem('token', token);
    }
}

const actions = {
    register(context, data) {
        axios.post(BASE_URL + '/api/register', data).then((result) => {
            context.commit("setUser", result.data.user);
            context.commit("setToken", result.data.token);
        }).catch(error => {
            console.log(`Error! HTTP Status: ${error}`);
        });
    },
    login(context, data) {
        axios.post(BASE_URL + '/api/login', data).then((result) => {
            context.commit("setUser", result.data.user);
            context.commit("setToken", result.data.token);
        }).catch(error => {
            console.log(`Error! HTTP Status: ${error}`);
        });
    },
    logout(context) {
        console.log(state.token)
        axios.post(BASE_URL + '/api/logout', null, {
            headers: {
                Authorization: `Bearer ${state.token}`,
            }
        }).then((result) => {
            console.log(result)
            context.commit("setUser", null);
            context.commit("setToken", null);
        }).catch(error => {
            console.log(`Error! HTTP Status: ${error}`);
        });
    },
    fetchUser(context) {
        axios.get(BASE_URL + '/api/user', null, {
            headers: {
                Authorization: `Bearer ${state.token}`,
            }
        }).then((result) => {
            context.commit("setUser", result.data.user);
        }).catch(error => {
            console.log(`Error! HTTP Status: ${error}`);
        });
    }

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}