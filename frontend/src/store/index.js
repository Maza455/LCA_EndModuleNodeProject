import { createStore } from 'vuex'
const dataUrl = 'https://lca-endmodulenodeproject-1.onrender.com/'
export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    user: null
  },
  mutations: {
    setProducts(state, value) {
      state.products = value
    },
    setProduct(state, value) {
      state.product = value
    },
    setUsers(state, value) {
      state.users = value
    },
    setUser(state, value) {
      state.user = value
    }
  },
actions: {
  async fetchProducts(context) {
    let res = await fetch(`${dataUrl}products`);
    let {results} = await res.json();
    console.log(results);
    if(results){
      context.commit('setProducts', results);
    }
  },
  async fetchProduct(context, id) {
    let res = await fetch(`${dataUrl}products/${id}`);
    let {result} = await res.json();
    console.log(result);
    if(result){
      context.commit('setProduct', result);
    }
  }
}
});