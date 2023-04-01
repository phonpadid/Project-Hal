<script setup>
import { watch } from "vue";
import { ref, reactive } from "vue";
import { useField, useForm } from "vee-validate";
const { handleSubmit } = useForm();

// Validate name
const {
  value: name,
  errorMessage: nameError,
  handleBlur: nameBlur,
} = useField("name", (value) => {
  if (!value) {
    return "Name is required.";
  }
  if (value.length < 3) {
    return "Name must be at least 3 characters long.";
  }
  return true;
});
// Validate Email
const {
  value: email,
  errorMessage: emailError,
  handleBlur: emailBlur,
} = useField("email", (value) => {
  if (!value) {
    return "Email is required.";
  }
  if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return "Invalid email format.";
  }
  return true;
});
// Validate phone
const {
  value: phone,
  errorMessage: phoneError,
  handleBlur: phoneBlur,
} = useField("phone", (value) => {
  if (!value) {
    return "phone is required.";
  }
  if (!/^\d+$/.test(value)) {
    return "phone must be a number.";
  }
  if (value.length < 8) {
    return "phone must be at least 8 characters long.";
  }
  return true;
});

// Validate Address
const {
  value: address,
  errorMessage: addressError,
} = useField("address", (value) => {
  if (!value) {
    return "address is required.";
  }
  const regex = /^[a-zA-Z0-9\s,'-]*$/;
  if (!regex.test(value)) {
    return "Address is invalid.";
  }
  return true;
});

// *************************************************//
// Close Customer From 
const emit = defineEmits(['exit']);
function closeModal(){
  emit('exit',true)
}


const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  mode: {
    type: String,
    required: true,
  },
  customerData: {
    type: Object,
    required: false,
  },
});
watch(
  () => props.show,
  (newValue, oldValue) => {
    if (newValue && props.mode === "update") {
      console.log("Yes it's update from now", props.customerData);
    }
  }
);

</script>

<template >
<!-- HTML FROM -->
  <div class="form-header">
    <form class="container">
      <!-- Name -->
      <div class="px-9">
        <label class="text-left" for="name"
          >Name <label class="text-red-600" for="*">*</label></label
        ><br />
        <input
          id="name"
          class="w-96 h-14 p-4 border-2"
          type="text"
          placeholder="Business name"
          v-model="name"
          @blur="nameBlur"
        />
        <br /><span class="text-red-500">{{ nameError }}</span
        ><br /><br />
      </div>
      <!-- Email -->
      <div class="px-9">
        <label for="email"
          >Email <label class="text-red-600" for="*">*</label></label
        ><br />
        <input
          class="w-96 h-14 p-4 border-2"
          type="email"
          id="email"
          placeholder="Recipient mail"
          v-model="email"
          @blur="emailBlur"
        />
        <br />
        <span class="text-red-500">{{ emailError }}</span
        ><br /><br />
      </div>
      <!-- phone -->
      <div class="px-9">
        <label for="phone"
          >phone <label class="text-red-600" for="*">*</label></label
        ><br />
        <input
          class="w-96 h-14 p-4 border-2"
          type="phone"
          id="phone"
          placeholder="phone"
          v-model="phone"
          @blur="phoneBlur"
        /><br /><span class="text-red-500">{{ phoneError }}</span> <br /><br />
      </div>
      <!-- Address -->
      <div class="px-9">
        <label for="address"
          >Address<label class="text-red-600" for="*">*</label></label
        ><br />
        <input
          class="w-96 h-14 p-4 border-2"
          type="text"
          id="address"
          placeholder="Address"
          v-model="address"
        /><br />
       <p class="text-red-500">{{ addressError }}</p>
      </div>
      <br />
    </form>
    <!-- Button -->
    <!-- v-if="props.mode === 'create'" -->
    <a-button
      class="btn-save border-box h-12 w-32 text-center my-10 mx-9 max-w-xl"
      type="primary"
      danger
      >Save</a-button
    >
    <a-button
      class="btn-cancle border-red-600 border-box h-12 w-32 text-red-600 mx-12"
      @click="closeModal"
      >Cancle</a-button
    >
  </div>
</template>
<style scoped>
.btn-save {
  width: 150px;
  border-radius: 5px;
}
.btn-cancle {
  width: 150px;
  border-radius: 5px;
  border: 1px solid #DF0707;
  color: red;
}
</style>
