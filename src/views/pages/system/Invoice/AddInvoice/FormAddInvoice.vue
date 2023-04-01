<template>
  <div class="head_img">
    <img src="@/assets/image/invoice_list.png" alt="no_img" />
    <h1 class="text-2xl font-bold invoicelist">Invoce List</h1>
  </div>
  <div class="head_form">
    <div class="form-invoice-detail">
      <FromInvoiceDetails />
    </div>
    <div class="form-invoice-name">
      <FromInvoiceFormName />
    </div>
    <div class="form_detail">
      <FormTableDetails />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import InvoiceTable from "@/views/pages/system/Invoice/TabItems/invoiceTable.vue";
import FromInvoiceDetails from "@/components/Form/InvoiceDetails.vue";
import FromInvoiceFormName from "@/components/Form/InvoiceFormName.vue";
import FormTableDetails from "@/components/Form/FormTableDetails.vue";

const route = useRoute();
const router = useRouter();
const tabActive = route.meta.tab;
const activeKey = ref(tabActive);

function changeTab(activeKey) {
  if (activeKey === 1) {
    router
      .push({
        name: "invoice.index",
      })
      .catch(() => {});
  }
}
</script>

<style scoped lang="scss">
.head_img {
  .invoicelist {
  position: relative;
  color: red;
  margin-left: 50px;
  bottom: 35px;
}
}

.head_form {
  height: 250px;
  .form_detail {
    flex: 1 0 200px;
    position: relative;
    bottom: 320px;
    
  }
  .form-invoice-detail {
    width: 100%;
    height: 200%;
    padding: 0px;
    border-radius: 5px;
    box-sizing: border-box;
  }
  .form-invoice-name {
    height: 400px;
    width: 100%;
  }
}


@media (max-width: 768px) {
  .base-table-main {
    flex-basis: 50%;
  }
}
@media (min-width: 768px) {
  .base-table-main {
    flex-basis: 50%;
  }
}
</style>
