<template>
  <div>
    <i class="ri-bar-chart-horizontal-line"></i>
    <i class="ri-store-2-line"></i>
  </div>

</template>

<script setup>
import {onMounted} from "vue";
import UserUseCase from "@/usecases/userUseCase";


const {
  loadAllUser
} = UserUseCase;

onMounted(async () => {
  await loadAllUser();
})
</script>
