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
            <DeleteFilled />
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
            >Addrss <label class="text-red-600" for="*">*</label></label
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
  </div>
</template>

<script setup>
import { columns } from "@/tableColumns/recieptsClumn";
import { ref } from "vue";
import { EditFilled, CopyFilled, EyeFilled ,DeleteFilled } from "@ant-design/icons-vue";
import customer_form from "@/components/system/customer_form.vue";
import RecieptsUseCase from "@/usecases/recieptsUseCase";
import { useRoute } from "vue-router";

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
</style> 
