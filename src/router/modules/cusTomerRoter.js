const moduleRouter = {
    path: '/',
    component: () => import('@/views/pages/system/Customers/customer.vue'),
    children: [
        {
            component: () => import( '@/views/pages/system/Customers/index.vue'),
            path: '',
            name: 'customer.index', 
            meta: {
                title: "Customers",
                name: "Customers Info",
                layout: "admin",
            }
        },
        {
            component: () => import('@/views/pages/system/Customers/TabItems/manage.vue'),
            path: 'create',
            name: 'customer.create',
            meta: {
                title: "Customers Info",
                name: "Customers Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "User Update" */ '@/views/pages/system/Customers/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'customer.edit',
            meta: {
                title: "Customers Info",
                name: "Customers Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

