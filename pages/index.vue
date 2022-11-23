<template>
    <div
        class="w-full min-h-screen text-dark-surface bg-white dark:bg-dark-surface dark:text-dark-text-normal transition-all duration-300 ease-in"
    >
        <div class="w-full max-w-md mx-auto pt-20 px-4 pb-32">
            <div>
                <SectionPlans :sectionPlanData="sectionPlanData" />
            </div>
            <div class="mt-16">
                <!-- saldo -->
                <SectionSimple :sectionData="sectionSaldoData" />
            </div>

            <div class="mt-16">
                <SectionWhatsappComposer />
            </div>

            <div class="mt-16">
                <!-- <code>{{ bankShortcuts }}</code> -->
            </div>
        </div>
        <!-- <ServiceWorkerDriver /> -->
    </div>
</template>

<script setup>
import { db, CATEGORIES } from "~/db/shortcutsDb";
// import ServiceWorkerDriver from "~/components/sw/ServiceWorkerDriver.vue";

const sectionPlanData = {
    sectionName: db.CATEGORIES.planes,
    items: db.getItemsByCategory(db.CATEGORIES.planes),
};

const sectionSaldoData = {
    sectionName: db.CATEGORIES.saldo,
    items: db.getItemsByCategory(db.CATEGORIES.saldo),
};

// const bankShortcuts = getItemsByType(types.bankShortcut.type_key);
</script>
