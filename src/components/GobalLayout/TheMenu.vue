<template>
  <!-- Customer memnu -->
  <a-menu
    v-for="customer in Customer"
    :key="customer.id"
    mode="inline"
    v-model:selectedKeys="selectedKeys"
  >
    <a-menu-item :key="customer.id" @click="handleChangeMenu(customer)">
      <template #icon>
        <span class="text-base text-gray-600"
          ><i :class="customer.icon"></i
        ></span>
      </template>
      <span
        style="color: #000c17 !important"
        class="ml-2 text-base font-light"
        >{{ customer.name }}</span
      >
    </a-menu-item>
  </a-menu>

  <!-- Menu invoice -->
  <a-menu
    v-for="invoice in Invoice"
    :key="invoice.id"
    mode="inline"
    v-model:selectedKeys="selectedKeys"
  >
    <a-menu-item :key="invoice.id" @click="handleChangeMenu(invoice)">
      <template #icon>
        <span class="text-base text-gray-600"
          ><is :class="invoice.icon"></is
        ></span>
      </template>
      <span
        style="color: #000c17 !important"
        class="ml-2 text-base font-light"
        >{{ invoice.name }}</span
      >
    </a-menu-item>
  </a-menu>

  <!-- Invoice menu -->
  <!-- <a-menu
    v-for="menu in MainMenu"
    :key="menu.id"
    mode="inline"
    class="text-base"
    v-model:selectedKeys="selectedKeys"
  >
    <a-sub-menu :key="menu.id">
      <template #icon>
        <span class="text-base"><i :class="menu.icon"></i></span>
      </template>
      <template #title class="text-base">
        {{ menu.name }}
      </template>
      <a-menu-item
        v-for="(sub, index) in menu.group"
        :key="sub.id"
        @click="handleChangeMenu(sub)"
      >
        <span class="text-base"><i :class="sub.icon"></i></span>
        {{ sub.name }}
      </a-menu-item>
    </a-sub-menu>
  </a-menu> -->

  <!-- Menulist -->
  <a-menu
    v-for="single in MenuList"
    :key="single.id"
    mode="inline"
    v-model:selectedKeys="selectedKeys"
  >
    <a-menu-item :key="single.id" @click="handleChangeMenu(single)">
      <template #icon>
        <span class="text-base text-gray-600"
          ><i :class="single.icon"></i
        ></span>
      </template>
      <span
        style="color: #000c17 !important"
        class="ml-2 text-base font-light"
        >{{ single.name }}</span
      >
    </a-menu-item>
  </a-menu>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const selectedKeys = ref(["0"]);
const router = useRouter();
const store = useStore();
/*menu list*/

const Customer = reactive([
  {
    id: 201,
    name: "customer",
    icon: "fas fa-user-circle",
    route: "customer.index",
  },
]);

/**Menu Invoice  */
const Invoice = reactive([
  {
    id: 212,
    name: "Invoice",
    icon: "fal fa-file-invoice",
    route: "invoice.index",
  },
]);

// Menu Reciepts
const MenuList = reactive([
  {
    id: 200,
    name: "Reciepts",
    icon: "far fa-receipt",
    route: "reciepts.index",
  },
]);

// const MainMenu = reactive([
//   //System DropDow
//   {
//     id: 2,
//     name: "Invoice",
//     icon: "fal fa-file-invoice",

//     group: [
//       {
//         id: 213,
//         name: "Invoice type 2 ",
//         route: "user.index",
//       },
//       {
//         id: 214,
//         name: "Invoice type 3 ",
//         route: "user.index",
//       },
//     ],
//   },
// ]);



/*change menu */
function handleChangeMenu(menu) {
  router
    .push({
      name: menu.route,
    })
    .catch(() => {});
}
</script>

<style scoped lang="scss">
</style>
