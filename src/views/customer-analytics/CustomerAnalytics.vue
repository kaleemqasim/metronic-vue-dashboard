<template>
    <!--begin::Dashboard-->
    <div class="row homeCards">
      <div class="col-xl-4">
        <a href="#" class="card hoverable card_1">
          <div class="card-body">
            <span :class="`svg-icon-primary`" class="svg-icon svg-icon-2x mx-n1">
              <inline-svg :src="`media/home/user_1.svg`" />
            </span>
            <div :class="`text-h5`" class="fw-bolder fs-2 mt-5">
                135
            </div>
            <div :class="`text-p`" class="fw-bold fs-7">
                Total Customers
            </div>
          </div>
        </a>
      </div>
      <div class="col-xl-4">
        <a href="#" class="card hoverable card_2 ">
          <div class="card-body">
            <span :class="`svg-icon-primary`" class="svg-icon svg-icon-2x mx-n1">
              <inline-svg :src="`media/home/user_2.svg`" />
            </span>
            <div :class="`text-h5`" class="fw-bolder fs-2 mt-5">
              120
            </div>
            <div :class="`text-p`" class="fw-bold fs-7">
                Top Active Customers
            </div>
          </div>
        </a>
      </div>
      <div class="col-xl-4">
        <a href="#" class="card hoverable card_2 ">
          <div class="card-body">
            <span :class="`svg-icon-primary`" class="svg-icon svg-icon-2x mx-n1">
              <inline-svg :src="`media/home/user_2.svg`" />
            </span>
            <div :class="`text-h5`" class="fw-bolder fs-2 mt-5">
              24
            </div>
            <div :class="`text-p`" class="fw-bold fs-7">
                Inactive Account
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-12 mt-8">
    <Widget3></Widget3>
        </div>
        </div>
    <!--end::Dashboard-->
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted } from "vue";
  import Widget3 from "@/components/widgets/charts/Widget3.vue"
  import { MenuComponent } from "@/assets/ts/components";
  import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
  
  export default defineComponent({
    name: "customer",
    components: {
      Widget3,
    },
    setup() {

        onMounted(() => {
        MenuComponent.reinitialization();
  
        setCurrentPageBreadcrumbs("Customer Analytics", ["Customer Analytics"]);
      });
    },
  });
  </script>
  