<template>
      <div class="card p-10">
        <div class="pt-6">
        <div class="breadCrumb_btn d-flex justify-content-end pt-6 px-9">
            <div
              class="btn btn-sm btn-success"
              >
              <router-link
                  to=""
                  class="menu-link px-3 text-gray-100"
                  >
                  Checkout
                  </router-link
                >
            </div>
        </div>  
        <h3>Name: Kamrul Ariffin Abdul Ghani / MYKAD: 781108-09-8079</h3>
        <p class="mt-2 fs-6 text-muted">Acquiring this information will require to get this person involvement against other entity registration, you will require to pay for 2 times in order for the system to provide with an accurate information. These are the list oif information to be validate against the searched person:</p>
        <div class="row mt-3">
          <div class="col-md-3">
            <router-link to="/information-search/LinkRealtionshipAnalysis">
    <div class="card mt-5 border border-dashed border-gray-300
            rounded">
      <div class="card-body text-center py-9 px-6">
        <h3
                   class="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
          >Personal Involvement as a Director</h3>
        </div>
      </div>
    </router-link>
          </div>
          <div class="col-md-3">
            <router-link to="/information-search/LinkRealtionshipAnalysis">
    <div class="card mt-5 border border-dashed border-gray-300
            rounded">
      <div class="card-body text-center py-9 px-6">
        <h3
                   class="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
          >Personal Involvement as a Shareholder</h3>
        </div>
      </div>
    </router-link>
          </div>
          <div class="col-md-3">
            <router-link to="/information-search/LinkRealtionshipAnalysis">
    <div class="card mt-5 border border-dashed border-gray-300
            rounded">
      <div class="card-body text-center py-9 px-6">
        <h3
                   class="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
          >Personal Involvement as a Company Secretary</h3>
        </div>
      </div>
    </router-link>
          </div>
          <div class="col-md-3">
            <router-link to="/information-search/LinkRealtionshipAnalysis">
    <div class="card mt-5 border border-dashed border-gray-300
            rounded">
      <div class="card-body text-center py-9 px-6">
        <h3
                   class="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
          >Personal Involvement as a Auditor</h3>
        </div>
      </div>
    </router-link>
          </div>
          <div class="col-md-3">
            <router-link to="/information-search/LinkRealtionshipAnalysis">
    <div class="card mt-5 border border-dashed border-gray-300
            rounded">
      <div class="card-body text-center py-9 px-6">
        <h3
                   class="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
          >Personal Involvement as a Liquidator</h3>
        </div>
      </div>
    </router-link>
          </div>
          <div class="col-md-3">
            <router-link to="/information-search/LinkRealtionshipAnalysis">
    <div class="card mt-5 border border-dashed border-gray-300
            rounded">
      <div class="card-body text-center py-9 px-6">
        <h3
                   class="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
          >Personal Involvement as a Business Ownership</h3>
        </div>
      </div>
    </router-link>
          </div>
          <div class="col-md-3">
            <router-link to="/information-search/LinkRealtionshipAnalysis">
    <div class="card mt-5 border border-dashed border-gray-300
            rounded">
      <div class="card-body text-center py-9 px-6">
        <h3
                   class="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0"
          >Personal Involvement as a Partnership and Compliance Officer</h3>
        </div>
      </div>
    </router-link>
          </div>
        </div>
         <p class="mt-4 fs-6 text-muted">Upon complete validation for these information, you will be presented with the findings and preparation to navigate to the next step.</p>
         <div class="overflow-auto pb-5">
        <div
          class="
            notice
            d-flex
            bg-light-primary
            rounded
            border-primary border border-dashed
            min-w-lg-600px
            flex-shrink-0
            p-6
            mt-10
          "
        >
          <!--begin::Icon-->
          <span class="svg-icon svg-icon-2tx svg-icon-primary me-4">
  <inline-svg src="media/icons/duotune/finance/fin001.svg" />
   </span>
          <!--end::Icon-->

          <!--begin::Wrapper-->
          <div class="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
            <!--begin::Content-->
            <div class="mb-3 mb-md-0 fw-bold">
              <h4 class="text-gray-800 fw-bolder">
                Total Amount To Be paid
              </h4>

              <div class="fs-6 text-gray-600 pe-7">
                Total amount to be paid for these information validation is RM500.00
              </div>
            </div>
            <!--end::Content-->

            <!--begin::Action-->
           <router-link to="/information-search/CartPayment">
            <p
              class="btn btn-primary px-6 align-self-center text-nowrap"
            >
            Proceed with Payment
          </p>
           </router-link>
            <!--end::Action-->
          </div>
          <!--end::Wrapper-->
        </div>
      </div>
      </div>
      </div>
      </template>
    
    <script lang="ts">
    import { defineComponent, reactive, toRefs, ref, onMounted } from "vue";
    import { MenuComponent } from "@/assets/ts/components";
    import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
    
    
    export default defineComponent({
      name: "link-relationship-listing",
      components: {
    
      },
      setup() {
    
        onMounted(() => {
          MenuComponent.reinitialization();
    
          setCurrentPageBreadcrumbs("Link Relationship", []);
        });
    
        return {
    
        };
      },
    });
    </script>
    