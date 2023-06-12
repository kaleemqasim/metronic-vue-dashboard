<template>
  <!--begin::Wrapper-->
  <!--begin::Form-->
  <Form
    class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
    novalidate="novalidate"
    @submit="onSubmitRegister"
    id="kt_login_signup_form"
    :validation-schema="registration"
  >
    <!--begin::Heading-->
    <div class="mb-10 text-center">
      <!--begin::Title-->
      <h1 class="text-dark mb-3">iNFODATA Registration forms</h1>
      <!--end::Title-->
    </div>
    <!--begin::Input group-->
    <div class="row fv-row mb-7">
      <!--begin::Col-->
      <div class="col-xl-12">
        <label class="form-label fw-bolder text-dark fs-6">Name</label>
        <Field
          class="form-control form-control-lg form-control-solid"
          type="text"
          placeholder=""
          name="name"
          autocomplete="off"
          @input="clearError('name')"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="name" />
          </div>
          <div class="fv-help-block" v-if="errors.name">
            <span class="fv-help-block__text"> {{ errors.name }} </span>
          </div>
        </div>
      </div>
      <!--end::Col-->
    </div>
    <!--end::Input group-->

    <!--begin::Input group-->
    <div class="fv-row mb-7">
      <label class="form-label fw-bolder text-dark fs-6">Email</label>
      <Field
        class="form-control form-control-lg form-control-solid"
        type="email"
        placeholder=""
        name="email"
        autocomplete="off"
        @input="clearError('email')"
      />
      <div class="fv-plugins-message-container">
        <div class="fv-help-block">
          <ErrorMessage name="email" />
        </div>
        <div class="fv-help-block" v-if="errors.email">
          <span class="fv-help-block__text"> {{ errors.email }} </span>
        </div>
      </div>
    </div>
    <!--end::Input group-->

    <!--begin::Input group-->

    <!--begin::Input group-->
    <div class="fv-row mb-7">
      <label class="form-label fw-bolder text-dark fs-6">Telephone</label>
      <Field
        class="form-control form-control-lg form-control-solid"
        type="number"
        placeholder=""
        name="phone"
        autocomplete="off"
        @input="clearError('phone')"
      />
      <div class="fv-plugins-message-container">
        <div class="fv-help-block">
          <ErrorMessage name="phone" />
        </div>
        <div class="fv-help-block" v-if="errors.phone">
          <span class="fv-help-block__text"> {{ errors.phone }} </span>
        </div>
      </div>
    </div>
    <!--end::Input group-->

    <!--begin::Input group-->
    <div class="mb-10 fv-row" data-kt-password-meter="true">
      <!--begin::Wrapper-->
      <div class="mb-1">
        <!--begin::Label-->
        <label class="form-label fw-bolder text-dark fs-6"> Password </label>
        <!--end::Label-->

        <!--begin::Input wrapper-->
        <div class="position-relative mb-3">
          <Field
            class="form-control form-control-lg form-control-solid"
            type="password"
            placeholder=""
            name="password"
            autocomplete="off"
          />
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="password" />
            </div>
          </div>
        </div>
        <!--end::Input wrapper-->
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Input group--->

    <!--begin::Input group-->
    <div class="fv-row mb-5">
      <label class="form-label fw-bolder text-dark fs-6"
        >Confirm Password</label
      >
      <Field
        class="form-control form-control-lg form-control-solid"
        type="password"
        placeholder=""
        name="password_confirmation"
        autocomplete="off"
      />
      <div class="fv-plugins-message-container">
        <div class="fv-help-block">
          <ErrorMessage name="password_confirmation" />
        </div>
      </div>
    </div>
    <!--end::Input group-->

    <!--begin::Actions-->
    <div class="text-center">
      <button
        id="kt_sign_up_submit"
        ref="submitButton"
        type="submit"
        class="btn btn-lg btn-primary w-50"
      >
        <span class="indicator-label"> SignUp </span>
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
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import * as Yup from "yup";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import Swal from "sweetalert2/dist/sweetalert2.min.js";

export default defineComponent({
  name: "sign-up",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const submitButton = ref<HTMLElement | null>(null);
    const errors = computed(() => {
      return store.getters.getErrors;
    });
    const registration = Yup.object().shape({
      name: Yup.string().required().min(5).label("Name"),
      email: Yup.string().min(4).required().email().label("Email"),
      phone: Yup.string().min(11).required().label("Phone"),
      password: Yup.string()
        .min(5)
        .required()
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{5,}$/,
          "Password must contain at least one number, one uppercase letter, and one special character"
        )
        .label("Password"),
      password_confirmation: Yup.string()
        .min(4)
        .required()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .label("Password Confirmation"),
    });
    const clearError = (fieldName) => {
      store.commit(Mutations.SET_ERROR, { [fieldName]: "" });
    };
    const onSubmitRegister = (values) => {
      // Clear existing errors
      store.dispatch(Actions.LOGOUT);
      store.commit(Mutations.SET_ERROR, {});

      // Activate indicator
      submitButton.value?.setAttribute("data-kt-indicator", "on");

      // Dummy delay
      setTimeout(() => {
        // Send login request
        store
          .dispatch(Actions.REGISTER, values)
          .then(() => {
            Swal.fire({
              text: "All is cool! Now you submit this form",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(function () {
              // Go to page after successfully login
              if (store.getters.isAuthenticated) {
                router.push({ name: "dashboard" });
              }
            });
          })
          .catch(() => {
            // Swal.fire({
            //   text: store.getters.getErrors[0],
            //   icon: "error",
            //   buttonsStyling: false,
            //   confirmButtonText: "Try again!",
            //   customClass: {
            //     confirmButton: "btn fw-bold btn-light-danger",
            //   },
            // });
          });

        submitButton.value?.removeAttribute("data-kt-indicator");
      }, 2000);
    };

    return {
      registration,
      onSubmitRegister,
      submitButton,
      errors,
      clearError,
    };
  },
});
</script>
