<template>
  <div class="base-table-main">
    <div class="head_img">
      <img src="@/assets/image/invoice_list.png" alt="no_img" />
      <h1 class="text-2xl font-bold invoicelist">Receipts Details</h1>
    </div>
    <div class="head_form">
      <div class="form-invoice-detail">
        <FromInvoiceDetails />
      </div>
      <div class="form-invoice-name">
        <FromInvoiceFormName />
      </div>
      <div class="form_detail">
        <FormTableInvoice />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import InvoiceTable from "@/views/pages/system/Invoice/TabItems/invoiceTable.vue";
import FromInvoiceDetails from "@/components/Form/InvoiceDetails.vue";
import FromInvoiceFormName from "@/components/FromRecepts/FormReceptsDetails.vue";
import FormTableInvoice from "@/components/Form/FormTableInvoiceList.vue";

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
.base-table-main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  .head_img {
    flex: 1 0 200px;
    margin-bottom: 1200px;
    position: relative;
    .invoicelist {
      flex: 1 0 100px;
      position: relative;
      left: 45px;
      bottom: 35px;
    }
  }
  .head_form {
    flex: 1 0 1400px;
    position: relative;
    bottom: 1220px;
    .form_detail {
      flex: 1 0 200px;
      position: relative;
      bottom: 250px;
    }
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
