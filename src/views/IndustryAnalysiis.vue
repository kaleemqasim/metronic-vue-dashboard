<template>
  <div class="card p-10">
  <div class="breadCrumb_btn d-flex justify-content-end pt-6 px-9">
            <div
              class="btn btn-sm btn-success"
              >
              <router-link
                  to=""
                  class="menu-link px-3 text-gray-100"
                  >
                  Download
                  </router-link
                >
            </div>
        </div>  
  <h3>Name: Kamrul Ariffin Abdul Ghani / MYKAD: 781108-09-8079</h3>
  <p class="text-muted fs-5">Display here is the information related to the entity ownership</p>
  <div class="card-header border-0 min-h-0px p-0">
          <div class="card-toolbar m-0">
            <ul class="
                nav nav-stretch
                fs-5
                fw-bold
                nav-line-tabs nav-line-tabs-2x
                border-transparent
              " role="tablist">
              <li class="nav-item" role="presentation">
                <a id="kt_referrals_year_tab" class="nav-link text-active-primary active" data-bs-toggle="tab" role="tab"
                  href="#kt_customer_details_invoices_1">
                  Overview
                </a>
              </li>
  
              <li class="nav-item" role="presentation">
                <a id="kt_referrals_2019_tab" class="nav-link text-active-primary ms-3" data-bs-toggle="tab" role="tab"
                  href="#kt_customer_details_invoices_2">
                  Directors
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a id="kt_referrals_2019_tab" class="nav-link text-active-primary ms-3" data-bs-toggle="tab" role="tab"
                  href="#kt_customer_details_invoices_3">
                  Shareholders
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a id="kt_referrals_2019_tab" class="nav-link text-active-primary ms-3" data-bs-toggle="tab" role="tab"
                  href="#kt_customer_details_invoices_4">
                  Auditor
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a id="kt_referrals_2019_tab" class="nav-link text-active-primary ms-3" data-bs-toggle="tab" role="tab"
                  href="#kt_customer_details_invoices_5">
                  Company Secretary
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a id="kt_referrals_2019_tab" class="nav-link text-active-primary ms-3" data-bs-toggle="tab" role="tab"
                  href="#kt_customer_details_invoices_6">
                  Activity
                </a>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
      <div class="card-body p-0">
        <div id="kt_referred_users_tab_content" class="tab-content">
          <div id="kt_customer_details_invoices_1" class="py-0 pt-5 tab-pane fade active show" role="tabpanel">
            <div class="row homeCards">
    <div class="col-md-5">
      <Widget1></Widget1>
    </div>
    <div class="col-md-7">
      <Widget3></Widget3>
      </div>
      </div>
          </div>
         
        </div>
      </div>
  <!--end::Dashboard-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Widget3 from "@/components/widgets/charts/Widget3.vue";
import Widget1 from "@/components/widgets/charts/Widget1.vue";
import { MenuComponent } from "@/assets/ts/components";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "industry-analysiis",
  components: {
    Widget3,
    Widget1,
  },
  setup() {
    onMounted(() => {
            MenuComponent.reinitialization();
            setCurrentPageBreadcrumbs("Industry Analysiis", []);
        });
  },
});
</script>
