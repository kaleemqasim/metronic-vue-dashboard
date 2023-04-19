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
      <div class="card-header border-0 pt-6">
        <!--begin::Card title-->
        <div class="card-title">
          <h5>My Order</h5>
        </div>
        <!--begin::Card title-->
        <!--begin::Card toolbar-->
        <div class="card-toolbar">
          <!--begin::Toolbar-->
          <div class="position-relative align-items-center d-flex date">
                              <!--begin::Datepicker-->
                              <div class="text-muted me-2">
                      Start Date:
                    </div>
                              <el-form-item prop="dueDate" class="mb-0 me-2">
                    <el-date-picker
                      placeholder="Today: Aug 11"
                      name="dueDate"
                    />
                  </el-form-item>
                  <!--end::Datepicker-->
              </div>
              <div class="position-relative align-items-center d-flex date">
                  <!--begin::Datepicker-->
                  <div class="text-muted me-2">
                      End Date:
                    </div>
                  <el-form-item prop="dueDate" class="mb-0">
                    <el-date-picker
                      placeholder="Today: Aug 11"
                      name="dueDate"
                    />
                  </el-form-item>
                  <!--end::Datepicker-->
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
        <template v-slot:cell-info="{ row: customer }">
            {{ customer.info }}
        </template>
          <template v-slot:cell-invoice="{ row: customer }">
            <span class="text-primary">{{ customer.invoice }}</span>
          </template>
          <template v-slot:cell-tvalue="{ row: customer }">
          {{ customer.tvalue }}
          </template>
          <template v-slot:cell-remark="{ row: customer }">
          {{ customer.remark }}
          </template>
          <template v-slot:cell-download="{ row: customer }">
            <div
              class="btn btn-sm btn-light text-gray-600 btn-active-light-primary"
              ><router-link
                  to="/my-statement-invoice"
                  class="menu-link px-3 text-gray-600"
                  >{{customer.download }}</router-link
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
    info: string;
    invoice: string;
    tvalue: string;
    remark: string;
    download:string;
  }

  interface NewAddressData {
  targetTitle: string;
  assign: string;
  dueDate: string;
  targetdetails: string;
  tags: Array<string>;
}
  
  export default defineComponent({
    name: "my-order",
    components: {
      Datatable,
    },
    setup() {
      const checkedCustomers = ref([]);
      const tableHeader = ref([
        {
          name: "Date of Purchased",
          key: "name",
          sortable: true,
        },
        {
          name: "Purchased Information",
          key: "info",
          sortable: true,
        },
        {
          name: "Invoice",
          key: "invoice",
          sortable: true,
        },
        {
          name: "Total Value (RM)",
          key: "tvalue",
          sortable: true,
        },
        {
          name: "Remark",
          key: "remark",
          sortable: true,
        },
        {
          name: "Download Invoice",
          key: "download",
        },
      ]);
  
      const customers = ref<Array<ICustomer>>([
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "17/10/2022 12:38:57",
          info: "Attestation of Company Good Standing",
          invoice: "BDSB0006924947",
           tvalue: "15.00",
           remark: "FPX Payment",
          download:"View",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "17/10/2022 12:38:57",
          info: "Attestation of Company Good Standing",
          invoice: "BDSB0006924947",
           tvalue: "15.00",
           remark: "FPX Payment",
          download:"View",
        },

      ]);
      const initCustomers = ref<Array<ICustomer>>([]);
  
      onMounted(() => {
        MenuComponent.reinitialization();
        initCustomers.value.splice(0, customers.value.length, ...customers.value);
  
        setCurrentPageBreadcrumbs("My Order", []);
      });
  
      const targetData = ref<NewAddressData>({
      targetTitle: "",
      assign: "",
      dueDate: "",
      targetdetails: "",
      tags: ["important", "urgent"],
    });
    const rules = ref({
      targetTitle: [
        {
          required: true,
          message: "Please input Activity name",
          trigger: "blur",
        },
      ],
      assign: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      dueDate: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      tags: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
    });
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
        targetData,
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
  