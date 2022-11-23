<template>
    <div class=" ">
        <h1
            class="text-light-text-normal dark:text-dark-text-dimmed capitalize ml-2"
        >
            {{ sectionPlanData.sectionName }}
        </h1>
        <ul class="mt-2 shadow-md rounded-xl">
            <li v-for="(item, index) in sectionPlanData.items" :key="index">
                <SectionPlansLink
                    :link="item"
                    :isHead="index == 0"
                    :isMiddle="
                        index != 0 && index < sectionPlanData.items.length - 1
                    "
                    :isTail="index == sectionPlanData.items.length - 1"
                />
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
var props = defineProps({
    sectionPlanData: {
        type: Object,
        default: () => ({
            sectionName: "",
            items: [
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
            ],
        }),
    },
});
</script>

<style scoped></style>
