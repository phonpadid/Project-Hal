<template>
<!-- v-show="false" -->
  <a-layout class="h-screen overflow-hidden w-full" >
    <a-layout-sider
      width="270"
      class="h-screen pl-0 bg-red-600 flex flex-col"
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
    >
      <div class="w-full h-[120px] flex items-center m-12">
        <div class="w-full h-[60px] flex">
          <div class="">
            <img
              class="w-[90px] h-[90px] rounded-full bg-white flex justify-center items-center text-xl text-white top-2.5 logo_hal"
              src="@/assets/image/logo.png"
              alt="No_image"
            />
            <h1 class="text-white font-bold text_hal_express">HAl Express</h1>
          </div>

          <div class="w-[200px] pl-3 flex justify-center flex-col h-full">
            <h1 class="m-0 font-bold"></h1>
            <p class="m-0 text-xs font-light text-gray-500"></p>
          </div>
        </div>
      </div>
      <div
        class="w-full h-[600px] overflow-y-auto overflow-x-hidden text-justify"
      >
        <!--      menu sidebar-->
        <TheMenu />
        <!--    end  menu sidebar-->
      </div>
      <!--     end footer sidebar-->
    </a-layout-sider>
    <a-layout class="w-full">
      <a-layout-header
        style="background-color: #f3f3f3"
        class="w-full flex items-center pl-6 pr-6 h-[35px]"
      >
        <UnorderedListOutlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <UnorderedListOutlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <!-- <div class="select">
          <div class="icon"><i class="fas fa-user"></i></div>
          <select>
            <option value="option1">admin</option>
          </select>
          
        </div> -->
        <div>
          <i class="fas fa-user-circle icon_user"></i>
          <select class="user_admin">
            <option value="option1">admin</option>
          </select>
        </div>
      </a-layout-header>

      <a-layout-content>
        <div
          class="w-full bg-white rounded-tl-lg h-full overflow-y-auto p-4 text-justify"
        >
          <BreadcrumbHeader />
          <router-view />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { UnorderedListOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";

const collapsed = ref(false);
</script>


<style scoped>
.logo_hal {
  position: relative;
  left: 50%;
}
.text_hal_express {
  position: relative;
  left: 50%;
  top: 20px;
}
.user_admin {
  position: relative;
  left: 1460px;
  color: #df0707;
  font-family: Roboto;
  font-style: Regular;
  font-size: 20px;
  line-height: 23px;
}
.icon_user {
  position: relative;
  color: #df0707;
  left: 1450px;
  font-size: 18px;
}

</style>
