<template>
  <div class="card">
    <div class="p-6 pt-10">
      <div class="row mx-auto">
        <div class="col-md-9 mx-auto">
          <p class="text-muted text-center">Please enter the required information by using <br /> the search form provided
            below</p>
            <router-link to="/user/information-search/EntitiesFound">
          <div class="d-flex">
            <input type="text" class="form-control form-control-solid w-100 text-center"
              placeholder="Please enter Company, Business or Audit Firm info to search." />
            <div class="entityDropdown ps-3">
              <select class="form-select border-0 text-muted" aria-label="Select example">
                <option>All Entities</option>
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
      <div
  id="kt_carousel_1_carousel"
  class="carousel carousel-custom slide"
  data-bs-ride="carousel"
  data-bs-interval="8000"
>


<div class="entityCarousel">
  <!--begin::Carousel-->
  <div class="carousel-inner pt-8">
    <!--begin::Item-->
    <div class="carousel-item active">
      <div class="caroselCard">
        <div class="card">
          <div class="d-flex">
            <div class="flex-shrink-0">
              <img src="media/logos/shoppings.svg" alt="shop">
            </div>
            <div class="flex-grow-1 ms-3">
              <h5>QUICK GUIDE </h5>
              <p>Best tool ever create for <br>
amazing shopping</p>
<button class="bnt btn-yellow">VIEW GUIDE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--end::Item-->

    <!--begin::Item-->
    <div class="carousel-item">
       <div class="caroselCard">
        <div class="card">
          <div class="d-flex">
            <div class="flex-shrink-0">
              <img src="media/logos/shoppings.svg" alt="shop">
            </div>
            <div class="flex-grow-1 ms-3">
              <h5>QUICK GUIDE </h5>
              <p>Best tool ever create for <br>
amazing shopping</p>
<button class="bnt btn-yellow">VIEW GUIDE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--end::Item-->

    <!--begin::Item-->
    <div class="carousel-item">
       <div class="caroselCard">
        <div class="card">
          <div class="d-flex">
            <div class="flex-shrink-0">
              <img src="media/logos/shoppings.svg" alt="shop">
            </div>
            <div class="flex-grow-1 ms-3">
              <h5>QUICK GUIDE </h5>
              <p>Best tool ever create for <br>
amazing shopping</p>
<button class="bnt btn-yellow">VIEW GUIDE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--end::Item-->
  </div>
  <ol class="p-0 m-0 carousel-indicators carousel-indicators-dots">
      <li
        data-bs-target="#kt_carousel_1_carousel"
        data-bs-slide-to="0"
        class="ms-1 active"
      ></li>
      <li
        data-bs-target="#kt_carousel_1_carousel"
        data-bs-slide-to="1"
        class="ms-1"
      ></li>
      <li
        data-bs-target="#kt_carousel_1_carousel"
        data-bs-slide-to="2"
        class="ms-1"
      ></li>
    </ol>
  <!--end::Carousel-->
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
  name: "enitity-search",
  components: {

  },
  setup() {

    onMounted(() => {
      MenuComponent.reinitialization();

      setCurrentPageBreadcrumbs("Entity Search", []);
    });

    return {

    };
  },
});
</script>
  