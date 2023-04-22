<template>
  <!--begin::Dashboard-->
  <div class="row homeCards">
    <div class="col-xl-3">
      <a href="#" class="card hoverable card_1">
        <div class="card-body">
          <span :class="`svg-icon-primary`" class="svg-icon svg-icon-2x mx-n1">
            <inline-svg :src="`media/home/user_1.svg`" />
          </span>
          <div :class="`text-h5`" class="fw-bolder fs-2 mt-5">
            $5,209
          </div>
          <div :class="`text-p`" class="fw-bold fs-7">
            Total Registered Users
          </div>
        </div>
      </a>
    </div>
    <div class="col-xl-3">
      <a href="#" class="card hoverable card_2 ">
        <div class="card-body">
          <span :class="`svg-icon-primary`" class="svg-icon svg-icon-2x mx-n1">
            <inline-svg :src="`media/home/user_2.svg`" />
          </span>
          <div :class="`text-h5`" class="fw-bolder fs-2 mt-5">
            2,044
          </div>
          <div :class="`text-p`" class="fw-bold fs-7">
            Total Active Users
          </div>
        </div>
      </a>
    </div>
    <div class="col-xl-3">
      <a href="#" class="card hoverable card_3">
        <div class="card-body">
          <span :class="`svg-icon-primary`" class="svg-icon svg-icon-2x mx-n1">
            <inline-svg :src="`media/icons/duotune/general/gen032.svg`" />
          </span>

          <div :class="`text-h5`" class="fw-bolder fs-2 mt-5">
            $50,000
          </div>

          <div :class="`text-p`" class="fw-bold fs-7">
            Total Information Purchased
          </div>
        </div>
      </a>
    </div>
    <div class="col-xl-3">
      <a href="#" class="card hoverable card_4">
        <div class="card-body">
          <span :class="`svg-icon-primary`" class="svg-icon svg-icon-2x mx-n1">
            <inline-svg :src="`media/home/group_chat.svg`" />
          </span>

          <div :class="`text-h5`" class="fw-bolder fs-2 mt-5">
            23,508
          </div>

          <div :class="`text-p`" class="fw-bold fs-7">
            Total Transaction Amount
          </div>
        </div>
      </a>
    </div>
  </div>

  <!--end::Dashboard-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "dashboard",
  components: {

  },
  setup() {
    onMounted(() => {
      setCurrentPageTitle("Dashboard");
    });
  },
});
</script>
