const moduleRouter = {
    path: '/reciepts',
    component: () => import('@/views/pages/system/Reciepts/reciepts.vue'),
    children: [
        {
            component: () => import( '@/views/pages/system/Reciepts/index.vue'),
            path: '',
            name: 'reciepts.index', 
            meta: {
                title: "Reciepts",
                name: "Reciepts Info",
                layout: "admin",
            }
        },
        {
            component: () => import('@/views/pages/system/Reciepts/TabItems/manage.vue'),
            path: 'create',
            name: 'reciepts.create',
            meta: {
                title: "Reciepts Info",
                name: "Reciepts Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "User Update" */ '@/views/pages/system/Reciepts/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'reciepts.edit',
            meta: {
                title: "Reciepts Info",
                name: "Reciepts Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Add Recipts" */ '@/views/pages/system/Reciepts/AddReciepts/FormAddReciepts.vue'),
            path: 'add-recipts',
            name: 'reciepts.add',
            meta: {
                title: "Reciepts Details",
                name: "Reciepts Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Add Recipts" */ '@/views/pages/system/Reciepts/View/RecieptView.vue'),
            path: 'view-recipts',
            name: 'reciepts.view',
            meta: {
                title: "Reciepts Details",
                name: "Reciepts Info",
                layout: "default",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

