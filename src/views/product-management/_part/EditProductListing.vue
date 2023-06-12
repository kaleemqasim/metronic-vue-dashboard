<template>
  <!--begin::Basic info-->
  <div class="card mb-5 mb-xl-10">
    <div class="card-header border-0 cursor-pointer">
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">Edit Product</h3>
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
        v-if="product && Object.keys(product).length > 0"
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
                  name="name"
                  class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                  placeholder="Product Name"
                  @input="clearError('name')"
                  :value="product.name"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="name" />
                  </div>
                  <div class="fv-help-block" v-if="errors.name">
                    <span class="fv-help-block__text">
                      {{ errors.name[0] }}
                    </span>
                  </div>
                </div>
              </div>
              <!--end::Row-->
            </div>
            <!--end::Col-->
          </div>
          <!-- <div class="row mb-6">
            <label class="col-lg-6 col-form-label fw-bold fs-6">Category</label>
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
          </div> -->
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
                name="category_id"
                class="form-select form-select-solid form-select-lg fw-bold"
                @input="clearError('category_id')"
              >
                <option value="" disabled>Select Sub-Category</option>
                <optgroup
                  v-for="category in categories"
                  :label="category.name"
                  :key="category.id"
                >
                  <option
                    v-for="subcategory in category.subcategories"
                    :value="subcategory.id"
                    :key="subcategory.id"
                    :selected="product.categoryId == category.id ? true : false"
                  >
                    {{ subcategory.name }}
                  </option>
                </optgroup>
              </Field>
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="category_id" />
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
                  type="number"
                  name="ssm_fee"
                  class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                  placeholder="Insert"
                  :value="product.ssm_fee"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="ssm_fee" />
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
                  type="number"
                  name="service_fee"
                  class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                  placeholder="Insert"
                  :value="product.service_fee"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="service_fee" />
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
                  name="price"
                  class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                  placeholder="RM XX.XX"
                  :value="product.price"
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
                <Field
                  class="form-check-input w-45px h-30px"
                  type="checkbox"
                  id="discount"
                  name="is_discountable"
                  :value="true"
                  :checked="product.is_discountable ? true : false"
                />
                <label class="form-check-label" for="discount"></label>
              </div>
            </div>
            <!--begin::Label-->
          </div>
          <div class="row mb-0">
            <!--begin::Label-->
            <label class="col-lg-6 col-form-label fw-bold fs-6">Status</label>
            <!--begin::Label-->

            <!--begin::Label-->
            <div class="col-lg-6 d-flex align-items-center">
              <div class="form-check form-check-solid form-switch fv-row">
                <Field
                  class="form-check-input w-45px h-30px"
                  type="checkbox"
                  id="status"
                  name="status"
                  :value="true"
                  :checked="product.status ? true : false"
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
          <router-link
            to="/product-management/ProductListing"
            class="btn btn-white btn-active-light-primary me-2"
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
import { computed, defineComponent, onBeforeMount, onMounted, ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import * as Yup from "yup";
import { Mutations } from "@/store/enums/StoreEnums";
import ApiService from "@/core/services/ApiService";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
export default defineComponent({
  name: "account-settings",
  components: {
    ErrorMessage,
    Field,
    Form,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const submitButton = ref<HTMLElement | null>(null);
    const categories = ref([]);
    const selectedCategoryId = ref(null);
    const productId = route.params.id;
    const product = ref({});
    const errors = computed(() => {
      return store.getters.getErrors;
    });

    const rules = Yup.object().shape({
      category_id: Yup.string().required().label("Category"),
      name: Yup.string().required().label("Product name"),
      ssm_fee: Yup.number().required().min(0).label("SSM fee"),
      service_fee: Yup.number().min(0).required().label("Service fee"),
      price: Yup.number().required().min(0).label("Price"),
    });

    const clearError = (fieldName) => {
      store.commit(Mutations.SET_ERROR, { [fieldName]: "" });
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
            `${process.env.VUE_APP_API_URL}/v1/products/${productId}`
          ).then(() => {
            Swal.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            ).then(function () {
              router.push({ name: "product-management" });
            });
          });
        }
      });
    };
    const handleSubmit = async (values) => {
      try {
        store.commit(Mutations.SET_ERROR, {});
        if (submitButton.value) {
          // Activate indicator
          submitButton.value.setAttribute("data-kt-indicator", "on");
        }
        values.status = values.status == undefined ? 0 : 1;
        values.is_discountable = values.status == undefined ? 0 : 1;
        ApiService.setHeader();

        await ApiService.put(
          `${process.env.VUE_APP_API_URL}/v1/products/${productId}`,
          values
        )
          .then((response) => {
            Swal.fire({
              text: "Product successfully updated",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(function () {
              // Go to page after successfully login
              router.push({ name: "product-listing" });
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

    const loadCategories = async () => {
      await ApiService.get(`${process.env.VUE_APP_API_URL}/v1/categories`).then(
        (response) => {
          categories.value.splice(0);

          const categoriesData = response.data.data;
          // Map the categories data to include subcategories
          categories.value = categoriesData.map((category) => {
            const subcategories = categoriesData.filter(
              (subcategory) => subcategory.parentId === category.id
            );
            return { ...category, subcategories };
          });
        }
      );
    };

    const loadProduct = async () => {
      await ApiService.get(
        `${process.env.VUE_APP_API_URL}/v1/products/${productId}`
      ).then((response) => {
        product.value = response.data.data;
      });
    };
    onBeforeMount(async () => {
      try {
        ApiService.setHeader();
        loadCategories();
        loadProduct();
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    });

    onMounted(() => {
      setCurrentPageBreadcrumbs("Edit Product", [
        "Product Management",
        "Product Listing",
      ]);
    });

    return {
      handleSubmit,
      rules,
      submitButton,
      errors,
      clearError,
      categories,
      selectedCategoryId,
      product,
      handleDelete,
    };
  },
});
</script>
