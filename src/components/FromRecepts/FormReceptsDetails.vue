<template>
  <div class=" flex justify-center form_header">
    <form class="box">
        <section class="px-5">
            <div class="invoice-name py-2">
        <label for="invoice-name" class="font-bold text-sm">Receipt Name</label
        ><label for="*" class="text-red-600">*</label><br />
        <input
          v-model="reciepts_name"
          type="text"
          id="invoice-name"
          placeholder="Reciept name"
          class="invoice_name px-4"
          @blur="receipt_name_Blur"
        />
        <p class="text-red-500">{{receipt_name_Error}}</p>
      </div>
      <!-- date -->
      <div class="date_invoicename">
        <label for="date" class="font-bold text-sm">Receipt <label class="text_date">date</label></label
        ><label for="*" class="star text-red-600">*</label>
        <input
          v-model="reciept_date"
          type="date"
          id="date"
          name="date"
          class="input_date"
        /><br><br><p class="text-red-500">{{ reciept_date_Error }}</p>
      </div>
      <!--Customer  -->
      <div class="customer py-2">
        <label for="Customer" class="font-bold text-sm text_customer">Customer</label
        ><label for="*" class=" text-red-600 ">*</label><br />
        <select class="custom-select">
          <option selected>Customer</option>
          <option value="option1">Customer 1</option>
          <option value="option2">Customer 2</option>
          <option value="option3">Customer 3</option>
        </select>
      </div>
      <!-- Currency  -->
      <div class="Currency py-2">
        <label for="Currency" class="font-bold text-sm">Currency</label
        ><label for="*" class="text-red-600">*</label><br />
        <select class="custom-select">
          <option selected>Currency</option>
          <option value="option1">Currency 1</option>
          <option value="option2">Currency 2</option>
          <option value="option3">Currency 3</option>
        </select>
      </div>
        </section>
      
    </form>
  </div>
</template>

<script setup>
import {ref, reactive} from "vue"
import { useField, useForm } from "vee-validate";
const { handleSubmit } = useForm();

// Validate Reciepts name
const {
  value: reciepts_name,
  errorMessage: receipt_name_Error,
  handleBlur: receipt_name_Blur,
} = useField("reciepts_name", (value) => {
  if (!value) {
    return "Reciept Name is required.";
  }
  if (value.length < 3) {
    return "Reciept name must be at least 3 characters long.";
  }
  return true;
});
// Validate Reciepts date 
const { value: reciept_date, errorMessage: reciept_date_Error } = useField(
  "reciept_date",
  (value) => {
    if (!value) {
      return "date is required.";
    }
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(value)) {
      return "date is invalid.";
    }
    return true;
  }
);
</script>

<style scoped>
.form_header{
    position: relative;
    bottom: 440px;
    left: 400px;
    height: 385px;
}

/* Head  */
.box {
  background-color: 0px, 0px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  border-radius: 14px;
  width: 700px;
  height: 400px;
}
.invoice_name{
    border: 1px solid #D9D9D9;
    border-radius: 10px;
    stroke: #D9D9D9;
    width: 600px;
    height: 35px;
}

.text_date{
    position: relative;
    right: 520px;
}
.star{
    position: relative;
    right: 520px;
}
/* Due date */
.input_date {
  flex: 1 0 200;  
  position: relative;
  top: 10px;
  width: 600px;
  height: 35px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
}
/* invoice date */
.date_invoice {
  position: relative;
  top: 10px;
  width: 295px;
  height: 35px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
}

.text_star {
  position: relative;
  left: 215px;
}
/* custom select */
.custom-select {
  display: block;
  width: 600px;
  max-width: 600px;
  height: 35px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 10px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.custom-select:focus {
  border-color: #80bdff;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075),
    0 0 5px rgba(128, 189, 255, 0.5);
  outline: 0;
}
.customer{
    position: relative;
    top: 28px;
}
.Currency{
    position: relative;
    top: 30px;
}
</style>
