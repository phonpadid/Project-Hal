<template >
  <div class="form-header">
    <form
      action="customer"
      :model="formState"
      ref="testRef"
      :rules="rulesState"
    >
      <!-- Name -->
      <div class="px-9">
        <label class="text-left" for="name"
          >Name <label class="text-red-600" for="*">*</label></label
        ><br />
        <input
          id="name"
          class="w-96 h-14 p-4 border-2"
          type="text"
          name="name"
          placeholder="Business name"
          v-model="name"
          @blur="nameBlur"
        /><br /><span class="text-red-500">{{ nameError }}</span>
         <br /><br />
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
        /><br /><span class="text-red-500">{{ emailError }}</span>
        <br /><br />
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
        /><br /><span class="text-red-500">{{ phoneError }}</span>
        <br /><br />
      </div>
      <!-- Address -->
      <div class="px-9">
        <label for="address"
          >Addrss <label class="text-red-600" for="*">*</label></label
        ><br />
        <input
          class="w-96 h-14 p-4 border-2"
          type="text"
          id="address"
          placeholder="Address"
          v-model="address"
        />
        <p class="text-red-500">{{ addressError }}</p>
      </div>
      <br />
    </form>
    <!-- Button -->
    <a-button
      v-if="props.mode === 'update' "
      class="btn-update border-box h-12 min-w-32 w-auto text-center my-10 mx-9 max-w-xl"
      type="primary"
      danger
      >Update</a-button
    >
    <a-button
      class="btn-cancle border-red-600 border-box h-12 w-32 text-red-600 mx-12"
      >Cancle</a-button
    >
  </div>
</template>
<script setup>
import { watch } from "vue";
import { ref, reactive } from "vue";
import { useField, useForm } from 'vee-validate';
const { handleSubmit } = useForm();
// Validate Update name
const {
  value: name,
  errorMessage: nameError,
  handleBlur: nameBlur,
} = useField("name", (value) => {
  if (!value) {
    return "Update Name is required.";
  }
  return true;
});
// Validate Update Email
const {
  value: email,
  errorMessage: emailError,
  handleBlur: emailBlur,
} = useField("email", (value) => {
  if (!value) {
    return "Update Email is required.";
  }
  if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return "Update Invalid email format.";
  }
  return true;
}); 
// Validate Update Phone
const {
  value: phone,
  errorMessage: phoneError,
  handleBlur: phoneBlur,
} = useField("phone", (value) => {
  if (!value) {
    return "Update phone is required.";
  }
  if (!/^\d+$/.test(value)) {
    return "Update phone must be a number.";
  }
  if (value.length < 8) {
    return "Update phone must be at least 8 characters long.";
  }
  return true;
});

// Validate Update Address
const {
  value: address,
  errorMessage: addressError,
} = useField("address", (value) => {
  if (!value) {
    return "Update address is required.";
  }
  const regex = /^[a-zA-Z0-9\s,'-]*$/;
  if (!regex.test(value)) {
    return "Update Address is invalid.";
  }
  return true;
});











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
<style scoped>
.btn-update{
    width: 150px;
    border-radius: 5px;
}
.btn-cancle{
    width: 148px;
    border-radius: 5px;
}

</style>
