<template>
  <h1 class=" text-2xl font-bold customers">Customers</h1>
  <a-tabs class="base-table-main" v-model:activeKey="activeKey" :tab-click="changeTab(activeKey)">

    <!-- <a-tab-pane key="1" tab="Customer Info"> -->
      <!-- Customer -->
      <CustomerTable />
    <!-- </a-tab-pane> -->
    <!-- <a-tab-pane key="2" tab="Customer Info"> -->
      
      <!-- <Test/> -->
    <!-- </a-tab-pane> -->
  </a-tabs>
</template>

<script setup>

import {ref} from "vue";
import {useRoute} from "vue-router"
import {useRouter} from "vue-router";
import CustomerTable from "@/views/pages/system/Customers/TabItems/customerTable.vue";
// import Test from "./test.vue";
// import TiptapEditor from "@/components/Form/TiptapEditor.vue";

function descriptionUpdate(e){
  console.log(e)
}
const data_test = ref("")
const route = useRoute();
const router = useRouter();
const tabActive = route.meta.tab;
const activeKey = ref(tabActive);

function changeTab(activeKey) {
  if (activeKey === 1) {
    router.push({
      name: "customer.index"
    }).catch(() => {
    })
  }
}
</script>

<style scoped>
.customers{
  position: relative;
  left: 20px;
}
</style>
