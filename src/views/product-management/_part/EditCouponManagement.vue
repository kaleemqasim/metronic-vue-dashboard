<template>
  <!--begin::Basic info-->
  <div class="card mb-5 mb-xl-10">
    <div class="card-header border-0 cursor-pointer">
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">Edit Coupon</h3>
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
        @submit="handleSubmit"
        :validation-schema="rules"
        v-if="coupon && Object.keys(coupon).length > 0"
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
                  as="select"
                  name="product_ids[]"
                  class="form-select form-select-lg form-select-solid"
                  data-control="select2"
                  data-placeholder="Select..."
                  data-allow-clear="true"
                  data-hide-search="true"
                  multiple
                  @input="clearError('product_ids')"
                >
                  <option value="" disabled>All Products</option>
                  <template v-if="products.length === 0">
                    <option disabled>Loading...</option>
                  </template>
                  <template v-else>
                    <option
                      v-for="product in products"
                      :key="product.id"
                      :value="product.id"
                      :selected="product.id == 1"
                    >
                      {{ product.name }}
                    </option>
                  </template>
                </Field>
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="product_ids" />
                  </div>
                  <div class="fv-help-block" v-if="errors.product_ids">
                    <span class="fv-help-block__text">
                      {{ errors.product_ids[0] }}
                    </span>
                  </div>
                </div>
              </div>
              <!--end::Row-->
            </div>
            <!--end::Col-->
          </div>
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-6 col-form-label fw-bold fs-6">Code</label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-6">
              <!--begin::Row-->
              <div class="fv-row">
                <Field
                  type="text"
                  name="code"
                  :value="coupon.code"
                  class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                  placeholder="Code"
                  @input="clearError('code')"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="code" />
                  </div>
                  <div class="fv-help-block" v-if="errors.code">
                    <span class="fv-help-block__text">
                      {{ errors.code[0] }}
                    </span>
                  </div>
                </div>
              </div>
              <!--end::Row-->
            </div>
            <!--end::Col-->
          </div>
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-6 col-form-label fw-bold fs-6">Quantity</label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-6">
              <!--begin::Row-->
              <div class="fv-row">
                <Field
                  type="text"
                  name="quantity"
                  :value="coupon.quantity"
                  class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                  placeholder="Quantity"
                  @input="clearError('quantity')"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="quantity" />
                  </div>
                  <div class="fv-help-block" v-if="errors.quantity">
                    <span class="fv-help-block__text">
                      {{ errors.quantity[0] }}
                    </span>
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
              >Limit Per User</label
            >
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-6">
              <!--begin::Row-->
              <div class="fv-row">
                <Field
                  type="number"
                  name="limit_per_user"
                  :value="coupon.limitPerUser"
                  class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                  placeholder="Limit Per User"
                  @input="clearError('limit_per_user')"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="limit_per_user" />
                  </div>
                  <div class="fv-help-block" v-if="errors.limit_per_user">
                    <span class="fv-help-block__text">
                      {{ errors.limit_per_user[0] }}
                    </span>
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
                name="type"
                class="form-select form-select-solid form-select-lg fw-bold"
                @input="clearError('type')"
                :value="coupon.type.value"
              >
                <option value="" disabled>Select Type</option>
                <option :value="1" :selected="coupon.type.value == 1">
                  All Products
                </option>
                <option :value="2" :selected="coupon.type.value == 2">
                  Selected Products
                </option>
              </Field>
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="type" />
                </div>
                <div class="fv-help-block" v-if="errors.type">
                  <span class="fv-help-block__text">
                    {{ errors.type[0] }}
                  </span>
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
                name="discount_type"
                class="form-select form-select-solid form-select-lg fw-bold"
                @input="clearError('discount_type')"
                :value="coupon.discountType.value"
              >
                <option value="1" :selected="coupon.discountType.value == 1">
                  Percentage
                </option>
                <option value="2" :selected="coupon.discountType.value == 2">
                  Fixed
                </option>
              </Field>
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="discount_type" />
                </div>
                <div class="fv-help-block" v-if="errors.discount_type">
                  <span class="fv-help-block__text">
                    {{ errors.discount_type[0] }}
                  </span>
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
                  type="date"
                  name="start_at"
                  class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                  placeholder="Insert"
                  :min="minDate"
                  :value="formatBack(coupon.startAt)"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="start_at" />
                  </div>
                </div>
              </div>
              <!--end::Row-->
            </div>
            <!--end::Col-->
          </div>
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-6 col-form-label fw-bold fs-6">End Date</label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-6">
              <!--begin::Row-->
              <div class="fv-row">
                <Field
                  type="date"
                  name="end_at"
                  class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                  placeholder="Insert"
                  :min="minDate"
                  :value="formatBack(coupon.endAt)"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="end_at" />
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
                  type="number"
                  name="amount"
                  class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                  placeholder="RM XX.XX"
                  :value="coupon.amount"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="amount" />
                  </div>
                </div>
                <div class="fv-help-block" v-if="errors.amount">
                  <span class="fv-help-block__text">
                    {{ errors.amount[0] }}
                  </span>
                </div>
              </div>
              <!--end::Row-->
            </div>
            <!--end::Col-->
          </div>
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-6 col-form-label fw-bold fs-6">Activate</label>
            <!--begin::Label-->

            <!--begin::Label-->
            <div class="col-lg-6 d-flex align-items-center">
              <div class="form-check form-check-solid form-switch fv-row">
                <Field
                  type="checkbox"
                  class="form-check-input"
                  name="status"
                  id="activate"
                  v-model="coupon.status.value"
                />
                <label class="form-check-label" for="activate"></label>
              </div>
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="status" />
                </div>
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
          <router-link
            type="reset"
            class="btn btn-white btn-active-light-primary me-2"
            to="/product-management/CouponManagement"
          >
            Discard
          </router-link>
          <button
            type="button"
            class="btn btn-white btn-light btn-active-light-light me-2"
            @click="handleDelete()"
          >
            Delete
          </button>
          <button
            type="submit"
            id="kt_account_profile_details_submit"
            ref="submitButton"
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
import { computed, defineComponent, onMounted, ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import ApiService from "@/core/services/ApiService";
import * as Yup from "yup";
import moment from "moment";
import { useStore } from "vuex";
import { Mutations } from "@/store/enums/StoreEnums";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "account-settings",
  components: {
    ErrorMessage,
    Field,
    Form,
  },
  setup() {
    //Create form validation object
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const coupon = ref({});
    const submitButton = ref<HTMLElement | null>(null);
    const loading = ref<boolean>(false);
    const couponId = route.params.id;

    const errors = computed(() => {
      return store.getters.getErrors;
    });

    const rules = Yup.object().shape({
      code: Yup.string().required().label("Code"),
      type: Yup.string().required().label("Discount type"),
      amount: Yup.number().required().min(1).label("Price"),
      start_at: Yup.string().required().label("Start Date"),
      end_at: Yup.string().required().label("End Date"),
      limit_per_user: Yup.number().required().min(1).label("Limit user"),
      // product_ids: Yup.string().required().label("Product ids"),
    });

    const formatDate = (date) => {
      if (date) {
        return moment(String(date)).format("YYYY-MM-DD HH:mm:ss");
      }
    };

    // format back to YYYY-MM-DD to set html input value in edit
    const formatBack = (date) => {
      if (date) {
        return moment(String(date)).format("YYYY-MM-DD");
      }
    };
    const clearError = (fieldName) => {
      store.commit(Mutations.SET_ERROR, { [fieldName]: "" });
    };

    const minDate = computed(() => {
      const today = new Date().toISOString().split("T")[0];
      return today;
    });
    const handleSubmit = async (values) => {
      try {
        store.commit(Mutations.SET_ERROR, {});
        if (submitButton.value) {
          // Activate indicator
          submitButton.value.setAttribute("data-kt-indicator", "on");
        }
        ApiService.setHeader();
        values.start_at = formatDate(values.start_at);
        values.end_at = formatDate(values.end_at);
        values.status = values.status == "on" ? 0 : 1;

        await ApiService.put(
          `${process.env.VUE_APP_API_URL}/v1/coupons/${couponId}`,
          values
        )
          .then(() => {
            Swal.fire({
              text: "Coupon successfully updated",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(function () {
              // Go to page after successfully login
              router.push({ name: "coupon-management" });
            });
          })
          .catch((error) => {
            if (error.response && error.response.data) {
              const responseData = error.response.data;
              if (responseData.errors) {
                const errors = responseData.errors;
                store.commit(Mutations.SET_ERROR, errors);
              }
            }
          });
        submitButton.value?.removeAttribute("data-kt-indicator");
      } catch (error) {
        submitButton.value?.removeAttribute("data-kt-indicator");
      }
    };

    const handleDelete = async () => {
      ApiService.setHeader();
      Swal.fire({
        text: "Are you sure to delete this",
        icon: "warning",
        buttonsStyling: false,
        confirmButtonText: "Ok, got it!",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        customClass: {
          confirmButton: "btn fw-bold btn-light-primary",
          cancelButton: "btn fw-bold btn-light-danger",
        },
      }).then(async function (result) {
        // Go to page after successfully login
        if (result.isConfirmed) {
          await ApiService.delete(
            `${process.env.VUE_APP_API_URL}/v1/coupons/${couponId}`
          ).then(() => {
            Swal.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            ).then(function () {
              // Go to page after successfully login
              router.push({ name: "coupon-management" });
            });
          });
        }
      });
    };
    const products = ref([]); // Reactive variable to store products

    const loadProducts = async () => {
      try {
        ApiService.setHeader();

        const response = await ApiService.get(
          `${process.env.VUE_APP_API_URL}/v1/products`
        );
        products.value.splice(0);
        products.value = response.data.data;
        // Update the products array with the fetched products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    const loadCoupon = async () => {
      try {
        ApiService.setHeader();

        const response = await ApiService.get(
          `${process.env.VUE_APP_API_URL}/v1/coupons/${couponId}`
        );
        // coupon.value.splice(0);
        coupon.value = response.data.data;
        // Update the products array with the fetched products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    onMounted(async () => {
      setCurrentPageBreadcrumbs("Edit Coupon", [
        "Product Management",
        "Coupon Management",
      ]);
      loading.value = true;
      await loadCoupon();
      await loadProducts();
      loading.value = false;
    });

    return {
      handleSubmit,
      rules,
      products,
      submitButton,
      errors,
      clearError,
      minDate,
      coupon,
      formatBack,
      handleDelete,
    };
  },
});
</script>

<style scoped>
.fv-help-block__text {
  color: red;
}
</style>