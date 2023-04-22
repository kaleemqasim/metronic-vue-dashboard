<template>
    <div class="row">
        <div class="breadCrumb_btn d-flex justify-content-end pt-6 px-9">
            <div
              class="btn btn-sm btn-success"
              >
              <router-link
                  to=""
                  class="menu-link px-3 text-gray-100"
                  >
                  Download
                  </router-link
                >
            </div>
        </div>  
        <div class="col-md-4">
            <div class="card card-xl-stretch mb-5 mb-xl-8">
                <!--begin::Header-->
                <div class="card-header border-0 py-5 accountChart">
                    <h3 class="card-title fw-bolder text-white">Financial Historical</h3>

                    <div class="card-toolbar">
                        <!--begin::Menu-->
                        <button type="button" class="
                      btn btn-sm btn-icon btn-color-white btn-active-white
                      border-0
                      me-n3
                    " data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                            <span class="svg-icon svg-icon-2">
                                <inline-svg src="media/icons/duotune/general/gen024.svg" />
                            </span>
                        </button>
                        <div class="
                                            menu
                                            menu-sub
                                            menu-sub-dropdown
                                            menu-column
                                            menu-rounded
                                            menu-gray-800
                                            menu-state-bg-light-primary
                                            fw-bold
                                            py-4
                                            w-250px
                                            fs-6
                                            " data-kt-menu="true">
                            <!--begin::Menu item-->
                            <div class="menu-item px-5">
                                <div class="menu-content text-muted pb-2 px-5 fs-7 text-uppercase">
                                    Financial
                                </div>
                            </div>
                            <!--end::Menu item-->

                            <!--begin::Menu item-->
                            <div class="menu-item px-5">
                                <a href="#" class="menu-link px-5"> Create invoice </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end::Header-->

                <!--begin::Body-->
                <div class="card-body p-0">
                    <!--begin::Chart-->
                    <apexchart class="mixed-widget-12-chart card-rounded-bottom accountChart" :options="chartOptions"
                        :series="series" height="200" type="bar"></apexchart>
                    <!--end::Chart-->

                    <!--begin::Stats-->
                    <div class="card-rounded bg-body mt-n10 position-relative card-px py-15">
                        <!--begin::Row-->
                        <div class="row g-0 mb-7">
                            <!--begin::Col-->
                            <div class="col mx-5">
                                <div class="fs-6 text-gray-400">Avarage Sale</div>
                                <div class="fs-2 fw-bolder text-gray-800">$650</div>
                            </div>
                            <!--end::Col-->

                            <!--begin::Col-->
                            <div class="col mx-5">
                                <div class="fs-6 text-gray-400">Comissions</div>
                                <div class="fs-2 fw-bolder text-gray-800">$29,500</div>
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Row-->

                        <!--begin::Row-->
                        <div class="row g-0">
                            <!--begin::Col-->
                            <div class="col mx-5">
                                <div class="fs-6 text-gray-400">Revenue</div>
                                <div class="fs-2 fw-bolder text-gray-800">$55,000</div>
                            </div>
                            <!--end::Col-->

                            <!--begin::Col-->
                            <div class="col mx-5">
                                <div class="fs-6 text-gray-400">Expenses</div>
                                <div class="fs-2 fw-bolder text-gray-800">$1,130,600</div>
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Row-->
                    </div>
                    <!--end::Stats-->
                </div>
                <!--end::Body-->
            </div>
        </div>
        <div class="col-md-8">
            <div class="card p-10">
                <div class="fw-bolder fs-3 mb-2">
                    197701004702 (35968-U) / MEGAH DAMAI SDN. BHD.
                </div>
                <div class="text-muted fs-7 mb-3">
                    Corporate Information
                </div>
                <table class="table table-flush fw-bold gy-1">
                    <tbody>
                        <tr>
                            <td class="fw-bolder fs-6 min-w-125px w-125px">Name</td>
                            <td class="fw-bolder fs-6">:MEGAH DAMAI SDN</td>
                        </tr>
                        <tr>
                            <td class="fw-bolder fs-6 min-w-125px w-125px">Last Old Name</td>
                            <td class="fw-bolder fs-6">:Nil</td>
                        </tr>
                        <tr>
                            <td class="fw-bolder fs-6 min-w-125px w-125px">Date of Change</td>
                            <td class="fw-bolder fs-6">:Nil</td>
                        </tr>
                        <tr>
                            <td class="fw-bolder fs-6 min-w-125px w-125px">Registration No.</td>
                            <td class="fw-bolder fs-6">: XXXXXXXXXXXX(XXXXXXX-T)</td>
                        </tr>
                        <tr>
                            <td class="fw-bolder fs-6 min-w-125px w-125px">Incorporation Date</td>
                            <td class="fw-bolder fs-6">: 09-07-1991</td>
                        </tr>
                        <tr>
                            <td class="fw-bolder fs-6 min-w-125px w-125px">Status</td>
                            <td class="fw-bolder fs-6"> : Existing</td>
                        </tr>
                        <tr>
                            <td class="fw-bolder fs-6 min-w-125px w-125px">Registered Address</td>
                            <td class="fw-bolder fs-6">:LEVEL 28, TOP SPIN TOWER <br/> 16, PERSIARAN DAGANGAN <br/>
                                SETIA ALAM, SEKSYEN U10 <br/>
                                SHAH ALAM <br/>
                                SELANGOR<br/></td>
                        </tr>
                        <tr>
                            <td class="fw-bolder fs-6 min-w-125px w-125px">Registration No.</td>
                            <td class="fw-bolder fs-6">: XXXXXXXXXXXX(XXXXXXX-T)</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-md-12">
            <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">New Arrivals</span>

        <span class="text-muted mt-1 fw-bold fs-7">More than 400+ new members</span>
      </h3>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-3">
      <!--begin::Table container-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table class="table align-middle gs-0 gy-4">
          <!--begin::Table head-->
          <thead>
            <tr class="fw-bolder text-muted bg-light">
              <th class="ps-4 min-w-300px rounded-start">PRODUCTS</th>
              <th class="min-w-125px">EARNINGS</th>
              <th class="min-w-200px">COMPANY</th>
              <th class="min-w-150px">RATING</th>
              <th class="min-w-200px text-end rounded-end"></th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <template v-for="(item, index) in list" :key="index">
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="symbol symbol-50px me-5">
                      <span class="symbol-label bg-light">
                        <img
                          :src="item.agent.image"
                          class="h-75 align-self-end"
                          alt=""
                        />
                      </span>
                    </div>

                    <div class="d-flex justify-content-start flex-column">
                      <a
                        href="#"
                        class="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                        >{{ item.agent.name }}</a
                      >
                      <span
                        class="text-muted fw-bold text-muted d-block fs-7"
                        >{{ item.agent.skills }}</span
                      >
                    </div>
                  </div>
                </td>

                <td>
                  <a
                    href="#"
                    class="
                      text-dark
                      fw-bolder
                      text-hover-primary
                      d-block
                      mb-1
                      fs-6
                    "
                    >{{ item.earnings.value }}</a
                  >
                  <span class="text-muted fw-bold text-muted d-block fs-7"
                    >{{ item.earnings.remarks }}></span
                  >
                </td>
                <td>
                  <a
                    href="#"
                    class="
                      text-dark
                      fw-bolder
                      text-hover-primary
                      d-block
                      mb-1
                      fs-6
                    "
                    >{{ item.company.name }}</a
                  >
                  <span class="text-muted fw-bold text-muted d-block fs-7">{{
                    item.company.fields
                  }}</span>
                </td>

                <td>
                  <div class="rating">
                    <template v-for="i in 5" :key="i">
                      <div
                        :class="[item.rating.value >= i && 'checked']"
                        class="rating-label me-2"
                      >
                        <i class="bi bi-star-fill fs-5"></i>
                      </div>
                    </template>
                  </div>

                  <span
                    class="text-muted fw-bold text-muted d-block fs-7 mt-1"
                    >{{ item.rating.remarks }}</span
                  >
                </td>

                <td class="text-end">
                  <a
                    href="#"
                    class="
                      btn
                      btn-accountChart
                      btn-active-color-muted    
                      btn-sm
                      px-4
                      me-2
                    "
                  >
                    View Offer
                  </a>
                </td>
              </tr>
            </template>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
      <!--end::Table container-->
    </div>
    <!--begin::Body-->
  </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { getCSSVariableValue } from "@/assets/ts/_utils";
import { MenuComponent } from "@/assets/ts/components";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
export default defineComponent({
    name: "profile",
    props: {
        widgetClasses: String,
        widgetColor: String,
        chartHeight: String,
    },
    components: {
    },
    setup(props) {
        const labelColor = getCSSVariableValue("--bs-gray-500");
        const borderColor = getCSSVariableValue("--bs-gray-200");
        onMounted(() => {
            MenuComponent.reinitialization();
            setCurrentPageBreadcrumbs("My Account", []);
        });
        const chartOptions = {
            chart: {
                fontFamily: "inherit",
                type: "bar",
                height: props.chartHeight,
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true,
                },
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "30%",
                    borderRadius: 5,
                },
            },
            legend: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 1,
                colors: ["transparent"],
            },
            xaxis: {
                categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: "12px",
                    },
                },
            },
            yaxis: {
                min: 0,
                max: 100,
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: "12px",
                    },
                },
            },
            fill: {
                type: ["solid", "solid"],
                opacity: [0.25, 1],
            },
            states: {
                normal: {
                    filter: {
                        type: "none",
                        value: 0,
                    },
                },
                hover: {
                    filter: {
                        type: "none",
                        value: 0,
                    },
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: "none",
                        value: 0,
                    },
                },
            },
            tooltip: {
                style: {
                    fontSize: "12px",
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands";
                    },
                },
                marker: {
                    show: false,
                },
            },
            colors: ["#ffffff", "#ffffff"],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true,
                    },
                },
                padding: {
                    left: 20,
                    right: 20,
                },
            },
        };

        const series = [
            {
                name: "Net Profit",
                data: [35, 65, 75, 55, 45, 60, 55],
            },
            {
                name: "Revenue",
                data: [40, 70, 80, 60, 50, 65, 60],
            },
        ];
        const list = [
      {
        agent: {
          image: "media/svg/avatars/001-boy.svg",
          name: "Brad Simmons",
          skills: "HTML, JS, ReactJS",
        },
        earnings: {
          value: "$8,000,000",
          remarks: "Pending",
        },
        company: {
          name: "Intertico",
          fields: "Web, UI/UX Design",
        },
        rating: {
          value: 5,
          remarks: "Best Rated",
        },
      },
      {
        agent: {
          image: "media/svg/avatars/047-girl-25.svg",
          name: "Lebron Wayde",
          skills: "PHP, Laravel, VueJS",
        },
        earnings: {
          value: "$8,750,000",
          remarks: "Paid",
        },

        company: {
          name: "Agoda",
          fields: "Houses & Hotels",
        },
        rating: {
          value: 4,
          remarks: "Above Avarage",
        },
      },
      {
        agent: {
          image: "media/svg/avatars/006-girl-3.svg",
          name: "Brad Simmons",
          skills: "HTML, JS, ReactJS",
        },
        earnings: {
          value: "$8,000,000",
          remarks: "In Proccess",
        },

        company: {
          name: "RoadGee",
          fields: "Paid",
        },
        rating: {
          value: 5,
          remarks: "Best Rated",
        },
      },
      {
        agent: {
          image: "media/svg/avatars/014-girl-7.svg",
          name: "Natali Trump",
          skills: "HTML, JS, ReactJS",
        },
        earnings: {
          value: "$700,000",
          remarks: "Pending",
        },
        company: {
          name: "The Hill",
          fields: "Insurance",
        },
        rating: {
          value: 3,
          remarks: "Avarage",
        },
      },
      {
        agent: {
          image: "media/svg/avatars/020-girl-11.svg",
          name: "	Jessie Clarcson",
          skills: "HTML, JS, ReactJS",
        },
        earnings: {
          value: "$1,320,000",
          remarks: "Pending",
        },
        company: {
          name: "Intertico",
          fields: "Web, UI/UX Design",
        },
        rating: {
          value: 5,
          remarks: "Best Rated",
        },
      },
    ];

        return {
            series,
            chartOptions,
            list,
        };
    },
});
</script>
  