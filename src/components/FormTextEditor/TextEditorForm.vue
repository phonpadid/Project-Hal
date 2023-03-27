<script setup>
import { ref } from "vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
const content = ref("");

const emit = defineEmits(["update:modelValue"]);
function getTest() {
  console.log(findRef.value);
}
function getDataHTML(e) {
  content.value = e;
  emit("update:modelValue", e);
}
</script>
<template>
  <div class="header_form ">
    <div class="form_head_topic">
      <form action="details">
        <label for="" class="text-lg font-bold">Topic</label><br />
        <input type="text" class="text_topic" />
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
        <input type="text" class="text_topic" />
      </div>
      <br />
      <div>
        <label for="" class="text-lg font-bold">Price</label><br />
        <input type="text" class="text_topic" />
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
      <button class="cancle font-bold" >Cancle</button>
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
.head_submit{
    display: flex;
    justify-content: start;
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