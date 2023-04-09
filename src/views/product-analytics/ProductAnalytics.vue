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
                35
            </div>
            <div :class="`text-p`" class="fw-bold fs-7">
                Total Products
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
              24
            </div>
            <div :class="`text-p`" class="fw-bold fs-7">
                Top Active Products
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
              20
            </div>
  
            <div :class="`text-p`" class="fw-bold fs-7">
                Less Demand Products
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
                RM 23,508
            </div>
  
            <div :class="`text-p`" class="fw-bold fs-7">
                Total Transaction Amount
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="row homeCards">
      <div class="col-xl-8 mt-8">
    <Widget1></Widget1>
        </div>
        <div class="col-xl-4 mt-8"> 
          <div class="recent_alerts">
            <div class="d-flex align-center justify-content-between">
              <h5>Recent Alerts</h5>
              <img src="/media/home/recent_alerts.svg" alt="alerts"/>
            </div>
            <div class="inner_content">
              <h6>Product Purchase Issue</h6>
              <p>User with email username@gmail.com report to have an error with product purchased.</p>
              <ul>
                <li>Product: Director Shareholder</li>
                <li>Date: 10 April 2023</li>
                <li>Time: 11:55 AM</li>
                <li>Reference: RCIBD00110042023A</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
    <!--end::Dashboard-->
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted } from "vue";
  import Widget1 from "@/views/_parts/Widget1.vue"
  import { MenuComponent } from "@/assets/ts/components";
  import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
  
  export default defineComponent({
    name: "product",
    components: {
      Widget1,
    },
    setup() {

        onMounted(() => {
        MenuComponent.reinitialization();
  
        setCurrentPageBreadcrumbs("Product Analytics", ["Product Analytics"]);
      });
    },
  });
  </script>
  