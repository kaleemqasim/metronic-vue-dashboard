<template>
  <!--begin::Wrapper-->
  <!--begin::Form-->
  <Form
    class="form w-100"
    id="kt_login_signin_form"
    @submit="onSubmitLogin"
    :validation-schema="login"
  >
    <!--begin::Heading-->
    <div class="text-center mb-10">
      <!--begin::Title-->
      <h1 class="text-dark mb-3">
        Infodata <br />
        Company and Business Information Data Intelligence Platform
      </h1>
      <!--end::Title-->
    </div>
    <!--begin::Heading-->

    <!--begin::Input group-->
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="form-label fs-6 fw-bolder text-dark">Email</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        class="form-control form-control-lg form-control-solid"
        type="text"
        name="email"
        autocomplete="off"
      />
      <!--end::Input-->
      <div class="fv-plugins-message-container">
        <div class="fv-help-block">
          <ErrorMessage name="email" />
        </div>
      </div>
    </div>
    <!--end::Input group-->

    <!--begin::Input group-->
    <div class="fv-row mb-10">
      <!--begin::Wrapper-->
      <div class="d-flex flex-stack mb-2">
        <!--begin::Label-->
        <label class="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
        <!--end::Label-->
      </div>
      <!--end::Wrapper-->

      <!--begin::Input-->
      <Field
        class="form-control form-control-lg form-control-solid"
        type="password"
        name="password"
        autocomplete="off"
      />
      <!--end::Input-->
      <div class="fv-plugins-message-container">
        <div class="fv-help-block">
          <ErrorMessage name="password" />
        </div>
      </div>
    </div>
    <!--end::Input group-->

    <!--begin::Actions-->
    <div class="text-center">
      <!--begin::Submit button-->
      <div class="row">
        <div class="col-lg-4">
          <button
            type="submit"
            ref="submitButton"
            id="kt_sign_in_submit"
            class="btn btn-lg btn-primary w-100 mb-5"
          >
            <span class="indicator-label"> Sign In </span>

            <span class="indicator-progress">
              Please wait...
              <span
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span>
          </button>
        </div>
        <div class="col-lg-8">
          <a
            href="#"
            class="btn btn-flex flex-center btn-light btn-lg w-100 mb-5"
          >
            <img
              alt="Logo"
              src="media/svg/brand-logos/google-icon.svg"
              class="h-20px me-3"
            />
            Sign in with Google
          </a>
        </div>
      </div>
    </div>
    <!--end::Actions-->
  </Form>
  <!--end::Form-->
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import { Actions, Roles } from "@/store/enums/StoreEnums";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import * as Yup from "yup";

export default defineComponent({
  name: "sign-in",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const submitButton = ref<HTMLElement | null>(null);

    //Create form validation object
    const login = Yup.object().shape({
      email: Yup.string().email().required().label("Email"),
      password: Yup.string().min(4).required().label("Password"),
    });

    //Form submit function
    const onSubmitLogin = (values) => {
      // Clear existing errors
      store.dispatch(Actions.LOGOUT);

      if (submitButton.value) {
        // Activate indicator
        submitButton.value.setAttribute("data-kt-indicator", "on");
      }

      // Dummy delay
      setTimeout(() => {
        // Send login request
        store
          .dispatch(Actions.ADMIN_LOGIN, values)
          .then(() => {
            Swal.fire({
              text: "All is cool! Now you can access dashboard",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(function () {
              // Go to page after successfully login
              let userRole = store.getters.currentUser.role;
              if (userRole == Roles.ADMIN || userRole == Roles.SUPER_ADMIN) {
                localStorage.setItem("user_type", "admin");
                router.push({ name: "admin-dashboard" });
              }
            });
          })
          .catch(() => {
            const errors = store.getters.getErrors;

            const error = errors && Array.isArray(errors) ? errors[0] : errors;

            Swal.fire({
              text: error,
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: "Try again!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-danger",
              },
            });
          });

        //Deactivate indicator
        submitButton.value?.removeAttribute("data-kt-indicator");
      }, 2000);
    };

    return {
      onSubmitLogin,
      login,
      submitButton,
    };
  },
});
</script>
