import { createStore } from "vuex";
import subjectModule from "./subject/index"
const store = createStore({
    modules:{
        subjects : subjectModule
    },
    state(){
        return{
            
        }
    },

})

export default store