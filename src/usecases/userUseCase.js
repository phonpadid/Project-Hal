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
        name: "user.create"
    }).catch(() => {
    })
}
async function loadAllUser(){
    const res = await getAllUsers();
    console.log(res)
}

export default {
    ...toRefs(data),
    layout,
    onCreate,
    rules,
    refForm,
    loadAllUser
}
