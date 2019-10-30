import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    lastId:1
};

export default new Vuex.Store({
    state,
    getters:{},
    actions:{},
    mutations:{}
});