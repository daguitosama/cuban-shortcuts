<template>
    <a
        target="_blank"
        rel="noopener"
        :href="`tel:${link.command}`"
        class="w-full h-full block px-5 py-5 bg-light-elevation dark:bg-[#202124] dark:text-[#AFBAC6]"
        :class="{
            'rounded-t-2xl': isHead,
            'border-t-slate-200 dark:border-t-slate-700/50 border-t': isMiddle,
            'rounded-b-2xl border-t-slate-200 dark:border-t-slate-700/50 border-t':
                isTail,
        }"
    >
        <!-- name -->
        <p class="font-medium leading-none">
            {{ link.name }}
        </p>
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
                data: null,
            };
        },
    },
});
</script>
