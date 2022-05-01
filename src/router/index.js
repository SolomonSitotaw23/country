import { createRouter,createWebHistory } from "vue-router";

import HelloWorld from '../views/Countries.vue'

const router =createRouter(
    {
        history:createWebHistory(),
        routes:[
            {
                path:'/', component:HelloWorld,name:'Home'
            }
        ]
    }
); 
export default router;

