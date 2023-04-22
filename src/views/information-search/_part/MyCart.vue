<template>
    <div class="card">
        <div class="breadCrumb_btn d-flex justify-content-end pt-6 px-9">
            <div
              class="btn btn-sm btn-light px-6 me-2"
              >
                  Add Product
            </div>
            <div
              class="btn btn-sm btn-success px-6 text-gray-100"
              >
              Checkout
            </div>
        </div>
      <div class="card-header border-0 pt-6">
        <div class="card-title">
          <h5>Billing History</h5>
        </div>
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
        <template v-slot:cell-description="{ row: customer }">
            <span class="text-primary">{{ customer.description }}</span>
        </template>
          <template v-slot:cell-amount="{ row: customer }">
            {{ customer.amount }}
          </template>
          <template v-slot:cell-servicefee="{ row: customer }">
          {{ customer.servicefee }}
        </template>
        <template v-slot:cell-ctcfee="{ row: customer }">
           {{ customer.ctcfee }}
        </template>
        <template v-slot:cell-price="{ row: customer }">
         {{ customer.price }}
        </template>
        <template v-slot:cell-cancel="{ row: customer }">
            <div
              class="btn btn-sm btn-light text-gray-600 btn-active-light-primary"
              ><router-link
                  to="/product-management/AddCouponManagement"
                  class="menu-link px-3 text-gray-600"
                  >{{customer.cancel }}</router-link
                >
            </div>
            
          </template>
        </Datatable>

        <div class="row justify-content-end mt-20">
                <div class="col-md-4">
                  <div class="d-flex align-items-center justify-content-between">
                    <p class="text-gray-600">Total Document</p>
                    <p class="text-gray-600">2</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <p class="text-gray-600">Total (exclude tax)</p>
                    <p class="text-gray-600">RM30.00</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <p class="text-gray-600">SST @ 6% for Service Fee</p>
                    <p class="text-gray-600">RM1.80</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <p class="text-gray-600">Total Amount</p>
                    <p class="text-gray-600">RM31.80</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-end mt-3">
                    <router-link to="/information-search/CartPayment">
                        <button class="btn btn-sm btn-primary">Proceed to payment</button>
                    </router-link>
                  </div>
                </div>
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
    description: string;
    amount: string;
    servicefee: string;
    ctcfee: string;
    price: string;
    cancel:string;
  }
  
  export default defineComponent({
    name: "my-cart",
    components: {
      Datatable,
    },
    setup() {
      const checkedCustomers = ref([]);
      const tableHeader = ref([
        {
          name: "Entity Number / Name",
          key: "name",
          sortable: true,
        },
        {
          name: "Description",
          key: "description",
          sortable: true,
        },
        {
          name: "Amount (RM)",
          key: "amount",
          sortable: true,
        },
        {
            name: "Service Fee (RM)",
            key: "servicefee",
          sortable: true,
        },
        {
            name: "CTC Service Fee (RM)",
            key: "ctcfee",
          sortable: true,
        },
        {
          name: "Total Price Fee (RM)",
          key: "price",
          sortable: true,
        },
        {
          name: "Cancel",
          key: "cancel",
        },
      ]);
  
      const customers = ref<Array<ICustomer>>([
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "202101037630 (1437930-M) / MEGAH HOLDINGS SDN. BHD.",
          description: "Business Profile",
          amount: "10.00",
          servicefee: "5.00",
          ctcfee: "0.00",
          price: "15.00",
          cancel:"Delete",
        },
        {
          id: Math.floor(Math.random() * 99999) + 1,
          name: "202101037630 (1437930-M) / MEGAH HOLDINGS SDN. BHD.",
          description: "Business Profile",
          amount: "10.00",
          servicefee: "5.00",
          ctcfee: "0.00",
          price: "15.00",
          cancel:"Delete",
        },
        
      ]);
      const initCustomers = ref<Array<ICustomer>>([]);
  
      onMounted(() => {
        MenuComponent.reinitialization();
        initCustomers.value.splice(0, customers.value.length, ...customers.value);
  
        setCurrentPageBreadcrumbs("My Cart", []);
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
  