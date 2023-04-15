<template>
  <div class="card">
    <div class="card-body">
      <div class="breadCrumb_btn d-flex justify-content-end pt-6 px-9">
            <div
              class="btn btn-sm btn-success"
              >
              <router-link
                  to="/income-statement/SalesTransaction"
                  class="menu-link px-3 text-gray-100"
                  >
                  Return
                  </router-link
                >
            </div>
        </div>
        <div class="statement-invoice">
          <div class="row">
          <div class="col-md-8">
            <img src="media/logos/logo.svg"  alt="logo"/>
            <p class="invoice">
              Invoice #34782
            </p>
            <div class="row">
              <div class="col-md-6">
                <p class="span">Issue Date:</p>
                <p class="info">2 Apr 2023</p>
              </div>
              <div class="col-md-6">
                <p class="span">Payment Date:</p>
                <p class="info">20 Apr 2023</p>
              </div>
              <div class="col-md-6">
                <p class="span">Issue For:</p>
                <p class="info">KeenThemes Inc.</p>
                <p class="detail">8692 Wild Rose Drive Livonia, MI 48150</p>
              </div>
              <div class="col-md-6">
                <p class="span">Issue For:</p>
                <p class="info">CodeLab Inc.</p>
                <p class="detail">
                  9858 South 53rd Ave. Matthews, NC 28104
                </p>
              </div>
            </div>
            <div class="table-responsive">
                <!--begin::Table-->
                <table class="table align-middle gs-0 gy-5">
                  <!--begin::Table head-->
                  <thead>
                    <tr>
                      <th class=" min-w-200px">Description</th>
                      <th>SSM Fees (RM)</th>
                      <th>Service Fees (RM)</th>
                      <th>Amount (RM)</th>
                    </tr>
                  </thead>
                  <!--end::Table head-->
        
                  <!--begin::Table body-->
                  <tbody>
                    <tr>
                          <td class="detail">Attestation of Company Good Standing</td>
                          <td class="info">10.00</td>
                          <td class="info">5.00</td>
                          <td class="info">15.00</td>
                      </tr>
                  </tbody>
                  <!--end::Table body-->
                </table>
                <!--end::Table-->
              </div>
              <div class="row justify-content-end">
                <div class="col-md-6">
                  <div class="d-flex align-items-center justify-content-between">
                    <p class="detail">Subtotal (RM):</p>
                    <p class="info">15.00</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <p class="detail">Tax 6%</p>
                    <p class="info">0.90</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <p class="detail">Subtotal + VAT</p>
                    <p class="info">15.00</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <p class="detail">Total (RM)</p>
                    <p class="info">15.90</p>
                  </div>
                </div>
              </div>
          </div>
          <div class="col-md-4">
            <div class="payment-details">
              <div class="d-flex flex-wrap">
                <span class="badge badge-light-success">Approved</span>
                <span class="badge badge-light-warning">Pending Payment</span>
                <span class="badge badge-light-danger">Cancel</span>
              </div>
              <h4 class="paymentDetail">PAYMENT DETAILS</h4>
              <p class="mt-3 span">Payment channel</p>
              <p class="info">CIMB Clicks</p>
              <p class="mt-3 span">Transaction</p>
              <p class="info">Nl24IBAN34553477847370033
        AMB NLANBZTC</p>
        <p class="mt-3 span">Date & TIme</p>
              <p class="info">2 April 2023 13:58</p>
              <p class="mt-3 span">Sales Item</p>
              <div class="d-flex flex-wrap">
                <span class="badge badge-light-primary">Approved</span>
                <span class="badge badge-light-info">Pending Payment</span>
                <span class="badge badge-light-success">Cancel</span>
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
  name: "customer",
  components: {
    
  },
  setup() {

      onMounted(() => {
      MenuComponent.reinitialization();

      setCurrentPageBreadcrumbs("Sales Transaction", ["Income Statement"]);
    });
  },
});
</script>
