<template>
    <div>
      <ck-editor :editor="editor" v-model="content" />
    </div>
  </template>
<script>

import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  components: {
    CKEditor,
  },
  data() {
    return {
      editor: ClassicEditor,
      content: '<p>Hello World!</p>',
    };
  },
};

</script>