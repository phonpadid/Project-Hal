<template>
  <div class="container">
    <!-- icon and text -->
    <div class="icon_img">
      <i class="fas fa-receipt text-red-500 text-2xl px-4 py-2 icon_list"></i>
    </div>
    <!-- text -->
    <div class="text">
      <h2 class="tex_list">List</h2>
    </div>
    <!-- button -->
    <div class="add_receipt_list">
      <a-button
        class="bg-red-600 font-light"
        type="primary"
        danger
        @click="showModal = !showModal"
      >
        <i class="fal fa-plus-circle" style="margin-right: 10px"></i>
        Add Invoice list
      </a-button>
    </div>
    <!-- table -->
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="{ pageSize: 10 }"
      class="header_table"
    >
      <template #bodyCell="{ column }">
        <template v-if="column.dataIndex === 'action'">
          <a type="link" class="text-green-600 text-lg">
            <EditFilled />
          </a>
          <div class="ant-divider ant-divider-vertical"></div>
          <a type="link" class="text-red-600 text-lg">
            <DeleteFilled />
          </a>
        </template>
      </template>
    </a-table>
    <!--Footer text Total Item -->
    <div class="footer-text-invoice font-bold">
      <div class="total-subtotal">
        <h1 class="total-item">Total Item: 2</h1>
        <h1 class="sub-total">Sub total: 600000 kip</h1>
      </div>
      <!-- text -->
      <div class="tax-amout">
        <div class="tax-vat-input-text">
          <h1 class="tax-vat">TAX (VAT) % :</h1>
          <input class="text-tax px-2" type="text" />
        </div>
        <h1 class="amout-total">Amout total : Calculate value</h1>
      </div>
      <!-- button -->
      <div class="footer-btn">
        <button type="submit" class="btn-save">Save</button>
        <button class="btn-cancel">Cancel</button>
      </div>
    </div>
    <!-- Show Add Receipts -->
    <a-modal
      v-model:visible="showModal"
      :footer="null"
      :closable="false"
      class="modal_add_receipt"
    >
      <template #title
        ><div
          class="text-red-600 px-10 py-10 flex flex-wrap-reverse justify-center"
        >
          <i class="fal fa-plus-circle icon_add"></i>
          <h1 class="text-red-600 font-bold text_add_list">Add Invoice list</h1>
          <button class="btn_exit" @click="closeModalHanddle">
            <img class="img" src="@/assets/image/exit.png" alt="no_img" />
          </button></div
      ></template>
      <!-- FormTextEditor -->
      <FormTextEditor />
    </a-modal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { columns } from "@/tableColumns/invoiceDetailsClumn";
import { EditFilled, DeleteFilled } from "@ant-design/icons-vue";
import { useRoute } from "vue-router";
import FormTextEditor from "@/components/FormTextEditor/TextEditorForm.vue";
const showModal = ref(false);
const router = useRoute();
const data = [...Array(2)].map((_, i) => ({
  key: i,
  index: `${i + 1}`,
  description: `Book`,
  qty: `2`,
  amount: `300,000 kip`,
}));

function closeModalHanddle() {
  showModal.value = !showModal.value;
}
</script>
<style scoped lang="scss">
.header_table {
  position: relative;
  bottom: 150px;
}
.add_receipt_list {
  display: flex;
  justify-content: end;
  position: relative;
  bottom: 170px;
}
/* text List */
.tex_list {
  display: flex;
  justify-content: center;
  position: relative;
  right: 700px;
  font-weight: bold;
  font-size: 24px;
}
/* icon List */
.icon_list {
  display: flex;
  justify-content: start;
  position: relative;
  top: 35px;
  width: 50px;
  height: 45px;
  border-radius: 50%;
  background: #f9c1c1;
}
/* icon add */
.icon_add {
  position: relative;
  right: 150px;
  font-size: 22px;
}
/* button exit add */
.btn_exit {
  position: relative;
  left: 150px;
  bottom: 4px;
}
/* text add list */
.text_add_list {
  position: relative;
  right: 140px;
}
/* modal */
.modal_add_receipt {
  position: relative;
  width: 1500px;
}
.text {
  position: relative;
  left: 15px;
  bottom: 150px;
}
.icon_img {
  position: relative;
  bottom: 144px;
}
.footer-text-invoice {
  .total-subtotal {
    display: flex;
    justify-content: flex-start;
    .total-item {
      position: relative;
      bottom: 165px;
    }
    .sub-total {
      position: relative;
      right: 85px;
      bottom: 110px;
    }
  }
  .tax-amout {
    display: flex;
    justify-content: flex-end;
    .tax-vat-input-text {
      position: relative;
      bottom: 165px;
      .tax-vat {
        position: relative;
      }
      .text-tax {
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        position: relative;
        left: 100px;
        bottom: 22px;
      }
    }
    .amout-total {
      position: relative;
      right: 185px;
      bottom: 100px;
    }
  }
  .footer-btn {
    display: flex;
    justify-content: flex-end;
    position: relative;
    bottom: 50px;
    .btn-save {
      border: 1px solid #df0707;
      border-radius: 4px;
      position: relative;
      right: 80px;
      width: 150px;
      height: 30px;
      background: #df0707;
      color: white;
    }
    .btn-cancel{
       border: 1px solid #df0707;
      border-radius: 4px;
      position: relative;
      right: 50px;
      width: 150px;
      height: 30px;
      color: #df0707;
    }
  }
}
</style>