<template>
  <div class="card">
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">
        <h5>User Listing</h5>
      </div>
      <!--begin::Card title-->
      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Toolbar-->
        <el-form
            @submit.prevent="submit()"
            :model="formData"
            :rules="rules"
            ref="formRef"
          >
           
            <!--begin::Input group-->
            <div class="fv-row dateRange">
              <!--begin::Input-->
              <el-form-item prop="name">
                <el-date-picker type="daterange" start-placeholder="Start Date"
        end-placeholder="End Date" v-model="formData.dateRange">
                </el-date-picker>
              </el-form-item>
              <!--end::Input-->
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
        
        <template v-slot:cell-dateOfPurchase="{ row: customer }">
          {{ customer.dateOfPurchase }}
        </template>
        <template v-slot:cell-purchasedInfo="{ row: customer }">
          <a href="#" class="text-gray-600 text-hover-primary mb-1">
            {{ customer.purchasedInfo }}
          </a>
        </template>
        <template v-slot:cell-dateOfCreation="{ row: customer }">
          {{ customer.dateOfCreation }}
        </template>
        <template v-slot:cell-invoice="{ row: customer }">
          <span class="text-primary">{{ customer.invoice }}</span>
        </template>
        <template v-slot:cell-totalValue="{ row: customer }">
          {{ customer.totalValue }}
        </template>
        <template v-slot:cell-remark="{ row: customer }">
          {{ customer.remark }}
        </template>
        <template v-slot:cell-detail="{ row: customer }">
          <div
            class="btn btn-sm btn-light text-gray-600 btn-active-light-primary"
            >{{customer.detail }}
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
import Swal from "sweetalert2/dist/sweetalert2.js";

interface ICustomer {
  id: number;
  dateOfPurchase: string;
  purchasedInfo: string;
  dateOfCreation: string;
  invoice: string;
  totalValue: string;
  remark: string;
  detail:string;
}

export default defineComponent({
  name: "user-management",
  components: {
    Datatable,
  },
  setup() {
    const checkedCustomers = ref([]);
    const tableHeader = ref([
      {
        name: "Date of Purchased",
        key: "dateOfPurchase",
        sortable: true,
      },
      {
        name: "Purchased Information",
        key: "purchasedInfo",
        sortable: true,
      },
      {
        name: "Date of Creation",
        key: "dateOfCreation",
        sortable: true,
      },
      {
        name: "Invoice",
        key: "invoice",
        sortable: true,
      },
      {
        name: "Total Value (RM)",
        key: "totalValue",
        sortable: true,
      },
      {
        name: "Remark",
        key: "remark",
        sortable: true,
      },
      {
        name: "Download Invoice",
        key: "detail",
      },
    ]);

    const customers = ref<Array<ICustomer>>([
      {
        id: Math.floor(Math.random() * 99999) + 1,
        dateOfPurchase: "17/10/2022 12:38:57",
        purchasedInfo: "Attestation of Company Good Standing",
        dateOfCreation: "1-Dec-2022",
        invoice: "BDSB0006924947",
        totalValue: "15.00",
        remark:"FPX Payment",
        detail:"view",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        dateOfPurchase: "17/10/2022 12:38:57",
        purchasedInfo: "Attestation of Company Good Standing",
        dateOfCreation: "1-Dec-2022",
        invoice: "BDSB0006924947",
        totalValue: "15.00",
        remark:"FPX Payment",
        detail:"view",
      },
      {
        id: Math.floor(Math.random() * 99999) + 1,
        dateOfPurchase: "17/10/2022 12:38:57",
        purchasedInfo: "Attestation of Company Good Standing",
        dateOfCreation: "1-Dec-2022",
        invoice: "BDSB0006924947",
        totalValue: "15.00",
        remark:"FPX Payment",
        detail:"view",
      },
    ]);
    const initCustomers = ref<Array<ICustomer>>([]);

    onMounted(() => {
      MenuComponent.reinitialization();
      initCustomers.value.splice(0, customers.value.length, ...customers.value);

      setCurrentPageBreadcrumbs("User Management", []);
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
      paymentType: "",
    });

    const rules = ref({
      dateRange: [
        {
          required: true,
          message: "Date range is required",
          trigger: "change",
        },
      ],
    });

    const submit = () => {
      if (!formRef.value) {
        return;
      }

      formRef.value.validate((valid) => {
        if (valid) {
          loading.value = true;

          setTimeout(() => {
            loading.value = false;

            Swal.fire({
              text: "Form has been successfully submitted!",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              customClass: {
                confirmButton: "btn btn-primary",
              },
            }).then(() => {
              window.location.reload();
            });
          }, 2000);
        } else {
          Swal.fire({
            text: "Sorry, looks like there are some errors detected, please try again.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
          return false;
        }
      });
    };
    return {
      customers,
      tableHeader,
      search,
      searchItems,
      checkedCustomers,
      ...toRefs(state),
      formData,
      rules,
      submit,
      formRef,
      loading,
    };
  },
});
</script>
