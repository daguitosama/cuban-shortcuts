<template>
    <div
        class="w-full min-h-screen text-dark-surface bg-white dark:bg-dark-surface dark:text-dark-text-normal transition-all duration-300 ease-in"
    >
        <div class="w-full max-w-md mx-auto pt-20 px-4 pb-32">
            <div>
                <!-- <SectionLinksPlans
                    :sectionName="sectionSaldoShortcuts.sectionName"
                    :planItems="sectionSaldoShortcuts.items"
                    :itemsType="sectionSaldoShortcuts.itemsType"
                /> -->
            </div>
            <div class="mt-16">
                <!-- <SectionLinksSimple
                    :sectionName="sectionSimpleShortcuts.sectionName"
                    :simpleItems="sectionSimpleShortcuts.items"
                    :itemsType="sectionSimpleShortcuts.itemsType"
                /> -->
            </div>

            <div class="mt-16">
                <SectionWhatsappComposer />
            </div>

            <div class="mt-16">
                <!-- <code>{{ bankShortcuts }}</code> -->
            </div>
        </div>
        <ServiceWorkerDriver />
    </div>
</template>

<script setup>
import { db, CATEGORIES } from "~/db/shortcutsDb";
import SectionLinksPlans from "./components/section/SectionPlans.vue";
import SectionLinksSimple from "~/components/section/SectionSimple.vue";
import ServiceWorkerDriver from "~/components/sw/ServiceWorkerDriver.vue";
// const sectionPlansShortcuts = {
//     sectionName: shortCutsDb.categorys.planes,
//     items: shortCutsDb.shortcuts.slice(-3),
//     itemsType: shortCutsDb.shortcuts.slice(-1)[0].type,
// };

const sectionSaldoShortcuts = {
    sectionName: db.CATEGORIES.saldo,
    items: db.getItemsByCategory(db.CATEGORIES.saldo),
    itemsType: db.SHORTCUT_TYPES.etecsa,
};

// const bankShortcuts = getItemsByType(types.bankShortcut.type_key);
</script>
