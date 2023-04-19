<template>
  <div class="d-flex flex-column flex-lg-row flex-column-fluid">
    <div class="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
      <div class="d-flex flex-center flex-column flex-lg-row-fluid">
        <div class="w-lg-400px">
            <router-view></router-view>
        </div>
    </div>
    <div class="d-flex flex-center flex-wrap px-5 pt-5">
      <div class="d-flex fw-semibold text-dark fs-base"><a href="#" class="px-5 text-dark" target="_blank">Terms</a><a href="#"
          class="px-5 text-dark" target="_blank">Plans</a><a href="#" class="px-5 text-dark" target="_blank">Contact Us</a></div>
    </div>
  </div>
  <div class="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center"
    style="background-image: url('media/logos/signIn.svg'); background-size: contain;
    background-repeat: no-repeat;
    background-color: #00a3ff;">
    
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";

export default defineComponent({
  name: "auth",
  components: {},
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "bg-body");
    });

    onUnmounted(() => {
      store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "bg-body");
    });
  },
});
</script>
