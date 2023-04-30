<template>
<div class="containers">
    <ul>
        <li>
            <input type="checkbox" id="frontend">
            <label for="frontend">MEGAH DAMAI SDN. BHD. <span>197701004702 (35968-U)</span></label>
            
            <ul>
                <li>
                    <input type="checkbox" id="css">
                    <label for="css">CSS</label>
                    <ul>
                        <li>
                            <label for="">SASS</label>
                        </li>
                        <li>
                            <label for="">LESS</label>
                        </li>
                        <li>
                            <label for="">Stylus <br> test</label>
                        </li>
                    </ul>
                </li>
                <li>
                    <input type="checkbox" id="js">
                    <label for="js">Javascript</label>
                    <ul>
                        <li>
                            <input type="checkbox" id="react">
                            <label for="react">React</label>
                            <ul>
                                <li>
                                    <label for="">React Native</label>
                                </li>
                                <li>
                                    <label for="">NextJS</label>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <label for="">Vue</label>
                        </li>
                        <li>
                            <input type="checkbox" id="angular">
                            <label for="angular">Angular</label>
                            <ul>
                                <li>
                                    <label for="">test</label>
                                </li>
                                <li>
                                    <label for="">test2</label>
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

      setCurrentPageBreadcrumbs("Link Realtionship Analysis", []);
    });

    return {

    };
  },
});
</script>
  