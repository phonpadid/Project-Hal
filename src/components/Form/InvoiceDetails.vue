<template>
  <div>
    <form class="box">
      <section class="px-5">
        <div class="business_name py-2">
          <label for="business-name" class="font-bold text-sm"
            >Business Name</label
          ><label for="*" class="text-red-600">*</label><br />
          <input
            v-model="invoiceName"
            type="text"
            id="business-name"
            name="business-name"
            placeholder="Business name"
            class="businnes_all_css"
          />
        </div>

        <div class="email_Recipient py-2">
          <label for="email" class="font-bold text-sm">Email</label
          ><label for="*" class="text-red-600">*</label><br />
          <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            placeholder="Recipient mail"
            class="businnes_all_css"
          />
        </div>
        <div class="phone_number py-2">
          <label for="phone" class="font-bold text-sm">Phone</label
          ><label for="*" class="text-red-600">*</label><br />
          <input
            v-model="phone"
            type="text"
            id="phone"
            name="phone"
            placeholder="phone"
            class="businnes_all_css"
          />
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
        </div>
      </section>
    </form>
  </div>
</template>

<script setup>
</script>

<style scoped>
.box {
  background-color: 0px, 0px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  border-radius: 15px;
  width: 700px;
}
.businnes_all_css {
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  width: 600px;
  height: 35px;
  padding-left: 1rem; /* 16px */
  padding-right: 1rem; /* 16px */
}
</style>
