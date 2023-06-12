<template>
  <!--begin::Layout-->
  <div class="card">
    <div class="card-body">
      <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
        <!--begin: Pic-->
        <div class="me-7 mb-4">
          <div
            class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative"
          >
            <img src="media/avatars/150-2.jpg" alt="image" />
            <div
              class="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"
            ></div>
          </div>
        </div>
        <!--end::Pic-->

        <!--begin::Info-->
        <div class="d-flex flex-column justify-content-between" v-if="user">
          <!--begin::Title-->
          <div
            class="d-flex justify-content-between align-items-start flex-wrap mb-2"
          >
            <!--begin::User-->
            <div class="d-flex flex-column">
              <!--begin::Name-->
              <div class="d-flex align-items-center mb-2">
                <a
                  href="#"
                  class="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
                  >{{ user.name }}</a
                >
                <a href="#">
                  <span class="svg-icon svg-icon-1 svg-icon-primary">
                    <inline-svg src="media/icons/duotune/general/gen026.svg" />
                  </span>
                </a>
              </div>
              <!--end::Name-->
            </div>
            <!--end::User-->
          </div>
          <!--end::Title-->

          <!--begin::Stats-->
          <div class="d-flex flex-wrap flex-stack">
            <!--begin::Wrapper-->
            <div class="d-flex flex-column flex-grow-1">
              <!--begin::Stats-->
              <div class="d-flex flex-wrap">
                <!--begin::Stat-->
                <div
                  class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"
                >
                  <!--begin::Number-->
                  <div class="d-flex align-items-center">
                    <div
                      class="fs-2 fw-bolder"
                      data-kt-countup="true"
                      data-kt-countup-value="4500"
                      data-kt-countup-prefix="$"
                    >
                      $6,840
                    </div>
                  </div>
                  <!--end::Number-->

                  <!--begin::Label-->
                  <div class="fw-bold fs-6 text-gray-400">Total Value (RM)</div>
                  <!--end::Label-->
                </div>
                <!--end::Stat-->

                <!--begin::Stat-->
                <div
                  class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"
                >
                  <!--begin::Number-->
                  <div class="d-flex align-items-center">
                    <div
                      class="fs-2 fw-bolder"
                      data-kt-countup="true"
                      data-kt-countup-value="75"
                    >
                      175
                    </div>
                  </div>
                  <!--end::Number-->

                  <!--begin::Label-->
                  <div class="fw-bold fs-6 text-gray-400">
                    Information Purchased
                  </div>
                  <!--end::Label-->
                </div>
                <!--end::Stat-->
              </div>
              <!--end::Stats-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Stats-->
        </div>
        <!--end::Info-->
      </div>
    </div>
  </div>
  <div class="mt-10">
    <!--begin:::Tabs-->
    <ul
      class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-8"
    >
      <!--begin:::Tab item-->
      <li class="nav-item">
        <a
          class="nav-link text-active-primary pb-4 active"
          data-bs-toggle="tab"
          href="#kt_customer_view_overview_tab"
          >Statement</a
        >
      </li>
      <!--end:::Tab item-->

      <!--begin:::Tab item-->
      <li class="nav-item">
        <a
          class="nav-link text-active-primary pb-4"
          data-bs-toggle="tab"
          href="#kt_customer_view_overview_events_and_logs_tab"
          >Activity Timeline</a
        >
      </li>
      <!--end:::Tab item-->
    </ul>
    <!--end:::Tabs-->

    <!--begin:::Tab content-->
    <div class="tab-content" id="myTabContent">
      <!--begin:::Tab pane-->
      <div
        class="tab-pane fade show active"
        id="kt_customer_view_overview_tab"
        role="tabpanel"
      >
        <PaymentRecords card-classes="mb-6 mb-xl-9"></PaymentRecords>
      </div>
      <!--end:::Tab pane-->

      <!--begin:::Tab pane-->
      <div
        class="tab-pane fade"
        id="kt_customer_view_overview_events_and_logs_tab"
        role="tabpanel"
      >
        <div class="card">
          <!--begin::Card head-->
          <div class="card-header card-header-stretch">
            <!--begin::Title-->
            <div class="card-title d-flex align-items-center">
              <span class="svg-icon svg-icon-1 svg-icon-primary me-3 lh-0">
                <inline-svg src="media/icons/duotune/general/gen014.svg" />
              </span>

              <h3 class="fw-bolder m-0 text-gray-800">Jan 23, 2021</h3>
            </div>
            <!--end::Title-->

            <!--begin::Toolbar-->
            <div class="card-toolbar m-0">
              <!--begin::Tab nav-->
              <ul
                class="nav nav-tabs nav-line-tabs nav-stretch fs-6 border-0 fw-bolder"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <a
                    id="kt_activity_today_tab"
                    class="nav-link justify-content-center text-active-gray-800 active"
                    data-bs-toggle="tab"
                    role="tab"
                    href="#kt_activity_today"
                  >
                    Today
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    id="kt_activity_week_tab"
                    class="nav-link justify-content-center text-active-gray-800"
                    data-bs-toggle="tab"
                    role="tab"
                    href="#kt_activity_week"
                  >
                    Week
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    id="kt_activity_month_tab"
                    class="nav-link justify-content-center text-active-gray-800"
                    data-bs-toggle="tab"
                    role="tab"
                    href="#kt_activity_month"
                  >
                    Month
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    id="kt_activity_year_tab"
                    class="nav-link justify-content-center text-active-gray-800 text-hover-gray-800"
                    data-bs-toggle="tab"
                    role="tab"
                    href="#kt_activity_year"
                  >
                    2021
                  </a>
                </li>
              </ul>
              <!--end::Tab nav-->
            </div>
            <!--end::Toolbar-->
          </div>
          <!--end::Card head-->

          <!--begin::Card body-->
          <div class="card-body">
            <!--begin::Tab Content-->
            <div class="tab-content">
              <!--begin::Tab panel-->
              <div
                id="kt_activity_today"
                class="card-body p-0 tab-pane fade show active"
                role="tabpanel"
                aria-labelledby="kt_activity_today_tab"
              >
                <!--begin::Timeline-->
                <div class="timeline">
                  <KTActivityItem1></KTActivityItem1>
                  <KTActivityItem2></KTActivityItem2>
                  <KTActivityItem3></KTActivityItem3>
                  <KTActivityItem4></KTActivityItem4>
                </div>
                <!--end::Timeline-->
              </div>
              <!--end::Tab panel-->

              <!--begin::Tab panel-->
              <div
                id="kt_activity_week"
                class="card-body p-0 tab-pane fade show"
                role="tabpanel"
                aria-labelledby="kt_activity_week_tab"
              >
                <!--begin::Timeline-->
                <div class="timeline">
                  <KTActivityItem2></KTActivityItem2>
                  <KTActivityItem3></KTActivityItem3>
                  <KTActivityItem4></KTActivityItem4>
                </div>
                <!--end::Timeline-->
              </div>
              <!--end::Tab panel-->

              <!--begin::Tab panel-->
              <div
                id="kt_activity_month"
                class="card-body p-0 tab-pane fade show"
                role="tabpanel"
                aria-labelledby="kt_activity_month_tab"
              >
                <!--begin::Timeline-->
                <div class="timeline">
                  <KTActivityItem2></KTActivityItem2>
                  <KTActivityItem3></KTActivityItem3>
                  <KTActivityItem4></KTActivityItem4>
                </div>
                <!--end::Timeline-->
              </div>
              <!--end::Tab panel-->

              <!--begin::Tab panel-->
              <div
                id="kt_activity_year"
                class="card-body p-0 tab-pane fade show"
                role="tabpanel"
                aria-labelledby="kt_activity_year_tab"
              >
                <!--begin::Timeline-->
                <div class="timeline">
                  <KTActivityItem3></KTActivityItem3>
                  <KTActivityItem4></KTActivityItem4>
                </div>
                <!--end::Timeline-->
              </div>
              <!--end::Tab panel-->
            </div>
            <!--end::Tab Content-->
          </div>
          <!--end::Card body-->
        </div>
      </div>
      <!--end:::Tab pane-->
    </div>
    <!--end:::Tab content-->
  </div>
  <!--end::Layout-->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { MenuComponent } from "@/assets/ts/components";
import PaymentRecords from "@/components/customers/cards/overview/PaymentRecords.vue";
import KTActivityItem1 from "@/layout/header/partials/activity-timeline/Item1.vue";
import KTActivityItem2 from "@/layout/header/partials/activity-timeline/Item2.vue";
import KTActivityItem3 from "@/layout/header/partials/activity-timeline/Item3.vue";
import KTActivityItem4 from "@/layout/header/partials/activity-timeline/Item4.vue";
import { useRoute } from "vue-router";
import ApiService from "@/core/services/ApiService";
export default defineComponent({
  name: "customer-details",
  components: {
    PaymentRecords,
    KTActivityItem1,
    KTActivityItem2,
    KTActivityItem3,
    KTActivityItem4,
  },
  setup() {
    const route = useRoute(); // Access the current route
    const user = ref(null); // Use a ref to store the user details
    const loading = ref<boolean>(false);
    loading.value = true;
    onMounted(async () => {
      MenuComponent.reinitialization();
      setCurrentPageBreadcrumbs("User Management Details", ["User Management"]);
      // Get the user ID from the route params
      const userId = route.params.id; // Access route params using $route

      try {
        ApiService.setHeader();
        // Make the API call to retrieve user details
        await ApiService.get(
          `${process.env.VUE_APP_API_URL}/v1/users/${userId}`
        ).then(({ data }) => {
          loading.value = false;
          user.value = data.data;
        });
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      }
    });

    return {
      user, // Include the user ref in the return statement
    };
  },
});
</script>
