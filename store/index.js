
import Vuex from "vuex";
import city from './modules/city'
import country from './modules/country'

const createStore = () => {
    return new Vuex.Store({
        namespaced: true,
        modules: {
            country: country,
            city: city,
        }
    });
}

export default createStore;