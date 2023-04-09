<template>
  <!--begin::Basic info-->
  <div class="card mb-5 mb-xl-10">
    <div
      class="card-header border-0 cursor-pointer"
    >
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">Create Promotion</h3>
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
              >Type of Discount</label
            >
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-6 fv-row">
              <Field
                as="select"
                name="discount"
                class="form-select form-select-solid form-select-lg fw-bold"
              >
                <option value="AF">Afghanistan</option>
                <option value="AX">Aland Islands</option>
                <option value="AL">Albania</option>
              </Field>
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="discount" />
                </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-6 col-form-label fw-bold fs-6"
              >Value (% or fixed price)</label
            >
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-6 fv-row">
              <Field
                as="select"
                name="value"
                class="form-select form-select-solid form-select-lg fw-bold"
              >
                <option value="AF">Afghanistan</option>
                <option value="AX">Aland Islands</option>
                <option value="AL">Albania</option>
              </Field>
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="value" />
                </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-6 col-form-label fw-bold fs-6"
              >Start Date</label
            >
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-6">
              <!--begin::Row-->
              <div class="fv-row">
                  <Field
                    type="text"
                    name="startdate"
                    class="
                      form-control form-control-lg form-control-solid
                      mb-3 mb-lg-0
                    "
                    placeholder="Insert"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="startdate" />
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
              >End Date</label
            >
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-6">
              <!--begin::Row-->
              <div class="fv-row">
                  <Field
                    type="text"
                    name="enddate"
                    class="
                      form-control form-control-lg form-control-solid
                      mb-3 mb-lg-0
                    "
                    placeholder="Insert"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="enddate" />
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
                >Activate</label
              >
              <!--begin::Label-->
  
              <!--begin::Label-->
              <div class="col-lg-6 d-flex align-items-center">
                <div class="form-check form-check-solid form-switch fv-row">
                  <input
                    class="form-check-input w-45px h-30px"
                    type="checkbox"
                    id="activate"
                  />
                  <label class="form-check-label" for="activate"></label>
                </div>
              </div>
              <!--begin::Label-->
          </div>
          <div class="row mb-0">
              <!--begin::Label-->
              <label class="col-lg-6 col-form-label fw-bold fs-6"
                >Status of Promotion</label
              >
              <!--begin::Label-->
  
              <!--begin::Label-->
              <div class="col-lg-6 d-flex align-items-center">
                <span class="badge badge-light-danger me-3 p-3">Expire</span>
                <span class="badge badge-light-success p-3">Activate</span>
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
      setCurrentPageBreadcrumbs("Promotion Creation", ["Product Management","Promotion Management"]);
    });

    return {

    };
  },
});
</script>
