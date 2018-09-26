// tslint:disable:typedef
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface IMotel {
  name: string;
  rating: number;
}

interface IState {
  motels: IMotel[];
}

export const Actions = {
  addMotel: "addMotel2"
};

const initialState: IState = {
  motels: [{ name: "Cassandra Inn", rating: 2.6 }]
};

// getters
const getters = {
  motels: state => state.motels,
  motelsCount: state => state.motels.length
};

// actions
const actions = {
  // different variant where the Action's name can be refactored
  // [Actions.addMotel]({ commit }, motel: IMotel) {
  addMotel({ commit }, motel: IMotel) {
    console.log(
      "this data would be sent to the server and the validated response can then be added"
    );
    console.log(
      motel.rating > 3
        ? "We were pretty satisfied :)"
        : "Better not stay here..."
    );
    commit("ADD_MOTEL_SUCCESS", motel);
  }
};

console.log("actions");
console.log(actions);

// mutations
const mutations = {
  ADD_MOTEL_SUCCESS(state: IState, motel: IMotel) {
    state.motels.push(motel);
  }
};

export default new Vuex.Store<IState>({
  state: initialState,
  getters,
  mutations,
  actions
});
