<template>
  <div class="base-menu-table">
    <!--    Table Action Header-->
    <TableActionMenu>
      <template v-slot:searchTable>
        <a-input-search class="w-full text-xs" placeholder="Search" />
      </template>
      <template v-slot:actionButton>
        <a-button
          class="bg-red-600 font-light"
          type="primary"
          danger
          @click="showAddInvoice"
        >
          <i class="fal fa-plus-circle" style="margin-right: 10px"></i>
          Add Invoice
        </a-button>
      </template>
    </TableActionMenu>
    <!--    Table body-->
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="{ pageSize: 10 }"
    >
      <template #bodyCell="{ column }">
        <template v-if="column.dataIndex === 'action'">
          <a type="link" class="text-green-600 text-lg">
            <EditFilled />
          </a>
          <div class="ant-divider ant-divider-vertical"></div>
          <a type="link" class="text-blue-400 text-lg" @click="coppyInvoice">
            <CopyFilled />
          </a>
          <div class="ant-divider ant-divider-vertical"></div>
          <a type="link" class="text-lg" @click="viewInvoice">
            <EyeFilled />
          </a>
          <div class="ant-divider ant-divider-vertical"></div>
          <a type="link" class="text-red-600 text-lg">
            <DeleteFilled @click="InvoiceDelete(record)" />
          </a>
        </template>
      </template>
    </a-table>
    <!-- <a-modal v-model:visible="visible" :footer="false"  title="Basic Modal">
      <customer_form mode="update" v-on:success="getValueFromChild" ></customer_form>
    </a-modal> -->
    <a-modal v-model:visible="showModal" :footer="null" :closable="false">
      <template #title
        ><div
          class="bg-red-600 text-white px-10 py-10 flex flex-wrap-reverse justify-center"
        >
          Add Customer
        </div></template
      >
    </a-modal>

    <!-- Delete Invoice -->
    <a-modal v-model:visible="showDeleteInvoice" :footer="null" :closable="false">
      <template #title
        >
        <div class="bg-red-600 text-white px-10 py-10 customes">
          <h3 class="TextCustomer">Delete</h3>
         <button @click="Close_Delete"><i class="fal fa-times-circle icon_close"></i></button> 
          </div
      >
      </template>
      <InvoiceFormDelete :mode="mode" @Close="showDeleteInvoice = !showDeleteInvoice"></InvoiceFormDelete>
    </a-modal>
  </div>
</template>

<script setup>
import { columns } from "@/tableColumns/invoiceClumn";
import { ref } from "vue";
import {
  EditFilled,
  CopyFilled,
  EyeFilled,
  DeleteFilled,
} from "@ant-design/icons-vue";
import customer_form from "@/components/system/customer_form.vue";
import CustomerUseCase from "@/usecases/customerUseCase";
import InvoiceUsecseView from "@/usecases/invoiceUseCase";
import { useRoute } from "vue-router";
import invoiceVue from "../invoice.vue";
import InvoiceFormDelete from "@/components/FormDelete/FormDeleteInvoice.vue";

const showDeleteInvoice = ref(false)
const mode = ref("")
const {
  viewInvoice,
  coppyInvoice,
  showAddInvoice
} = InvoiceUsecseView;

function InvoiceDelete(){
  showDeleteInvoice.value = !showDeleteInvoice.value
  mode.value = "delete"
}
function Close_Delete(){
  showDeleteInvoice.value = !showDeleteInvoice.value
}

const props = defineProps({
    show:{
        type:Boolean,
        required:true
    },
    mode:{
        type:String,
        required:true
    },
    customerData:{
        type:Object,
        required:false
    }
})

const data = [...Array(20)].map((_, i) => ({
  key: i,
  index: `${i + 1}`,
  invoice_to: `HAL tech`,
  invoice_date: `2023-03-28`,
  price: `300,000 kip`,
}));

// function openModal(){
//   visible.value = !visible.value
// }
// function getValueFromChild(data){
//   console.log('parnet',data)

//   openModal()
// }

// const {
//   onCreate
// } = CustomerUseCase ;
</script>

<style scoped>
.TextCustomer {
  display: flex;
  color: white;
  position: relative; 
  left: 90px;
}
.customes {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.icon_close{
  text-align: end;
  position: relative;
  left: 95px;
}
</style> 
