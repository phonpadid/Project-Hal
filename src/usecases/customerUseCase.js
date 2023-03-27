
import router from "@/router";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 10,
    },
};

function onCreate(){
    router.push({
        name:'customer.create' 
    }).catch(()=>{})
}
function ShowData(){
    try{

    }catch(error){

    }
}

export default {
    onCreate,
    layout,
    ShowData,
}
