<template>
    <div class="base-form">
  
      <div class="form-content">
        <a-form
            v-bind="layout"
            :rules='rules'
            :model="form"
            ref="refForm"
        >
          <a-form-item label=" ">
            <h1 class="text-xl base-title-form">
              <span><i class="fal fa-edit"></i></span>
              Customer Information
            </h1>
          </a-form-item>
          <a-form-item label="UserName">
            <a-input/>
          </a-form-item>
          <a-form-item label="Password">
            <a-input-password/>
          </a-form-item>
          <a-form-item label="Confirm Password">
            <a-input-password/>
          </a-form-item>
          <a-form-item label=" ">
            <a-button v-if="props.mode === 'create'" class="bg-blue-500" type="primary">
              create
            </a-button>
            <a-button @click="createOrUpdateDone" v-if="props.mode === 'update'" class="bg-blue-500" type="primary">
              upadte
            </a-button>
          </a-form-item>
        </a-form>
        this is mode modal - >{{ props.mode }}
      </div>
    </div>
  </template>
  
  <script setup>
  import CustomerUseCase from "@/usecases/customerUseCase";
  import {onMounted} from "vue";
  import {useRoute} from "vue-router";
  const props = defineProps({
    mode:{
        required:true,
        type:String,
    }
  })
  const emits = defineEmits(['success'])
  function createOrUpdateDone (){
    emits('success',{id:0,code:200})
  }
  const route = useRoute();
  const {
    layout,
    form,
    rules,
    refForm,
    isEdit,
  } = CustomerUseCase;
  </script>
  
  <style scoped>
  
  </style>
  