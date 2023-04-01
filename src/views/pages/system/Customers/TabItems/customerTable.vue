<template>
  <div class="base-menu-table">
    <!--    Table Action Header-->

    <TableActionMenu>
      <template v-slot:searchTable>
        <a-input-search
          class="w-full text-xs"
          placeholder="Search for Customer"
        />
      </template>
      <template v-slot:actionButton>
        <a-button
          class="bg-red-600 font-light"
          type="primary"
          danger
          @click="customerCreateHandler"
        >
          <i class="fal fa-plus-circle" style="margin-right: 10px"></i>
          Add
        </a-button>
      </template>
    </TableActionMenu>
    <!--    Table body-->
    <a-table :columns="columns" :data-source="data" :pagination="{ pageSize: 10 }">
      <template #bodyCell="{ column ,record}">
        <template v-if="column.dataIndex === 'action'">
          <a type="link" class=" text-green-500">
            <FormOutlined @click="customerUpdate(record)" />
          </a>
          <div class="ant-divider ant-divider-vertical"></div>
          <a type="link" class=" text-red-600">
            <DeleteOutlined @click="customerDelete(record)"/>
          </a>
        </template>
      </template>
    </a-table>
    <!-- Add Custommer -->
    <a-modal v-model:visible="showCustommer" :footer="null" :closable="false">
      <template #title
        >
        <div class="bg-red-600 text-white px-10 py-10 customes">
          <h3 class="TextCustomer">Add Customer</h3>
          <button @click="Close"><i class="fal fa-times-circle icon_close_add"></i></button>
          </div
      ></template>
      <CustomerFormVue :customerData="customerUpdateData" :show="showCustommer" @exit="showCustommer = !showCustommer" :mode="mode" ></CustomerFormVue>
    </a-modal>

    <!-- Update Customer -->
    <a-modal v-model:visible="showUpdateCustomer" :footer="null" :closable="false" >
      <template #title
        >
        <div class="bg-red-600 text-white px-10 py-10 customes">
          <h3 class="TextCustomer">Add Customer</h3>
          <button @click="Close_Update"><i class="fal fa-times-circle icon_close_add"></i></button>
          </div
      ></template>
      <FormCustomerUpdate :mode="mode" @close="showUpdateCustomer = !showUpdateCustomer" ></FormCustomerUpdate>
    </a-modal>
    <!-- Delete -->
    <a-modal v-model:visible="showDeleteCustommer" :footer="null" :closable="false">
      <template #title
        >
        <div class="bg-red-600 text-white px-10 py-10 customes">
          <h3 class="TextCustomer">Delete</h3>
         <button @click="Close_Delete"><i class="fal fa-times-circle icon_close"></i></button> 
          </div
      >
      </template>
      <CustomerFormDelete :mode="mode" @Customer_Close="showDeleteCustommer = !showDeleteCustommer"></CustomerFormDelete>
    </a-modal>
    
  </div>
  
</template>

<script setup>
import { columns } from "@/tableColumns/cusTomerClumn";
import { ref } from "vue";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons-vue";
import customer_form from "@/components/system/customer_form.vue";
import CustomerUseCase from "@/usecases/customerUseCase";
import { useRoute } from "vue-router";
import CustomerFormVue from "@/components/Form/CustomerForm.vue";
import CustomerFormDelete from "@/components/Form/CustomerFormDelete.vue";
import FormCustomerUpdate from "@/components/FormUpdate/FormCustomerUpdate.vue";

const showCustommer = ref(false);
const mode = ref("")
const showDeleteCustommer = ref(false)
const showUpdateCustomer = ref(false)

// Close Add Customer
function Close(){
  showCustommer.value = !showCustommer.value
}
// Close Update Customer
function Close_Update(){
  showUpdateCustomer.value = !showUpdateCustomer.value
}
// Close Delete Customer
function Close_Delete(){
  showDeleteCustommer.value = !showDeleteCustommer.value
}

const customerUpdateData = ref({})
const handleOk = (e) => {
  console.log(e);
  visible.value = false;
};
function customerCreateHandler(){
  showCustommer.value = !showCustommer.value
  mode.value = "create"
}

function customerUpdate(){
  showUpdateCustomer.value = !showUpdateCustomer.value
  mode.value = "update"

}
function customerDelete(){
  showDeleteCustommer.value = !showDeleteCustommer.value
  mode.value = "delete"
}



const router = useRoute();
const data = [...Array(20)].map((_, i) => ({
  key: i,
  index: `${i + 1}`,
  title: `Haltech`,
  phone: `020 7898200`,
  email: `info@haltech.la`,
  address: `Luangpabang`

}));
// const {
//   onCreate
// } = CustomerUseCase ;

// function SaveModal(){
//   saveModal.id = true
// }

// function openModal(){
//   visible.value = !visible.value
// }
// function getValueFromChild(data){
//   console.log('parnet',data)

//   openModal()
// }
</script>

<style scoped lang="scss">
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
.icon_close_add{
  text-align: end;
  position: relative;
  left: 85px;
}




</style> 
