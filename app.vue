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

            <!-- credits -->
            <div class="mt-16 flex flex-col items-center justify-center py-3">
                <p class="text-sm">
                    Made by
                    <a
                        target="_blank"
                        href="https://github.com/daguitosama"
                        class="px-2 hover:bg-emerald-100 dark:hover:bg-emerald-900 border-b-emerald-400 border-b transition-all duration-300"
                        >Dago</a
                    >
                </p>
                <p class="mt-2 text-xs text-opacity-80">v 5.0</p>
            </div>
        </div>
        <ServiceWorkerDriver />
    </div>
</template>

<script setup>
import { db } from "~/db/shortcutsDb";
import ServiceWorkerDriver from "~/components/sw/ServiceWorkerDriver.vue";

const sectionPlanData = {
    sectionName: db.CATEGORIES.planes,
    items: db.getItemsByCategory(db.CATEGORIES.planes),
};

const sectionSaldoData = {
    sectionName: db.CATEGORIES.saldo,
    items: db.getItemsByCategory(db.CATEGORIES.saldo),
};

const sectionBankData = {
    sectionName: db.CATEGORIES.banca,
    items: db.getItemsByCategory(db.CATEGORIES.banca),
};
</script>

<style>
@tailwind base;
@tailwind utilities;
@tailwind components;
</style>
