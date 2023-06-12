<template>
  <div class="card">
    <div class="breadCrumb_btn d-flex justify-content-end pt-6 px-9">
      <div class="btn btn-sm btn-success">
        <router-link
          to="/product-management/AddCouponManagement"
          class="menu-link px-3 text-gray-100"
        >
          Add Coupon
        </router-link>
      </div>
    </div>
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">
        <h5>Coupon Management</h5>
      </div>
      <!--begin::Card title-->
      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Toolbar-->
        <el-form @submit.prevent="submit()" :model="formData" ref="formRef">
          <!--begin::Input group-->
          <div class="d-flex align-center">
            <div class="fv-row pe-3 w-200 px">
              <!--begin::Input-->
              <el-select
                v-model="formData.exportFormat"
                class="d-block"
                placeholder="Search by Category"
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
          v-if="checkedcoupons.length === 0"
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
    <div class="card-body pt-0" v-if="coupons.length > 0">
      <Datatable
        :table-data="coupons"
        :table-header="tableHeader"
        :enable-items-per-page-dropdown="true"
      >
        <template v-slot:cell-name="{ row: coupon }">
          {{ coupon.type.name }}
        </template>
        <template v-slot:cell-couponCode="{ row: coupon }">
          <span class="text-success">{{ coupon.code }}</span>
        </template>
        <template v-slot:cell-price="{ row: coupon }">
          <span class="text-warning">{{ coupon.amount }}</span>
        </template>
        <template v-slot:cell-value="{ row: coupon }">
          <span class="text-success"> {{ coupon.quantity }}</span>
        </template>
        <template v-slot:cell-startDate="{ row: coupon }">
          <span class="text-info"> {{ formatDate(coupon.startAt) }}</span>
        </template>
        <template v-slot:cell-endDate="{ row: coupon }">
          <span class="text-info"> {{ formatDate(coupon.endAt) }}</span>
        </template>
        <template v-slot:cell-detail="{ row: coupon }">
          <div
            class="btn btn-sm btn-light text-gray-600 btn-active-light-primary"
          >
            <router-link
              :to="`/product-management/EditCouponManagement/${coupon.id}`"
              class="menu-link px-3 text-gray-600"
              >Edit</router-link
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
import ApiService from "@/core/services/ApiService";
import moment from "moment";
interface ICoupon {
  id: number;
  name: string;
  couponCode: string;
  price: string;
  value: string;
  startDate: string;
  endDate: string;
  detail: string;
}

export default defineComponent({
  name: "product-listing",
  components: {
    Datatable,
  },
  setup() {
    const checkedcoupons = ref([]);
    const tableHeader = ref([
      {
        name: "Product Name",
        key: "name",
        sortable: true,
      },
      {
        name: "Coupon Code",
        key: "couponCode",
        sortable: true,
      },
      {
        name: "Origin price",
        key: "price",
        sortable: true,
      },
      {
        name: "Value (RM)",
        key: "value",
        sortable: true,
      },
      {
        name: "Start Date",
        key: "startDate",
        sortable: true,
      },
      {
        name: "End Date",
        key: "endDate",
        sortable: true,
      },
      {
        name: "Detail",
        key: "detail",
      },
    ]);

    const coupons = ref<Array<ICoupon>>([]);
    const initCoupons = ref<Array<ICoupon>>([]);
    const formatDate = (date: string) => {
      return moment(date).format("YYYY-MM-DD");
    };
    onMounted(async () => {
      MenuComponent.reinitialization();

      setCurrentPageBreadcrumbs("Coupon Management", ["Product Management"]);

      try {
        ApiService.setHeader();
        await ApiService.get(`${process.env.VUE_APP_API_URL}/v1/coupons`).then(
          ({ data }) => {
            coupons.value = data.data;
            initCoupons.value.splice(0, coupons.value.length, ...coupons.value);
            loading.value = false;
          }
        );
      } catch (error) {
        console.log(error);
      }
    });

    const search = ref<string>("");
    const searchItems = () => {
      coupons.value.splice(0, coupons.value.length, ...initCoupons.value);
      if (search.value !== "") {
        let results: Array<ICoupon> = [];
        for (let j = 0; j < coupons.value.length; j++) {
          if (searchingFunc(coupons.value[j], search.value)) {
            results.push(coupons.value[j]);
          }
        }
        coupons.value.splice(0, coupons.value.length, ...results);
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
      coupons,
      tableHeader,
      search,
      searchItems,
      checkedcoupons,
      ...toRefs(state),
      formData,
      submit,
      formRef,
      loading,
      formatDate,
    };
  },
});
</script>
