<template>
  <!--begin::Dashboard-->
  <div class="row homeCards" v-if="statistics">
    <div class="col-xl-3">
      <a href="#" class="card hoverable card_1">
        <div class="card-body">
          <span :class="`svg-icon-primary`" class="svg-icon svg-icon-2x mx-n1">
            <inline-svg :src="`media/home/user_1.svg`" />
          </span>
          <div :class="`text-h5`" class="fw-bolder fs-2 mt-5">
            {{ statistics.total_registered_users }}
          </div>
          <div :class="`text-p`" class="fw-bold fs-7">
            Total Registered Users
          </div>
        </div>
      </a>
    </div>
    <div class="col-xl-3">
      <a href="#" class="card hoverable card_2">
        <div class="card-body">
          <span :class="`svg-icon-primary`" class="svg-icon svg-icon-2x mx-n1">
            <inline-svg :src="`media/home/user_2.svg`" />
          </span>
          <div :class="`text-h5`" class="fw-bolder fs-2 mt-5">
            {{ statistics.total_active_users }}
          </div>
          <div :class="`text-p`" class="fw-bold fs-7">Total Active Users</div>
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
            ${{ statistics.total_purchased }}
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
            ${{ statistics.total_amount }}
          </div>

          <div :class="`text-p`" class="fw-bold fs-7">
            Total Transaction Amount
          </div>
        </div>
      </a>
    </div>
  </div>
  <div class="row gx-xl-8">
    <div class="col-xl-12 mt-8">
      <Widget3></Widget3>
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
          <img src="/media/home/recent_alerts.svg" alt="alerts" />
        </div>
        <div class="inner_content">
          <h6>Product Purchase Issue</h6>
          <p>
            User with email username@gmail.com report to have an error with
            product purchased.
          </p>
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
import { defineComponent, onMounted, ref } from "vue";
import Widget3 from "@/components/widgets/charts/Widget3.vue";
import Widget1 from "@/views/_parts/Widget1.vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";
import ApiService from "@/core/services/ApiService";

export default defineComponent({
  name: "dashboard",
  components: {
    Widget3,
    Widget1,
  },
  setup() {
    const statistics = ref(null);
    onMounted(async () => {
      setCurrentPageTitle("Dashboard");
      try {
        ApiService.setHeader();
        await ApiService.get(
          `${process.env.VUE_APP_API_URL}/v1/dashboard/stats`
        ).then(({ data }) => {
          statistics.value = data.data;
        });
      } catch (error) {
        console.log(error);
      }
    });
    return {
      statistics,
    };
  },
});
</script>
