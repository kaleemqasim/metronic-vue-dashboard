<template>
  <!--begin::Toolbar wrapper-->
  <div class="d-flex align-items-stretch flex-shrink-0">
    <div class="d-flex align-items-center ms-1 ms-lg-3">
      <!--begin::Menu wrapper-->
      <div
        class="
          btn btn-icon btn-active-light-primary
          position-relative
          w-30px
          h-30px
          w-md-40px
          h-md-40px
        "
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
        data-kt-menu-flip="bottom"
      >
      <span class="svg-icon svg-icon-1">
          <inline-svg src="media/icons/duotune/general/gen021.svg" />
        </span>
      </div>
      <ActivityDrawer></ActivityDrawer>
      </div>
      <div class="d-flex align-items-center ms-1 ms-lg-3">
      <!--begin::Menu wrapper-->
      <div
        class="
          btn btn-icon btn-active-light-primary
          position-relative
          w-30px
          h-30px
          w-md-40px
          h-md-40px
        "
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
        data-kt-menu-flip="bottom"
      >
      <span class="svg-icon svg-icon-1">
          <inline-svg src="media/icons/duotune/general/bell.svg" />
        </span>
      </div>
      <KTNotificationsMenu></KTNotificationsMenu>
      </div>
    <!--begin::Setting-->
    <div class="d-flex align-items-center ms-1 ms-lg-3">
      <!--begin::drawer toggle-->
      <div
        class="
          btn btn-icon btn-active-light-primary
          w-30px
          h-30px
          w-md-40px
          h-md-40px
        "
        id="kt_activities_toggle"
      >
        <span class="svg-icon svg-icon-1">
          <inline-svg src="media/icons/duotune/general/setting.svg" />
        </span>
      </div>
      <!--end::drawer toggle-->
    </div>
    <div class="d-flex align-items-center ms-1 ms-lg-3">
      <!--begin::drawer toggle-->
      <div
        class="
          btn btn-icon btn-active-light-primary
          w-30px
          h-30px
          w-md-40px
          h-md-40px
        "
        id="kt_activities_toggle"
      >
        <span class="svg-icon svg-icon-1">
          <inline-svg src="media/icons/duotune/general/cart.svg" />
        </span>
      </div>
      <!--end::drawer toggle-->
    </div>
    <div class="d-flex align-items-center ms-1 ms-lg-3">
      <!--begin::drawer toggle-->
      <div
        class="
          btn btn-icon btn-active-light-primary
          w-30px
          h-30px
          w-md-40px
          h-md-40px
        "
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
        data-kt-menu-flip="bottom"
      >
          <img src="media/flags/united-states.svg" class="header_country" alt="flag">
      </div>
      <FlagsMenu></FlagsMenu>
      <!--end::drawer toggle-->
    </div>
    <!--end::Setting-->

    <!--begin::Quick links-->
    <div class="d-flex align-items-center ms-1 ms-lg-3">
      <!--begin::Menu-->
      <div
        class="
          btn btn-icon btn-active-light-primary
          w-30px
          h-30px
          w-md-40px
          h-md-40px
        "
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
        data-kt-menu-flip="bottom"
      >
        <span class="svg-icon svg-icon-1">
          <inline-svg src="media/icons/duotune/general/box.svg" />
        </span>
      </div>
      <KTQuickLinksMenu></KTQuickLinksMenu>
      <!--end::Menu-->
    </div>
    <!--end::Quick links-->

    <!--begin::User-->
    <div
      class="d-flex align-items-center ms-1 ms-lg-3"
      id="kt_header_user_menu_toggle"
    >
      <!--begin::Menu-->
      <div
        class="cursor-pointer symbol symbol-30px symbol-md-40px"
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
        data-kt-menu-flip="bottom"
      >
        <img src="media/avatars/150-26.jpg" alt="metronic" />
      </div>
      <KTUserMenu></KTUserMenu>
      <!--end::Menu-->
    </div>
    <!--end::User -->

    <!--begin::Heaeder menu toggle-->
    <div
      class="d-flex align-items-center d-lg-none ms-2 me-n3"
      title="Show header menu"
    >
      <div
        class="btn btn-icon btn-active-light-primary"
        id="kt_header_menu_mobile_toggle"
      >
        <span class="svg-icon svg-icon-1">
          <inline-svg src="media/icons/duotune/text/txt001.svg" />
        </span>
      </div>
    </div>
    <!--end::Heaeder menu toggle-->
  </div>
  <!--end::Toolbar wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KTNotificationsMenu from "@/layout/header/partials/NotificationsMenu.vue";
import ActivityDrawer from "@/layout/header/partials/ActivityDrawer.vue";
import KTQuickLinksMenu from "@/layout/header/partials/QuickLinksMenu.vue";
import FlagsMenu from "@/layout/header/partials/FlagsMenu.vue";
import KTUserMenu from "@/layout/header/partials/UserMenu.vue";

export default defineComponent({
  name: "topbar",
  components: {
    KTNotificationsMenu,
    ActivityDrawer,
    KTQuickLinksMenu,
    FlagsMenu,
    KTUserMenu,
  },
});
</script>
