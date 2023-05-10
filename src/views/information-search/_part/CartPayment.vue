<template>
  <div class="card">
    <div class="breadCrumb_btn d-flex justify-content-end pt-6 px-9">
      <div class="btn btn-sm btn-success px-6 text-gray-100">
        Checkout
      </div>
    </div>
    <div class="p-6 pt-10">
      <div class="card-header border-1 min-h-0px p-0">
        <div class="card-title">
          <h2>Payment Methods</h2>
        </div>
        <div class="card-toolbar m-0">
          <ul class="
              nav nav-stretch
              fs-5
              fw-bold
              nav-line-tabs nav-line-tabs-2x
              border-transparent
            " role="tablist">
            <li class="nav-item" role="presentation">
              <a id="kt_referrals_2019_tab" class="nav-link text-active-primary ms-3 active" data-bs-toggle="tab" role="tab"
                href="#kt_customer_details_invoices_1">
                FPX
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a id="kt_referrals_year_tab" class="nav-link text-active-primary " data-bs-toggle="tab" role="tab"
                href="#kt_customer_details_invoices_2">
                Credit Card
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="card-body p-0 mt-5">
        <div id="kt_referred_users_tab_content" class="tab-content">
          <div id="kt_customer_details_invoices_1" class="py-0 pt-5 tab-pane fade active show" role="tabpanel">
            <div class="py-0" data-kt-customer-payment-method="row">
              <!--begin::Header-->
              <label class="mb-2 fw-bold">Select Bank</label>
              <input type="text" class="form-control form-control-solid w-25" />
              <div class="p-5 d-flex justify-content-end">
                <!--begin::Toggle-->
                <div class="d-flex my-3 ms-9">
                  <router-link to="/user/my-order">
                    <button class="btn btn-sm btn-primary">Pay Now</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div id="kt_customer_details_invoices_2" class="py-0 pt-5 tab-pane fade" role="tabpanel">
            <div class="py-0" data-kt-customer-payment-method="row">
              <!--begin::Header-->
              <div class="p-5 d-flex flex-stack flex-wrap border-dashed rounded mb-4">
                <!--begin::Toggle-->
                <div class="">
                  <div class="d-flex align-items-center mb-3">
                    <div class="text-gray-800 fw-bolder fs-3">Marcus Morris</div>
                    <div class="badge badge-light-success ms-5">Primary</div>
                  </div>
                  <div class="d-flex align-items-center">
                  <img src="media/svg/card-logos/visa.svg" class="w-100px me-3" alt="" />
                  <div class="me-3">
                    <div class="d-flex align-items-center">
                      <div class="text-gray-800 fw-bolder">Visa **** 1679</div>
                    </div>
                    <div class="text-muted">Card expires at 09/24</div>
                  </div>
                </div>
                </div>
                <div class="d-flex my-3 ms-9">
                  <button class="btn btn-sm btn-light-100 text-muted me-2">Delete</button>
                  <button class="btn btn-sm btn-light">Edit</button>
                </div>
              </div>
              <div class="p-5 d-flex flex-stack flex-wrap border-dashed rounded mb-4">
                <!--begin::Toggle-->
                <div class="">
                  <div class="d-flex align-items-center mb-3">
                    <div class="text-gray-800 fw-bolder fs-3">Jason Davis</div>
                  </div>
                  <div class="d-flex align-items-center">
                  <img src="media/svg/card-logos/mastercard.svg" class="w-100px me-3" alt="" />
                  <div class="me-3">
                    <div class="d-flex align-items-center">
                      <div class="text-gray-800 fw-bolder">Mastercard **** 2704</div>
                    </div>
                    <div class="text-muted">Card expires at 09/24</div>
                  </div>
                </div>
                </div>
                <div class="d-flex my-3 ms-9">
                  <button class="btn btn-sm btn-light-100 text-muted me-2">Delete</button>
                  <button class="btn btn-sm btn-light">Edit</button>
                </div>
              </div>
              <div class="p-5 d-flex justify-content-end">
                <!--begin::Toggle-->
                <div class="d-flex my-3 ms-9">
                  <router-link to="/user/my-order">
                    <button class="btn btn-sm btn-primary">Pay Now</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
    
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { MenuComponent } from "@/assets/ts/components";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";


export default defineComponent({
  name: "cart-payment",
  components: {

  },
  setup() {

    onMounted(() => {
      MenuComponent.reinitialization();

      setCurrentPageBreadcrumbs("My Cart", []);
    });

    return {

    };
  },
});
</script>
    