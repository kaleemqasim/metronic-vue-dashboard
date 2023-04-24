<template>
  <div class="card">
      <div class="breadCrumb_btn d-flex justify-content-end pt-6 px-9">
          <div
            class="btn btn-sm btn-success"
            >
            <router-link
                to=""
                class="menu-link px-3 text-gray-100"
                >
                Purchase
                </router-link
              >
          </div>
      </div>
    <div class="p-6 pt-10">
      <div class="row mb-6">
        <div class="col-md-6 mb-2">
          <label class="col-lg-4 col-form-label fw-bolder fs-6"
          >Name</label>
          <input type="text" name="name" class="form-control form-control-lg form-control-solid">
          </div>
          <div class="col-md-6 mb-2">
          <label class="col-lg-4 col-form-label fw-bolder fs-6"
          >Email</label>
          <input type="email" name="email" class="form-control form-control-lg form-control-solid">
          </div>
          <div class="col-md-12">
          <label class="col-lg-4 col-form-label fw-bolder fs-6"
          >Address</label>
          <input type="text" name="address" class="form-control form-control-lg form-control-solid">
          </div>
          <div class="col-md-6 mb-2">
          <label class="col-lg-4 col-form-label fw-bolder fs-6"
          >Postcode</label>
          <input type="number" name="postcode" class="form-control form-control-lg form-control-solid">
          </div>
          <div class="col-md-6 mb-2">
          <label class="col-lg-4 col-form-label fw-bolder fs-6"
          >State</label>
          <input type="text" name="state" class="form-control form-control-lg form-control-solid">
          </div>
          <div class="col-md-6 mb-2">
          <label class="col-lg-4 col-form-label fw-bolder fs-6"
          >Telephone</label>
          <input type="number" name="telephone" class="form-control form-control-lg form-control-solid">
          </div>
          <div class="col-md-6 mb-2">
          </div>
          <div class="col-md-6 mb-2">
          <label class="col-lg-4 col-form-label fw-bolder fs-6"
          >Password</label>
          <input type="password" name="password" class="form-control form-control-lg form-control-solid">
          </div>
          <div class="col-md-6 mb-2">
          <label class="col-lg-4 col-form-label fw-bolder fs-6"
          >Confirm Password</label>
          <input type="password" name="confirmpassword" class="form-control form-control-lg form-control-solid">
          </div>
          <div class="d-flex mt-5 justify-content-end">
                  <button class="btn btn-sm btn-light me-2">Cancel</button>
                  <button class="btn btn-sm btn-primary">Update</button>
                </div>
        </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { MenuComponent } from "@/assets/ts/components";
import { Field } from "vee-validate";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";


export default defineComponent({
  name: "my-account",
  components: {

  },
  setup() {

    onMounted(() => {
      MenuComponent.reinitialization();

      setCurrentPageBreadcrumbs("My Account", []);
    });

    return {

    };
  },
});
</script>
  