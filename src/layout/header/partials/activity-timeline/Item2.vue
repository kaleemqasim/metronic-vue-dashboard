<template>
  <div class="timeline-item">
    <!--begin::Timeline line-->
    <div class="timeline-line w-40px"></div>
    <!--end::Timeline line-->

    <!--begin::Timeline icon-->
    <div class="timeline-icon symbol symbol-circle symbol-40px me-4">
      <div class="symbol-label bg-light">
        <span class="svg-icon svg-icon-2 svg-icon-gray-500">
          <inline-svg src="media/icons/duotune/communication/com003.svg" />
        </span>
      </div>
    </div>
    <!--end::Timeline icon-->

    <!--begin::Timeline content-->
    <div class="timeline-content mb-10 mt-n1">
      <!--begin::Timeline heading-->
      <div class="pe-3 mb-5">
        <!--begin::Title-->
        <div class="fs-5 fw-bold mb-2">
          Search Entity
        </div>
        <!--end::Title-->

        <!--begin::Description-->
        <div class="mt-1 fs-6">
          <!--begin::Info-->
          <div class="text-muted me-2 fs-7">2:23 PM</div>
          <!--end::Info-->
        </div>
        <!--end::Description-->
      </div>
      <!--end::Timeline heading-->

      <!--begin::Timeline details-->
      <div class="overflow-auto">
        <!--begin::Record-->
        <div
          class="
            d-flex
            align-items-center
            justify-content-between
            border border-dashed border-gray-300
            rounded
            min-w-750px
            px-7
            py-3
          "
        >
          <!--begin::Title-->
          <a
            href="#"
            class="
              fs-5
              text-dark text-hover-primary
              fw-bold
              w-375px
              min-w-200px
            "
            >ABC Trading</a
          >
          <!--end::Title-->
        </div>
        <!--end::Record-->
      </div>
      <!--end::Timeline details-->
    </div>
    <!--end::Timeline content-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "",
  components: {},
});
</script>
