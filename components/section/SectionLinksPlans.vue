<template>
  <div class=" ">
    <h1 class="text-light-text-normal dark:text-dark-text-dimmed capitalize ml-2">{{ sectionName }}</h1>
    <ul class="mt-2 shadow-md rounded-xl">
      <!-- render plan items -->
      <!-- <div v-if="itemsType == dbTypes.etecsaPlan.key"> -->
      <li v-for="(item, index) in planItems" :key="index">
        <SectionLinkPlan
          :link="item"
          :isHead="index == 0"
          :isMiddle="index != 0 && index < planItems.length - 1"
          :isTail="index == planItems.length - 1"
        />
      </li>
      <!-- </div> -->
    </ul>
  </div>
</template>

<script setup>
// TODO
// setup props items types valdiation
import { types as dbTypes } from "~/db/shortcutsDb";
import SectionLinkPlan from "./SectionLinkPlan.vue";
import SectionLinkSimple from "./SectionLinkSimple.vue";
var props = defineProps({
  sectionName: String,
  itemsType: {
    type: String,
    default: "",
  },
  planItems: {
    type: Array,
    default() {
      return [
        {
          type: String, // dbTypes.simple || dbTypes.etecsaPlan
          group: String, // dbGroups.etecsa || other group
          category: String, // dbCategorys.planes || dbCategorys.saldo,
          name: String,
          command: String,
          data: {
            price: Number,
            text: String,
          },
        },
      ];
    },
  },
});
</script>

<style scoped></style>
