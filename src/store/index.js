import { createStore } from "vuex";
import AuthClient from "@/services/Auth";
const axios = require("axios");

const Auth = {
  state: {
    signUpResponse: {},
    signInResponse: {},
  },
  mutations: {
    setSignUp(state, payload) {
      state.signUpResponse = payload;
    },
    setSignIn(state, payload) {
      state.signInResponse = payload;
    },
  },
  actions: {
    async signUp({ commit }) {
      try {
        let response = "";
        await axios
          .post(AuthClient.signUpEndPoint, {
            email: "olabodeodebunmiseeni@gmail.com",
            password: "bodeslomo",
          })
          .then((res) => {
            response = res.data;
          });
        commit("setSignUp", response);
      } catch (error) {
        console.log(error.response.data.error.message);
      }
    },
    async signIn({ commit }) {
      try {
        let response = "";
        await axios
          .post(AuthClient.signInEndPoint, {
            email: "olabodeodebunmiseeni@gmail.com",
            password: "bodeslomo",
          })
          .then((res) => {
            response = res.data;
          });
        commit("setSignIn", response);
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    Auth,
  },
});
