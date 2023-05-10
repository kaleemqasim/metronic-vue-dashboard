<template>
  <div class="card">
    <div class="p-6 pt-10">
      <div class="row mx-auto">
        <div class="col-md-7 mx-auto">
          <p class="text-muted text-center">Please enter the required information by using <br /> the search form provided
            below</p>
            <router-link to="/information-search/PersonalInvolvementListing">
          <div class="d-flex">
            <input type="text" class="form-control form-control-solid w-100 text-center"
              placeholder="Please enter personnel MYKAD" />
            <div class="entityDropdown ps-3">
              <select class="form-select border-0 text-muted" aria-label="Select example">
                <option>Select</option>
                <option value="1">
                 Entities Found
                </option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          </router-link>
        </div>
      </div>
      <div class="row homeCards mt-20">
        <div class="col-xl-4">
          <div class="card bgi-no-repeat card-xl-stretch mb-xl-8"
            style="background-position: right top; background-size: 30% auto; background-image: url('media/svg/shapes/abstract-4.svg'); box-shadow: 2px 2px 6px 0px #a9a9a96e;">
            <!--begin::Body-->
            <div class="card-body">
              <p class="card-title text-muted fs-6">Promotion Purchase</p>

              <div class="fw-bolder text-primary my-6">May 2022</div>

              <p class="text-dark fw-bold fs-5 m-0">
                <span>Enjoy 10% discount for purchase above RM500.00</span>
              </p>
            </div>
            <!--end::Body-->
          </div>
        </div>
        <div class="col-xl-4">
          <div class="card bgi-no-repeat card-xl-stretch mb-xl-8"
            style="background-position: right top; background-size: 30% auto; background-image: url('media/svg/shapes/abstract-2.svg'); box-shadow: 2px 2px 6px 0px #a9a9a96e;">
            <!--begin::Body-->
            <div class="card-body">
              <p class="card-title text-muted fs-6">New Release</p>

              <div class="fw-bolder text-primary my-6">20 April 2023</div>

              <p class="text-dark fw-bold fs-5 m-0">
                <span>Update personnel involvement for LLP entityu</span>
              </p>
            </div>
            <!--end::Body-->
          </div>
        </div>
        <div class="col-xl-4">
          <div class="card bgi-no-repeat card-xl-stretch mb-xl-8"
            style="background-position: right top; background-size: 30% auto; background-image: url('media/svg/shapes/abstract-1.svg'); box-shadow: 2px 2px 6px 0px #a9a9a96e;">
            <!--begin::Body-->
            <div class="card-body">
              <p class="card-title text-muted fs-6">Bulk Purchase</p>

              <div class="fw-bolder text-primary my-6">ReactJS</div>

              <p class="text-dark fw-bold fs-5 m-0">
                <span>Bulk purchase discount for Company Secreatary</span>
              </p>
            </div>
            <!--end::Body-->
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
  name: "personnel-involvement",
  components: {

  },
  setup() {

    onMounted(() => {
      MenuComponent.reinitialization();

      setCurrentPageBreadcrumbs("Personnel Involvement", []);
    });

    return {

    };
  },
});
</script>
  