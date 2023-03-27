<template>

   <div >
    <img src="@/assets/image/invoice_list.png" alt="no_img">
    <h1 class=" text-2xl font-bold recietslist">Reciepts List</h1>
  </div>
  <a-tabs class="base-table-main" v-model:activeKey="activeKey" :tab-click="changeTab(activeKey)">
    
    <!-- <a-tab-pane key="1" tab=""> -->
      <!-- Customer -->
      <RecieptsTable/>
    <!-- </a-tab-pane> -->
  </a-tabs>
</template>

<script setup>

import {ref} from "vue";
import {useRoute} from "vue-router"
import {useRouter} from "vue-router";
import RecieptsTable from "@/views/pages/system/Reciepts/TabItems/recieptsTable.vue";



const route = useRoute();
const router = useRouter();
const tabActive = route.meta.tab;
const activeKey = ref(tabActive);

function changeTab(activeKey) {
  if (activeKey === 1) {
    router.push({
      name: "reciepts.index"
    }).catch(() => {
    })
  }
}
</script>

<style scoped>
.recietslist{
  display: flex;
  position: relative;
  bottom: 35px;
  left: 50px;
}
</style>
