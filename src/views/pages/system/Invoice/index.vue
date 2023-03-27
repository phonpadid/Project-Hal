<template>
  <div>
    <img src="@/assets/image/invoice_list.png" alt="no_img" />
    <h1 class="text-2xl font-bold invoicelist">Invoce List</h1>
  </div>

  <a-tabs
    class="base-table-main"
    v-model:activeKey="activeKey"
    :tab-click="changeTab(activeKey)"
  >
    <!-- <a-tab-pane key="1" tab="Invoice Info"> -->
      <!-- Customer -->
      <InvoiceTable />
    <!-- </a-tab-pane> -->

    <!-- <a-tab-pane key="2" tab="Invoice name">
      <div>
        <FromInvoiceDetails />
        <FromInvoiceFormName />
      </div>
      <div class="form_detail">
        <FormTableDetails/>
      </div> -->
      <!-- <div class="text_editor">
        <FormTextEditor />
      </div> -->
    <!-- </a-tab-pane> -->
  </a-tabs>
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

<style scoped>
.invoicelist {
  display: flex;
  position: relative;
  bottom: 35px;
  left: 50px;
}
.text_editor {
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  width: 550px;
  height: 350px;
  top: 150px;
}
.form_detail{
  display: flex;
  position: relative;
  bottom: 270px;
}
</style>
