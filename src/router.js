import { createRouter,createWebHistory} from 'vue-router';
import indexPage from "./PAGES/homepage/indexPage.vue";
import departmentPage from "./PAGES/departmentpage/indexPage.vue";
import subjectPage from "./PAGES/subjectpage/subjectPage.vue"
import thePage from "./PAGES/LOGIN/thePage.vue";
import signUp from "./PAGES/LOGIN/signUp.vue"
const router =createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/', component:indexPage },
       {path:'/department/:clasName', component:departmentPage, props:true},
       {path:'/subject/:id', component:subjectPage, props:true, },
       {path :"/login", component:thePage,
       meta: {
        hideComponents: true,
       }, 
    },
    {path :"/register", component:signUp,
    meta: {
     hideComponents: true,
    }},
    ]
})
export default router;