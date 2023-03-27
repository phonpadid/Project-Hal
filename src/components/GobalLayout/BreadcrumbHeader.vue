<template>
  <a-page-header
    class="p-4 bg-transparent font-black text-white"
    :title="$route.meta.title"
  >
    <a-breadcrumb :routes="routes">
      <template #itemRender="{ route, routes }">
        <span v-if="routes.indexOf(route) === routes.length - 1">

          <!-- Customer -->
          <a-breadcrumb-item
            v-if="$route.meta.name === 'Customers' || $route.meta.name === 'Customers Info'"
            style="cursor: pointer"
          >
            <a-tag color="processing">
              <span class="text-sm">
                <router-link :to="{ name: 'customer.index' }">
                  Home
                </router-link>
              </span>
            </a-tag>
          </a-breadcrumb-item>
          
          <!-- Invoice  -->
          <a-breadcrumb-item
            v-if="$route.meta.name === 'Invoice' || $route.meta.name === 'Invoice Info'"
            style="cursor: pointer"
          >
            <a-tag color="processing">
              <span class="text-sm">
                <router-link :to="{ name: 'invoice.index' }">
                  Home
                </router-link>
              </span>
            </a-tag>
          </a-breadcrumb-item>

          <!-- Reciepts -->
          <a-breadcrumb-item
            v-if="$route.meta.name === 'Reciepts' || $route.meta.name === 'Reciepts Info'"
            style="cursor: pointer"
          >
            <a-tag color="processing">
              <span class="text-sm">
                <router-link :to="{ name: 'reciepts.index' }">
                  Home
                </router-link>
              </span>
            </a-tag>
          </a-breadcrumb-item>

          <!-- User info -->
          <a-breadcrumb-item
            v-if="$route.meta.name === 'User Info'"
            style="cursor: pointer"
          >
            <a-tag color="processing">
              <span class="text-sm">
                <router-link :to="{ name: 'user.index' }"> Home </router-link>
              </span>
            </a-tag>
          </a-breadcrumb-item>
        </span>
        <span class=" text-red-500 "> | {{ $route.meta.title }} </span>
      </template>
    </a-breadcrumb>
  </a-page-header>
</template>
<script>
import { defineComponent, ref } from "vue";
import { HomeOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  components: {
    HomeOutlined,
  },
  setup() {
    const routes = ref([
      {
        path: "/home",
        breadcrumbName: "Home",
      },
    ]);
    return {
      routes,
    };
  },
});
</script>

<style scoped>

</style>
