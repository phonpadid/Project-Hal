<template >
 
  <br>
  <div>
    <a-form
      :model="formState"
      ref="testRef"
     :rules="rulesState"
    >
      <a-form-item
        label="Username"
        name="username"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item label="Pass-123"
      name="password"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember"
          >Remember me</a-checkbox
        >
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" @click="createStart" >Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup>

import {ref, reactive } from 'vue';
const testRef = ref()
const formState = reactive({
  username: "",
  password: "",
  remember: true,
});
const rulesState = reactive({
    username: [
        {required:true,message:'username is required cannot be empty',trigger:['change']}
    ],
    password: [
        {required:true,message:'password is required cannot be empty',trigger:['blur']}
    ],
    remember: [
        {required:true,message:'remember is required cannot be empty',trigger:['change']}
    ],
})

const onFinish = (values) => {
  console.log("Success:", values);
};

function createStart(){
    // console.log('xs',testRef.value.resetFields())
    testRef.value.resetFields()
    // testRef.value.validate().then(()=>{
    //     console.log('ok')
    // }).catch(err=>{
    //     console.log('err',err)
    // })
}
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
</script>
<style>
</style>