<template>
  <!--begin::Basic info-->
  <div class="card mb-5 mb-xl-10">
    <div
      class="card-header border-0 cursor-pointer"
    >
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">Add Product</h3>
      </div>
      <!--end::Card title-->
    </div>
    <!--begin::Card header-->

    <!--begin::Content-->
    <div>
      <!--begin::Form-->
      <Form
        id="kt_account_profile_details_form"
        class="form"
      >
        <!--begin::Card body-->
        <div class="card-body border-top p-9">

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-6 col-form-label fw-bold fs-6"
              >Product Name</label
            >
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-6">
              <!--begin::Row-->
              <div class="fv-row">
                  <Field
                    type="text"
                    name="pname"
                    class="
                      form-control form-control-lg form-control-solid
                      mb-3 mb-lg-0
                    "
                    placeholder="Product Name"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="pname" />
                    </div>
                  </div>
                </div>
              <!--end::Row-->
            </div>
            <!--end::Col-->
          </div>
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-6 col-form-label fw-bold fs-6"
              >Category</label
            >
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-6 fv-row">
              <Field
                as="select"
                name="category"
                class="form-select form-select-solid form-select-lg fw-bold"
              >
                <option value="AF">Afghanistan</option>
                <option value="AX">Aland Islands</option>
                <option value="AL">Albania</option>
              </Field>
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="category" />
                </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-6 col-form-label fw-bold fs-6"
              >Sub-Category</label
            >
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-6 fv-row">
              <Field
                as="select"
                name="sub_category"
                class="form-select form-select-solid form-select-lg fw-bold"
              >
                <option value="AF">Afghanistan</option>
                <option value="AX">Aland Islands</option>
                <option value="AL">Albania</option>
              </Field>
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="sub_category" />
                </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-6 col-form-label fw-bold fs-6"
              >SSM Fees (RM)</label
            >
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-6">
              <!--begin::Row-->
              <div class="fv-row">
                  <Field
                    type="text"
                    name="ssmfees"
                    class="
                      form-control form-control-lg form-control-solid
                      mb-3 mb-lg-0
                    "
                    placeholder="Insert"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="ssmfees" />
                    </div>
                  </div>
                </div>
              <!--end::Row-->
            </div>
            <!--end::Col-->
          </div>
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-6 col-form-label fw-bold fs-6"
              >Service Fees</label
            >
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-6">
              <!--begin::Row-->
              <div class="fv-row">
                  <Field
                    type="text"
                    name="servicefees"
                    class="
                      form-control form-control-lg form-control-solid
                      mb-3 mb-lg-0
                    "
                    placeholder="Insert"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="servicefees" />
                    </div>
                  </div>
                </div>
              <!--end::Row-->
            </div>
            <!--end::Col-->
          </div>
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-6 col-form-label fw-bold fs-6"
              >Total Price (RM)</label
            >
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-6">
              <!--begin::Row-->
              <div class="fv-row">
                  <Field
                    type="text"
                    name="price"
                    class="
                      form-control form-control-lg form-control-solid
                      mb-3 mb-lg-0
                    "
                    placeholder="RM XX.XX"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="price" />
                    </div>
                  </div>
                </div>
              <!--end::Row-->
            </div>
            <!--end::Col-->
          </div>
          <div class="row mb-6">
              <!--begin::Label-->
              <label class="col-lg-6 col-form-label fw-bold fs-6"
                >Applicable for Discount</label
              >
              <!--begin::Label-->
  
              <!--begin::Label-->
              <div class="col-lg-6 d-flex align-items-center">
                <div class="form-check form-check-solid form-switch fv-row">
                  <input
                    class="form-check-input w-45px h-30px"
                    type="checkbox"
                    id="discount"
                  />
                  <label class="form-check-label" for="discount"></label>
                </div>
              </div>
              <!--begin::Label-->
          </div>
          <div class="row mb-0">
              <!--begin::Label-->
              <label class="col-lg-6 col-form-label fw-bold fs-6"
                >Applicable for Coupon Code</label
              >
              <!--begin::Label-->
  
              <!--begin::Label-->
              <div class="col-lg-6 d-flex align-items-center">
                <div class="form-check form-check-solid form-switch fv-row">
                  <input
                    class="form-check-input w-45px h-30px"
                    type="checkbox"
                    id="coupon"
                  />
                  <label class="form-check-label" for="coupon"></label>
                </div>
              </div>
              <!--begin::Label-->
          </div>
          <!--end::Input group-->

        </div>
        <!--end::Card body-->

        <!--begin::Actions-->
        <div class="card-footer d-flex justify-content-end py-6 px-9">
          <button
            type="reset"
            class="btn btn-white btn-active-light-primary me-2"
          >
            Discard
          </button>
          <button
            type="button"
            class="btn btn-white btn-light btn-active-light-light me-2"
          >
            Delete
          </button>
          <button
            type="submit"
            id="kt_account_profile_details_submit"
            ref="submitButton1"
            class="btn btn-primary"
          >
            <span class="indicator-label"> Save Changes </span>
            <span class="indicator-progress">
              Please wait...
              <span
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span>
          </button>
        </div>
        <!--end::Actions-->
      </Form>
      <!--end::Form-->
    </div>
    <!--end::Content-->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";


export default defineComponent({
  name: "account-settings",
  components: {
    ErrorMessage,
    Field,
    Form,
  },
  setup() {

    onMounted(() => {
      setCurrentPageBreadcrumbs("Add Product", ["Product Management","Product Listing"]);
    });

    return {

    };
  },
});
</script>
