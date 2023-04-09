<template>
    <div class="card">
        <div class="breadCrumb_btn d-flex justify-content-end pt-6 px-9">
            <div
              class="btn btn-sm btn-success"
              >
              <router-link
                  to="/product-management/AddProductListing"
                  class="menu-link px-3 text-gray-100"
                  >
                  Add Product
                  </router-link
                >
            </div>
        </div>
      <div class="card-header border-0 pt-6">
        <!--begin::Card title-->
        <div class="card-title">
          <h5>Product Listing</h5>
        </div>
        <!--begin::Card title-->
        <!--begin::Card toolbar-->
        <div class="card-toolbar">
          <!--begin::Toolbar-->
          <el-form
              @submit.prevent="submit()"
              :model="formData"
              ref="formRef"
            >
             
              <!--begin::Input group-->
             <div class="d-flex align-center">
              <div class="fv-row pe-3 w-200 px">
                <!--begin::Input-->
                <el-select  v-model="formData.exportFormat" class="d-block" placeholder="Search by Category">
                  <el-option value="excel" key="excel" label="Excel" />
                  <el-option value="pdf" key="pdf" label="PDF" />
                  <el-option value="cvs" key="cvs" label="CVS" />
                  <el-option value="zip" key="zip" label="ZIP" />
                </el-select>
                <!--end::Input-->
              </div>
             </div>
              <!--end::Input group-->
            </el-form>
          <div
            v-if="checkedCustomers.length === 0"
            class="d-flex justify-content-end"
            data-kt-customer-table-toolbar="base"
          >
          <div class="d-flex align-items-center position-relative my-1">
            <span class="svg-icon svg-icon-1 position-absolute ms-6">
              <inline-svg src="media/icons/duotune/general/gen021.svg" />
            </span>
            <input
              type="text"
              v-model="search"
              @input="searchItems()"
              class="form-control form-control-solid w-125px ps-15"
              placeholder="Search"
            />
          </div>
          </div>
        </div>
        <!--end::Card toolbar-->
      </div>
      <div class="card-body pt-0">
        <Datatable
          :table-data="customers"
          :table-header="tableHeader"
          :enable-items-per-page-dropdown="true"
        >
          
          <template v-slot:cell-name="{ row: customer }">
            {{ customer.name }}
          </template>
          <template v-slot:cell-category="{ row: customer }">
            <a href="#" class="text-gray-600 text-hover-primary mb-1">
              {{ customer.category }}
            </a>
          </template>
          <template v-slot:cell-ssmFees="{ row: customer }">
            <span class="text-success">{{ customer.ssmFees }}</span>
          </template>
          <template v-slot:cell-serviceFees="{ row: customer }">
            <span class="text-primary"> {{ customer.serviceFees }}</span>
          </template>
          <template v-slot:cell-detail="{ row: customer }">
            <div
              class="btn btn-sm btn-light text-gray-600 btn-active-light-primary"
              ><router-link
                  to=""
                  class="menu-link px-3 text-gray-600"
                  >{{customer.detail }}</router-link
                >
            </div>
            
          </template>
        </Datatable>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive, toRefs, ref,onMounted } from "vue";
  import Datatable from "@/components/kt-datatable/Datatable.vue";
  import { MenuComponent } from "@/assets/ts/components";
  import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
  
  interface ICustomer {
    id: number;
    name: string;
    category: string;
    ssmFees: string;
    serviceFees: string;
    detail:string;
  }
  
  export default defineComponent({
    name: "product-listing",
    components: {
      Datatable,
    },
    setup() {
      const checkedCustomers = ref([]);
      const tableHeader = ref([
        {
          name: "Product Name",
          key: "name",
          sortable: true,
        },
        {
          name: "Category & Sub Category",
          key: "category",
          sortable: true,
        },
        {
          name: "SSM Fees",
          key: "ssmFees",
          sortable: true,
        },
        {
          name: "Service Fees",
          key: "serviceFees",
          sortable: true,
        },
        {
          name: "Detail",
          key: "detail",
        },
      ]);
  
      const customers = ref<Array<ICustomer>>([
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Company Profile",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Melody Macy",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Max Smith",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Sean Bean",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Brian Cox",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Mikaela Collins",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Francis Mitcham",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Olivia Wild",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Neil Owen",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Dan Wilson",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Emma Bold",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Ana Crown",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Company Profile",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Melody Macy",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Max Smith",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Sean Bean",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Brian Cox",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Mikaela Collins",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Francis Mitcham",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Olivia Wild",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Neil Owen",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Dan Wilson",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Emma Bold",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Ana Crown",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Company Profile",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Melody Macy",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Max Smith",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Sean Bean",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Brian Cox",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Mikaela Collins",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Francis Mitcham",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Olivia Wild",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Neil Owen",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Dan Wilson",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Emma Bold",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Ana Crown",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Company Profile",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Melody Macy",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Max Smith",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Sean Bean",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Brian Cox",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Mikaela Collins",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Francis Mitcham",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Olivia Wild",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Neil Owen",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Dan Wilson",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Emma Bold",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Ana Crown",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Company Profile",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Melody Macy",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Max Smith",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Sean Bean",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Brian Cox",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Mikaela Collins",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Francis Mitcham",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Olivia Wild",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Neil Owen",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Dan Wilson",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Emma Bold",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Ana Crown",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Company Profile",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Melody Macy",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Max Smith",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Sean Bean",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Brian Cox",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Mikaela Collins",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Francis Mitcham",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Olivia Wild",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Neil Owen",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Dan Wilson",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Emma Bold",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "Ana Crown",
          category: "ROC - Company Profile",
          ssmFees: "RM10.00",
          serviceFees: "RM5.00",
          detail:"view",
        },
      ]);
      const initCustomers = ref<Array<ICustomer>>([]);
  
      onMounted(() => {
        MenuComponent.reinitialization();
        initCustomers.value.splice(0, customers.value.length, ...customers.value);
  
        setCurrentPageBreadcrumbs("Product Listing", ["Product Management"]);
      });
  
  
      const search = ref<string>("");
      const searchItems = () => {
        customers.value.splice(0, customers.value.length, ...initCustomers.value);
        if (search.value !== "") {
          let results: Array<ICustomer> = [];
          for (let j = 0; j < customers.value.length; j++) {
            if (searchingFunc(customers.value[j], search.value)) {
              results.push(customers.value[j]);
            }
          }
          customers.value.splice(0, customers.value.length, ...results);
        }
      };
  
      const searchingFunc = (obj, value): boolean => {
        for (let key in obj) {
          if (!Number.isInteger(obj[key]) && !(typeof obj[key] === "object")) {
            if (obj[key].indexOf(value) != -1) {
              return true;
            }
          }
        }
        return false;
      };
      const formRef = ref<null | HTMLFormElement>(null);
      const loading = ref<boolean>(false);
      const state = reactive({
        shortcuts: [
          {
            text: "Last week",
            value: () => {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              return [start, end];
            },
          },
          {
            text: "Last month",
            value: () => {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              return [start, end];
            },
          },
          {
            text: "Last 3 months",
            value: () => {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              return [start, end];
            },
          },
        ],
      });
  
      const formData = ref({
        dateRange: [],
        exportFormat: "",
        paymentType: "",
      });
  
      const submit = () => {
        if (!formRef.value) {
          return;
        }
      };
      return {
        customers,
        tableHeader,
        search,
        searchItems,
        checkedCustomers,
        ...toRefs(state),
        formData,
        submit,
        formRef,
        loading,
      };
    },
  });
  </script>
  