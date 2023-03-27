const moduleRouter = {
    path: '/invoice',
    component: () => import('@/views/pages/system/Invoice/invoice.vue'),
    children: [
        {
            component: () => import( '@/views/pages/system/Invoice/index.vue'),
            path: '',
            name: 'invoice.index', 
            meta: {
                title: "Invoice",
                name: "Invoice Info",
                layout: "admin",
            }
        },
        {
            component: () => import('@/views/pages/system/Invoice/TabItems/manage.vue'),
            path: 'create',
            name: 'invoice.create',
            meta: {
                title: "Invoice Info",
                name: "Invoice Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "invoice Update" */ '@/views/pages/system/Invoice/TabItems/manage.vue'),
            path: 'update/:id',
            name: 'invoice.edit',
            meta: {
                title: "Invoice Info",
                name: "Invoice Info",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "View invoice" */ '@/views/pages/system/Invoice/View/invoice.vue'),
            path: 'pre-view-invoice',
            name: 'invoice.preview',
            meta: {
                title: "Invoice Info",
                name: "Invoice Info",
                layout: "default",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Coppy invoice" */ '@/views/pages/system/Invoice/View/FormInvoiceCoppy.vue'),
            path: 'coppy-view-invoice',
            name: 'invoice.coppy',
            meta: {
                title: "Invoice Info",
                name: "Invoice Info",
                layout: "default",
            }
        },
        {
            component: () => import(/* webpackChunkName: " View document invoice" */ '@/views/pages/system/Invoice/View/FormViewDocumentIncoice.vue'),
            path: 'document-view-invoice',
            name: 'invoice.document',
            meta: {
                title: "Invoice Info",
                name: "Invoice Info",
                layout: "default",
            }
        },
        {
            component: () => import(/* webpackChunkName: " Add invoice" */ '@/views/pages/system/Invoice/AddInvoice/FormAddInvoice.vue'),
            path: 'add-invoice',
            name: 'invoice.add',
            meta: {
                title: "Invoice Detail",
                name: "Invoice Info",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};

