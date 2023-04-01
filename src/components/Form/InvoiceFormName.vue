<template>
  <div class="flex justify-center form_header">
    <form class="box">
      <section class="px-5">
        <div class="invoice-name py-2">
          <label for="invoice-name" class="font-bold text-sm"
            >Invoice Name</label
          ><label for="*" class="text-red-600">*</label><br />
          <input
            type="text"
            id="invoice_name"
            placeholder="Invoice name"
            class="invoice_name px-4"
            v-model="invoice_name"
            @blur="invoice_name_Blur"
          />
          <span class="text-red-500">{{ invoice_name_Error }}</span>
        </div>
        <!-- date -->
        <div class="date_invoicename py-2">
          <label for="date" class="font-bold text-sm">Invocie date</label
          ><label for="*" class="text-red-600">*</label>
          <label for="date" class="Due_date font-bold text-sm">Due date</label
          ><label for="*" class="text-red-600 text_star">*</label><br />
          <div class="head-invoice-date">
            <input
              v-model="invoice_date"
              type="date"
              id="date"
              class="date_invoice"
            />
            <div><span class="text-red-500 text-date-invoice">
              {{ invoice_date_Error }}
            </span></div>
          </div>
          <div class="head-due-date">
            <input
              v-model="Due_date"
              type="date"
              id="date"
              class="date_Duedate"
            />
            <div><p class="text-red-500 due-date">{{ due_date_Error }}</p></div>
          </div>
        </div>
        <div class="form-head-company-currency">
          <!--Customer  -->
          <div class="customer py-2">
            <label for="Customer" class="font-bold text-sm text_customer"
              >Customer</label
            ><label for="*" class="text-red-600">*</label><br />
            <select
              class="custom-select"
              v-model="selectedCustomer"
            >
              <option selected>Customer</option>
              <option value="option1">Customer 1</option>
              <option value="option2">Customer 2</option>
              <option value="option3">Customer 3</option>
            </select>
            <p class="text-red-500">{{selectedCustomer_Error}}</p>
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
        </div>
      </section>
    </form>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import { useField, useForm } from "vee-validate";
const { handleSubmit } = useForm();
// Validate Invoice name
const {
  value: invoice_name,
  errorMessage: invoice_name_Error,
  handleBlur: invoice_name_Blur,
} = useField("invoice_name", (value) => {
  if (!value) {
    return "Invoice Name is required.";
  }
  if (value.length < 3) {
    return "Invoice name must be at least 3 characters long.";
  }
  return true;
});
// Validate invoice Date
const { value: invoice_date, errorMessage: invoice_date_Error } = useField(
  "invoice_date",
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
// validate Due date  Due_date
const { value: Due_date, errorMessage: due_date_Error } = useField(
  "Due_date",
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

// Validate select selectedCustomer
const { value: selectedCustomer, errorMessage:selectedCustomer_Error } = useField(
  "selectedCustomer",
  (value) => {
    if (!value) {
      return "Customer is required.";
    }
    return true;
  }
);
</script>

<style scoped>
.form_header {
  position: relative;
  bottom: 130%;
  left: 400px;
  height: 450px;
}

/* Head  */
.box {
  background-color: 0px, 0px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  border-radius: 14px;
  width: 700px;
}
.invoice_name {
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  stroke: #d9d9d9;
  width: 600px;
  height: 35px;
}
.Due_date {
  position: relative;
  left: 213px;
  width: 260px;
}
.due-date {
  position: relative;
  left: 51%;
  bottom: 40px;
}
/* Due date */
.date_Duedate {
  width: 45%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  position: relative;
  left: 300px;
  bottom: 45px;
  width: 48%;
}
.text-date-invoice {
  position: relative;
  top: 15px;
}
/* invoice date */
.date_invoice {
  width: 45%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-sizing: border-box;
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
.form-head-company-currency {
  position: relative;
  bottom: 50px;
}
</style>
