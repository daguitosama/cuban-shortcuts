<template>
    <div class=" ">
        <h1
            class="text-light-text-normal dark:text-dark-text-dimmed capitalize ml-2"
        >
            {{ sectionName }}
        </h1>
        <ul class="mt-2 shadow-md rounded-xl">
            <!-- render simple items -->
            <div v-if="itemsType == SHORTCUT_TYPES.simple">
                <li v-for="(item, index) in simpleItems" :key="index">
                    <SectionLinkSimple
                        :link="item"
                        :isHead="index == 0"
                        :isMiddle="index != 0 && index < simpleItems.length - 1"
                        :isTail="index == simpleItems.length - 1"
                    />
                </li>
            </div>
        </ul>
    </div>
</template>

<script setup>
// TODO
// setup props items types valdiation
import { SHORTCUT_TYPES } from "~/db/shortcutsDb";
import SectionLinkSimple from "./SectionSimpleLink.vue";
var props = defineProps({
    sectionName: String,
    itemsType: {
        type: String,
        default: "",
    },

    simpleItems: {
        type: Array,
        default() {
            return [
                {
                    type: String, // dbTypes.simple || dbTypes.etecsaPlan
                    group: String, // dbGroups.etecsa || other group
                    category: String, // dbCategorys.planes || dbCategorys.saldo,
                    name: String,
                    command: String,
                    data: null,
                },
            ];
        },
    },
});
</script>

<style scoped></style>
