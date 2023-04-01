<template >
    <form action="customer">
        <!-- Name -->
       <div>
        <h2 class="text_delete">Delete This Reciepts List?</h2><br>
        <h3 class="text_delete_customer">Are you delete this Reciepts List?</h3>
       </div>
        </form>
      <!-- Button -->
      <a-button
        v-if="props.mode === 'delete' "
        class="btn-ok border-box h-12 w-32 text-center my-10 mx-9 max-w-xl"
        type="primary"
        danger
        >Ok</a-button
      >
      <a-button
        @click="Close_Reciept"
        class="btn-cancle border-red-600 border-box h-12 w-32 text-red-600 mx-12"
        >Cancle</a-button>
</template>
<script setup>
import {watch} from 'vue'
import {ref} from 'vue'

const emit = defineEmits(['Close']);
function Close_Reciept(){
    emit('Close',true);
}
const props = defineProps({
    show:{
        type:Boolean,
        required:true
    },
    mode:{
        type:String,
        required:true
    },
    customerData:{
        type:Object,
        required:false
    }
})


// watch(() => props.show , (newValue,oldValue) =>{
//     if(newValue && props.mode === "update"){
//         console.log("Yes it's update from now",props.customerData)
  
//     }
    
// })
</script>
<style scoped>
.text_delete{
    display: flex;
    justify-content: center;
    justify-items: center;
    font-weight: bold;
    font-size: 24px;
}
.text_delete_customer{
    display: flex;
    justify-content: center;
    justify-items: center;
    font-weight: bold;
    font-size: 20px;
}
.btn-ok{
    width: 150px;
    border-radius: 5px;
}
.btn-cancle{
    width: 150px;
    border-radius: 5px;
    border: 1px solid #DF0707;
    color: #DF0707;
}
</style>
