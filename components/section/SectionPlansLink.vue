<template>
    <a
        target="_blank"
        rel="noopener"
        :href="`tel:${link.command}`"
        class="w-full h-full block px-5 py-5 bg-light-elevation dark:bg-[#202124]"
        :class="{
            'rounded-t-2xl': isHead,
            'border-t-slate-200 dark:border-t-slate-700/50 border-t': isMiddle,
            'rounded-b-2xl border-t-slate-200 dark:border-t-slate-700/50 border-t':
                isTail,
        }"
    >
        <!-- name -->
        <p class="text-xl font-medium leading-none dark:text-[#AFBAC6]">
            {{ link.name }}
        </p>
        <!-- data -->
        <div
            class="mt-4 flex items-center justify-start text-xs text-dark-text-dimmed"
        >
            <!-- price -->
            <p class="leading-none">$ {{ link.data.price }}</p>
            <!-- contents -->
            <p class="ml-4 leading-none">
                {{ link.data.text }}
            </p>
        </div>
    </a>
</template>

<script setup>
var props = defineProps({
    isHead: {
        type: Boolean,
        default: false,
    },
    isMiddle: {
        type: Boolean,
        default: true,
    },
    isTail: {
        type: Boolean,
        default: false,
    },
    link: {
        type: Object,
        default() {
            return {
                type: String,
                group: String,
                category: String,
                name: String,
                command: String,
                data: {
                    price: Number,
                    text: String,
                },
            };
        },
    },
});
</script>
