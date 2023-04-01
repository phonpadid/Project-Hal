<template>
  <div class="base-menu-table">
    <!--    Table Action Header-->
    <TableActionMenu>
      <template v-slot:searchTable>
        <a-input-search
          class="w-full text-xs"
          placeholder="Search"
        />
      </template>
      <template v-slot:actionButton>
        <a-button
          class="bg-red-600 font-light"
          type="primary"
          danger
          @click="addReceipts"
        >
          <i class="fal fa-plus-circle" style="margin-right: 10px"></i>
          Add Receipt
        </a-button>
      </template>
    </TableActionMenu>
    <!--    Table body-->
    <a-table :columns="columns" :data-source="data" :pagination="{ pageSize: 10 }">
      <template #bodyCell="{ column }">
        <template v-if="column.dataIndex === 'action'">
          <a type="link" class=" text-green-600 text-lg">
            <EditFilled />
          </a>
          <div class="ant-divider ant-divider-vertical"></div>
          <a type="link" class=" text-blue-400 text-lg">
            <CopyFilled />
          </a>
          <div class="ant-divider ant-divider-vertical"></div>
          <a type="link" class=" text-lg" @click="ViewReceipts">
            <EyeFilled />
          </a>
          <div class="ant-divider ant-divider-vertical"></div>
          <a type="link" class=" text-red-600 text-lg">
            <DeleteFilled @click="Show_Delete"/>
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
      <form action="customer">
        <!-- Name -->
        <div class="px-9">
          <label class="text-left" for="name"
            >Name <label class="text-red-600" for="*">*</label></label
          ><br />
          <input
            class="w-96 h-14 p-4 border-2"
            type="text"
            id="name"
            placeholder="Business name"
          /><br /><br />
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
          /><br /><br />
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
          /><br /><br />
        </div>
        <!-- Address -->
        <div class="px-9">
          <label for="address"
            >Adderss <label class="text-red-600" for="*">*</label></label
          ><br />
          <input
            class="w-96 h-14 p-4 border-2"
            type="address"
            id="address"
            placeholder="Address"
          />
        </div>
        <br />
      </form>
      <!-- Button -->
      <a-button
        class="border-box h-12 w-32 text-center my-10 mx-9 max-w-xl"
        @click="SaveModal = saveModal"
        type="primary"
        danger
        >Save</a-button
      >
      <a-button
        @click="closeModalHanddle"
        class="border-red-600 border-box h-12 w-32 text-red-600 mx-12"
        >Cancle</a-button
      >
    </a-modal>

    <!-- Delete Recipts -->
    <a-modal v-model:visible="showDeleteReciepts" :footer="null" :closable="false">
      <template #title
        >
        <div class="bg-red-600 text-white px-10 py-10 customes">
          <h3 class="TextCustomer">Delete</h3>
         <button @click="Close_Delete"><i class="fal fa-times-circle icon_close"></i></button> 
          </div
      >
      </template>
      <RecieptsFormDelete :mode="mode" @Close="showDeleteReciepts = !showDeleteReciepts"></RecieptsFormDelete>
    </a-modal>
    <!-- <RecieptsFormDelete/> -->
  </div>
</template>

<script setup>
import { columns } from "@/tableColumns/recieptsClumn";
import { ref } from "vue";
import { EditFilled, CopyFilled, EyeFilled ,DeleteFilled } from "@ant-design/icons-vue";
import customer_form from "@/components/system/customer_form.vue";
import RecieptsUseCase from "@/usecases/recieptsUseCase";
import { useRoute } from "vue-router";
import RecieptsFormDelete from "@/components/FormDelete/FormDeleteReciept.vue";
const mode = ref("")
const showDeleteReciepts =ref(false)
const {
  addReceipts,
  ViewReceipts
} = RecieptsUseCase;

const handleOk = (e) => {
  console.log(e);
  visible.value = false;
};

function closeModalHanddle() {
  showModal.value = !showModal.value;
}
function Show_Delete(){
  showDeleteReciepts.value = !showDeleteReciepts.value
  mode.value = "delete"
}
function Close_Delete(){
  showDeleteReciepts.value = !showDeleteReciepts.value
}
const router = useRoute();
const data = [...Array(20)].map((_, i) => ({
  key: i,
  index: `${i + 1}`,
  receipt_to: `HAL tech`,
  receipt_date: `2023-03-28`,
  price: `300,000 kip`,
  create_date: `2023-03-30`,

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
