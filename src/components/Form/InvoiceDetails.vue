<template>
  <div class="container">
    <form class="box">
      <section class="px-5">
        <div class="business_name py-2">
          <label for="business-name" class="font-bold text-sm"
            >Business Name</label
          ><label for="*" class="text-red-600">*</label><br />
          <input
            v-model="invoiceName"
            @blur="invoiceNameBlur"
            type="text"
            id="business-name"
            name="business-name"
            placeholder="Business name"
            class="businnes_all_css"
          />
          <p class="text-red-500">{{ invoiceNameError }}</p>
        </div>

        <div class="email_Recipient py-2">
          <label for="email" class="font-bold text-sm">Email</label
          ><label for="*" class="text-red-600">*</label><br />
          <input
            v-model="email"
            @blur="emailBlur"
            type="email"
            id="email"
            name="email"
            placeholder="Recipient mail"
            class="businnes_all_css"
          />
          <p class="text-red-500">{{ emailError }}</p>
        </div>
        <div class="phone_number py-2">
          <label for="phone" class="font-bold text-sm">Phone</label
          ><label for="*" class="text-red-600">*</label><br />
          <input
            v-model="phone"
            @blur="phoneBlur"
            type="text"
            id="phone"
            name="phone"
            placeholder="phone"
            class="businnes_all_css"
          />
          <p class="text-red-500">{{ phoneError }}</p>
        </div>
        <div class="Address py-2">
          <label for="address" class="font-bold text-sm">Address</label
          ><label for="*" class="text-red-600">*</label><br />
          <input
            v-model="address"
            type="address"
            id="address"
            name="address"
            placeholder="Address"
            class="businnes_all_css"
          />
          <p class="text-red-500">{{ addressError }}</p>
        </div>
      </section>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useField, useForm } from "vee-validate";
const { handleSubmit } = useForm();

// Validate name
const {
  value: invoiceName,
  errorMessage: invoiceNameError,
  handleBlur: invoiceNameBlur,
} = useField("invoiceName", (value) => {
  if (!value) {
    return "Invocie Name is required.";
  }
  if (value.length < 3) {
    return "Ivoice Name must be at least 3 characters long.";
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
</script>

<style scoped lang="scss">

.container{
  .box {
  background-color: 0px, 0px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  border-radius: 15px;
  width: 700px;
  height: 400px;
}
.businnes_all_css {
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  width: 600px;
  height: 35px;
  padding-left: 1rem; /* 16px */
  padding-right: 1rem; /* 16px */
}

}

</style>
