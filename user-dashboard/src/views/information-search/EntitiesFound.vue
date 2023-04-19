<template>
    <div class="card">
      <div class="p-6 pt-10">
        <div class="row mx-auto">
          <div class="col-md-9 mx-auto">
            <div class="d-flex">
              <input type="text" class="form-control form-control-solid w-100 text-center"
                placeholder="Please enter Company, Business or Audit Firm info to search." />
              <div class="entityDropdown ps-3">
                <select class="form-select border-0 text-muted" aria-label="Select example">
                  <option>All Entities</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="card-header border-0 pt-6 mt-20">
        <!--begin::Card title-->
        <div class="card-title">
          <h5>Entities Found</h5>
        </div>
      </div>
      <div class="card-body pt-0">
        <Datatable
          :table-data="customers"
          :table-header="tableHeader"
          :enable-items-per-page-dropdown="true"
        >
          
        <template v-slot:cell-number="{ row: customer }">
                {{ customer.number }}
          </template>
          <template v-slot:cell-name="{ row: customer }">
            <span class="text-primary">{{ customer.name }}</span>
        </template>
          <template v-slot:cell-type="{ row: customer }">
           {{ customer.type }}
          </template>
        </Datatable>
      </div>
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
    number: string;
    type: string;
  }
  
  export default defineComponent({
    name: "entities-found",
    components: {
      Datatable,
    },
    setup() {
      const checkedCustomers = ref([]);
      const tableHeader = ref([
        {
          name: "Number",
          key: "number",
          sortable: true,
        },
        {
          name: "Name",
          key: "name",
          sortable: true,
        },
        {
          name: "Type",
          key: "type",
          sortable: true,
        },
      ]);
  
      const customers = ref<Array<ICustomer>>([
        {
          id: Math.floor(Math.random() * 99999) + 1,
          number: "20230010121",
          name: "Megah Damai Sdn Bhd",
          type: "Company",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          number: "20230010121",
          name: "Megah Damai Sdn Bhd",
          type: "Company",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          number: "20230010121",
          name: "Megah Damai Sdn Bhd",
          type: "Company",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          number: "20230010121",
          name: "Megah Damai Sdn Bhd",
          type: "Company",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          number: "20230010121",
          name: "Megah Damai Sdn Bhd",
          type: "Company",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          number: "20230010121",
          name: "Megah Damai Sdn Bhd",
          type: "Company",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          number: "20230010121",
          name: "Megah Damai Sdn Bhd",
          type: "Company",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          number: "20230010121",
          name: "Megah Damai Sdn Bhd",
          type: "Company",
        },
      ]);
      const initCustomers = ref<Array<ICustomer>>([]);
  
      onMounted(() => {
        MenuComponent.reinitialization();
        initCustomers.value.splice(0, customers.value.length, ...customers.value);
  
        setCurrentPageBreadcrumbs("Entities found", ["Product Management"]);
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
    