import {reactive, ref, toRefs} from "vue";
import router from "@/router"
import {getAllUsers} from "@/repository/userRepository";

const data = reactive({
    isEdit: false,
    isLoading: false,
})
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 10,
    },
};
const refForm = ref(null);
const rules = {}

function onCreate() {
    router.push({
        name: "invoice.create"
    }).catch(() => {
    })
}
async function loadAllUser(){
    const res = await getAllUsers();
    console.log(res)
}
// view invoice
function viewInvoice() {
    router.push({
        name: "invoice.preview"
    }).catch(() => {
    })
}
// coppy invoice
function coppyInvoice() {
    router.push({
        name: "invoice.coppy"
    }).catch(() => {
    })
}
// view document invoice
function viewDocumentInvoice() {
    router.push({
        name: "invoice.coppy"
    }).catch(() => {
    })
}
function showAddInvoice() {
    router.push({
        name: "invoice.add"
    }).catch(() => {
    })
}


export default {
    ...toRefs(data),
    layout,
    onCreate,
    rules,
    refForm,
    loadAllUser,
    viewInvoice,
    coppyInvoice,
    viewDocumentInvoice,
    showAddInvoice

}
