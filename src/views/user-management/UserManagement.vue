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
          <div class="d-flex align-center">
            <div class="fv-row pe-3 w-125px">
              <!--begin::Input-->
              <el-select
                v-model="formData.exportFormat"
                placeholder="Last Week"
              >
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
              <!--end::Input-->
            </div>
            <div class="fv-row pe-3 w-125px">
              <!--begin::Input-->
              <el-select
                v-model="formData.exportFormat1"
                class="d-block"
                placeholder="All Orders"
              >
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
        v-if="customers.length > 0"
        :table-data="customers"
        :table-header="tableHeader"
        :enable-items-per-page-dropdown="true"
      >
        <template v-slot:cell-name="{ row: customer }">
          {{ customer.name }}
        </template>
        <template v-slot:cell-email="{ row: customer }">
          <a href="#" class="text-gray-600 text-hover-primary mb-1">
            {{ customer.email }}
          </a>
        </template>
        <template v-slot:cell-updatedAt="{ row: customer }">
          {{ customer.createdAt.human }}
        </template>
        <template v-slot:cell-phone="{ row: customer }">
          {{ customer.phone }}
        </template>
        <template v-slot:cell-role="{ row: customer }">
          <span class="text-success">{{ customer.role }}</span>
        </template>
        <template v-slot:cell-detail="{ row: customer }">
          <div
            class="btn btn-sm btn-light text-gray-600 btn-active-light-primary"
          >
            <router-link
              :to="`/user-management/user-management-details/${customer.id}`"
              class="menu-link px-3 text-gray-600"
              >{{ customer.detail }}</router-link
            >
          </div>
        </template>
      </Datatable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, onMounted } from "vue";
import Datatable from "@/components/kt-datatable/Datatable.vue";
import { MenuComponent } from "@/assets/ts/components";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import Swal from "sweetalert2/dist/sweetalert2.js";
import ApiService from "@/core/services/ApiService";
interface ICustomer {
  id: number;
  name: string;
  email: string;
  date: Array<string>;
  phone: string;
  role: string;
  detail: string;
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
        name: "Name",
        key: "name",
        sortable: true,
      },
      {
        name: "Email",
        key: "email",
        sortable: true,
      },
      {
        name: "Date",
        key: "updatedAt",
        sortable: true,
      },
      {
        name: "Phone",
        key: "phone",
        sortable: true,
      },
      {
        name: "Role",
        key: "role",
        sortable: true,
      },
      {
        name: "Detail",
        key: "detail",
      },
    ]);

    const customers = ref<Array<ICustomer>>([]);
    const initCustomers = ref<Array<ICustomer>>([]);
    const loading = ref<boolean>(false);
    loading.value = true;
    onMounted(async () => {
      MenuComponent.reinitialization();

      setCurrentPageBreadcrumbs("User Management", []);

      try {
        ApiService.setHeader();
        await ApiService.get(`${process.env.VUE_APP_API_URL}/v1/users`).then(
          ({ data }) => {
            loading.value = false;
            const userData = data.data; // Access the user data array
            // customers.value = userData; // Update the customers data property with the new data
            customers.value = userData.map((user) => ({
              id: user.id,
              name: user.name,
              email: user.email,
              createdAt: user.createdAt,
              phone: user.phone,
              role: user.role,
              detail: "Detail",
            }));
            initCustomers.value.splice(
              0,
              customers.value.length,
              ...customers.value
            );
          }
        );
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
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
      exportFormat1: "",
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
        console.log(valid);

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
