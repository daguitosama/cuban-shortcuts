<template>
    <div class=" ">
        <h1
            class="text-light-text-normal dark:text-dark-text-dimmed capitalize ml-2"
        >
            {{ sectionData.sectionName }}
        </h1>
        <ul class="mt-2 shadow-md rounded-xl">
            <li v-for="(item, index) in sectionData.items" :key="index">
                <SectionSimpleLink
                    :link="item"
                    :isHead="index == 0"
                    :isMiddle="
                        index != 0 && index < sectionData.items.length - 1
                    "
                    :isTail="index == sectionData.items.length - 1"
                />
            </li>
        </ul>
    </div>
</template>

<script setup>
var props = defineProps({
    sectionData: {
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
                    data: null,
                },
            ],
        }),
    },
});
</script>

<style scoped></style>
