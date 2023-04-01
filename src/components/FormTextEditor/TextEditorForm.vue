<script setup>
import { ref, reactive } from "vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { useField, useForm } from "vee-validate";
const { handleSubmit } = useForm();
const content = ref("");
const emit = defineEmits(["update:text",'exit']);
function getTest() {
  console.log(findRef.value);
}
function getDataHTML(e) {
  content.value = e;
  emit("update:text", content.value );
}
function Cancle_exit(){
  emit('exit',true)
}

// Validate Topic
const {
  value: Topic_name,
  errorMessage: topic_Error,
  handleBlur: topic_NameBlur,
} = useField("invoiceName", (value) => {
  if (!value) {
    return "Invocie Name is required.";
  }
  if (value.length < 3) {
    return "Ivoice Name must be at least 3 characters long.";
  }
  return true;
});
// Validate Qty
const {
  value: Qty_name,
  errorMessage: Qty_Error,
  handleBlur: qty_name_Blur,
} = useField("Qty_name", (value) => {
  if (!value) {
    return "Qty Name is required.";
  }
  if (!/^\d+$/.test(value)) {
    return "Qty must be a number.";
  }
  return true;
});
// Validate Price 
const {
  value: Price_name,
  errorMessage: Price_Error,
  handleBlur: Price_name_Blur,
} = useField("Price_name", (value) => {
  if (!value) {
    return "Price Name is required.";
  }
  if (!/^\d+$/.test(value)) {
    return "Price must be a number.";
  }
  return true;
});

</script>
<template>
  <div class="header_form ">
    <div class="form_head_topic">
      <form action="details">
        <label for="" class="text-lg font-bold">Topic</label><br/>
        <input type="text" id="text" class="text_topic" v-model="Topic_name" @blur="topic_NameBlur"/>
        <p class="text-red-500">{{topic_Error}}</p>
      </form>
    </div>
    <br />
    <QuillEditor
      class="text_editor"
      contentType="html"
      @update:content="getDataHTML"
      ref="findRef"
      :content="content"
      theme="snow"
      :toolbar="[
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ header: 1 }, { header: 2 }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ align: [] }],
        ['link', 'image', 'video'],
        ['clean'],
      ]"
    >
    </QuillEditor
    ><br />
    <form action="Text_Editor">
      <div class="form_body">
        <label for="" class="text-lg font-bold">Qty</label><br />
        <input type="text" id="Qty" class="text_qty" v-model="Qty_name" @blur="qty_name_Blur" />
      <p class="text-red-500">{{Qty_Error}}</p>
      </div>
      <br />
      <div>
        <label for="" class="text-lg font-bold">Price</label><br />
        <input type="text" class="text_topic" v-model="Price_name" @blur="Price_name_Blur"/>
        <p class="text-red-500">{{Price_Error}}</p>
      </div>
    </form>
    <br />
    <div class="py-4">
      <label class="text-lg font-bold" for="">Total:</label>
    </div>
    <div class="head_submit">
      <button class="btn_submit text-white" type="submit" danger>Add</button>
    </div>
    <div class="head_cancle">
      <button class="cancle font-bold" @click="Cancle_exit" >Cancle</button>
    </div>
  </div>
</template>

<style scoped >
.text_topic {
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  width: 470px;
  height: 40px;
  padding-left: 1rem; /* 16px */
  padding-right: 1rem; /* 16px */
  
}
.text_qty{
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  width: 470px;
  height: 40px;
  padding-left: 1rem; /* 16px */
  padding-right: 1rem; /* 16px */
}
.head_submit{
    display: flex;
    justify-content: flex-start;
    position: relative;
}
.btn_submit {
  border: 1px solid red;
  border-radius: 5px;
  width: 220px;
  height: 30px;
  background: #df0707; 
}
.cancle {
  border: 1px solid #df0707;
  border-radius: 5px;
  width: 220px;
  height: 30px;
  color: #df0707;
}
.head_cancle {
  display: flex;
  position: relative;
  left: 250px;
  bottom:30px;
}

</style>