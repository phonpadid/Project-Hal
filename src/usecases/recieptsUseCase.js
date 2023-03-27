
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
        name:'reciepts.create' 
    }).catch(()=>{})
}
// Add recepepts
function addReceipts(){
    router.push({
        name:'reciepts.add' 
    }).catch(()=>{})
}
// view Reciepts 
function ViewReceipts(){
    router.push({
        name:'reciepts.view' 
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
    addReceipts,
    ViewReceipts
}
