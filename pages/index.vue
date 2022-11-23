<template>
    <div
        class="w-full min-h-screen text-dark-surface bg-white dark:bg-black dark:text-dark-text-normal transition-all duration-300 ease-in"
    >
        <div class="w-full max-w-md mx-auto pt-20 px-4 pb-32">
            <!-- shortcut sections -->
            <!-- planes -->
            <div>
                <SectionPlans :sectionPlanData="sectionPlanData" />
            </div>
            <!-- saldo -->
            <div class="mt-16">
                <SectionSimple :sectionData="sectionSaldoData" />
            </div>

            <!-- banca -->
            <div class="mt-16">
                <SectionSimple :sectionData="sectionBankData" />
            </div>

            <!-- whatsapp composer -->
            <div class="mt-16">
                <SectionWhatsappComposer />
            </div>
        </div>
        <!-- <ServiceWorkerDriver /> -->
    </div>
</template>

<script setup>
import { db } from "~/db/shortcutsDb";
// import ServiceWorkerDriver from "~/components/sw/ServiceWorkerDriver.vue";

const sectionPlanData = {
    sectionName: db.CATEGORIES.planes,
    items: db.getItemsByCategory(db.CATEGORIES.planes),
};

const sectionSaldoData = {
    sectionName: db.CATEGORIES.saldo,
    items: db.getItemsByCategory(db.CATEGORIES.saldo),
};

const sectionBankData = ref({
    sectionName: db.CATEGORIES.banca,
    items: db.getItemsByCategory(db.CATEGORIES.banca),
});
</script>
