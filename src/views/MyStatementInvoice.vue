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
        <div class="row mb-5">
        <div class="col-md-10">
          <div class="d-flex align-items-center">
            <div class="name fs-4 fw-bold min-w-200px me-2">
                Surah
            </div>
            <div class="d-flex align-items-center position-relative w-100">
                <input type="text" class="form-control form-control-solid w-100 text-center"
                  placeholder="" />
            <span class="svg-icon svg-icon-1 position-absolute ms-6" style="right:15px">
              <inline-svg src="media/icons/duotune/general/gen021.svg" />
            </span>
          </div>
          </div>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-md-5">
          <div class="d-flex align-items-center">
            <div class="name fs-4 fw-bold min-w-200px me-2">
                Ayat Mula
            </div>
                <input type="text" class="form-control form-control-solid w-100 text-center"
                  placeholder="" />
          </div>
        </div>
        <div class="col-md-5">
          <div class="d-flex align-items-center">
            <div class="name fs-4 fw-bold min-w-200px me-2">
                Ayat Akhir
            </div>
            <input type="text" class="form-control form-control-solid w-100 text-center"
                  placeholder="" />
          </div>
        </div>
        <div class="col-md-2">
        <button class="btn btn-sm btn-success w-100 h-100">Tambah</button>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-md-10">
          <div class="d-flex align-items-center">
            <div class="name fs-4 fw-bold min-w-200px me-2">
                Surah
            </div>
            <div class="d-flex align-items-center position-relative w-100">
                <input type="text" class="form-control form-control-solid w-100 text-center"
                  placeholder="" />
            <span class="svg-icon svg-icon-1 position-absolute ms-6" style="right:15px">
              <inline-svg src="media/icons/duotune/general/gen021.svg" />
            </span>
          </div>
          </div>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-md-5">
          <div class="d-flex align-items-center">
            <div class="name fs-4 fw-bold min-w-200px me-2">
                Ayat Mula
            </div>
                <input type="text" class="form-control form-control-solid w-100 text-center"
                  placeholder="" />
          </div>
        </div>
        <div class="col-md-5">
          <div class="d-flex align-items-center">
            <div class="name fs-4 fw-bold min-w-200px me-2">
                Ayat Akhir
            </div>
            <input type="text" class="form-control form-control-solid w-100 text-center"
                  placeholder="" />
          </div>
        </div>
        <div class="col-md-2">
        <button class="btn btn-sm btn-success w-100 h-100">Tambah</button>
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
    name: "my-statement",
    components: {
  
    },
    setup() {
  
      onMounted(() => {
        MenuComponent.reinitialization();
  
        setCurrentPageBreadcrumbs("My Statement", []);
      });
  
      return {
  
      };
    },
  });
  </script>
    