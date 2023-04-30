<template>
<div class="containers">
    <ul>
        <li>
            <input type="checkbox" id="frontend">
            <label for="frontend">MEGAH DAMAI SDN. BHD. <span>197701004702 (35968-U)</span></label>
            
            <ul>
                <li>
                    <input type="checkbox" id="css">
                    <label for="css">Santhiago Charles IV <span>Shareholder / 40%</span></label>
                    <ul>
                        <li>
                            <label for="">Abdul Halim Saad <span>Shareholder / 40%</span></label>
                        </li>
                        <li>
                            <label for="">Edmund Liew <span>Shareholders / 10%</span></label>
                        </li>
                        <li>
                            <label for="">Kamarul Ariffin <span>Shareholders / 10%</span></label>
                        </li>
                    </ul>
                </li>
                <li>
                    <input type="checkbox" id="js">
                    <label for="js">Abdul Halim Saad <span>690814-11-8076</span></label>
                    <ul>
                        <li>
                            <input type="checkbox" id="react">
                            <label for="react">SERENDAH TIN LTD <span>192601000052 (521-T)</span></label>
                            <ul>
                                <li>
                                    <label for="">SERENDAH TIN LTD <span>192601000052 (521-T)</span></label>
                                </li>
                                <li>
                                    <label for="">SURIA TAKDIR SDN. BHD. <span>200901009336 (852337-W)</span></label>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <label for="">INDAH RAYA SDN. BHD. <span>197801002961 (39957-D)</span></label>
                        </li>
                        <li>
                            <input type="checkbox" id="angular">
                            <label for="angular">ALMOST NEW TRADING <span>201003215259 (001987800-H)</span></label>
                            <ul>
                                <li>
                                    <label for="">SURIA TAKDIR SDN. BHD. <span>200901009336 (852337-W)</span></label>
                                </li>
                                <li>
                                    <label for="">MASTIN SDN BHD <span>194901000049 (1789-A)</span></label>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</div>
</template>
  
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { MenuComponent } from "@/assets/ts/components";
import { Field } from "vee-validate";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";


export default defineComponent({
  name: "realtionship-analysis",
  components: {

  },
  setup() {

    onMounted(() => {
      MenuComponent.reinitialization();

      setCurrentPageBreadcrumbs("Entity Link Relationship Analysis", []);
    });

    return {

    };
  },
});
</script>
  