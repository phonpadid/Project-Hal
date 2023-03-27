<template>
  <div class="w-screen h-screen bg-red-600 flex justify-center">
    <div class="w-full max-w-[1900px] h-screen bg-white">
      <AdminLayout v-if="$route.meta.layout === 'admin'"/>
      <DefaultLayout v-if="$route.meta.layout === 'default'"/>
    </div>
  </div>
</template>
<script setup>
import DefaultLayout from "@/views/Layout/DefaultLayout.vue";
import AdminLayout from "@/views/layout/AdminLayout.vue";
</script>
<style scoped>
</style>
