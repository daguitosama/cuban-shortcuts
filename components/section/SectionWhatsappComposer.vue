<template>
    <div class="">
        <h1
            class="text-light-text-normal dark:text-dark-text-dimmed capitalize ml-2"
        >
            Whatsapp Composer
        </h1>
        <ul class="mt-2 shadow-md rounded-2xl">
            <!-- render simple items -->
            <div
                class="w-full h-full block px-5 py-5 bg-light-elevation dark:bg-[#202124] rounded-xl dark:text-[#AFBAC6]"
            >
                <!-- number -->
                <div>
                    <label for="phone-number"> Full Phone Number </label>
                    <div
                        class="border border-slate-600 mt-2 px-2 py-1 w-full rounded-lg relative flex items-baseline bg-white dark:bg-[#202124] font-mono"
                    >
                        <span>+</span>
                        <input
                            type="text"
                            name=""
                            id="phone-number"
                            v-model="number"
                            inputmode="numeric"
                            class="ml-2 bg-white dark:bg-[#202124] w-full"
                        />
                    </div>
                </div>
                <!-- message -->
                <div class="mt-4">
                    <label for="message"> Message </label>
                    <textarea
                        type="text"
                        name=""
                        id="message"
                        v-model="message"
                        class="border border-slate-600 mt-2 px-2 py-1 w-full rounded-lg bg-white dark:bg-[#202124] font-mono"
                    />
                </div>
                <div class="mt-4">
                    <a
                        :href="w_route"
                        class="border border-slate-600 block w-full bg-gray-800 dark:bg-slate-600 text-white/90 dark:text-white/80 text-center py-2 px-2 rounded-xl"
                    >
                        Send
                    </a>
                </div>
            </div>
        </ul>
    </div>
</template>

<script setup>
const number = ref("53");
const message = ref("Hey");
const w_route = computed(() =>
    asWhatsappIntentLink(number.value, message.value)
);

function asWhatsappIntentLink(number, message) {
    // just handling space in the number string
    const safeNumber = String(number).replace(/\s/g, "");
    return `https://wa.me/${safeNumber}?text=${message}`;
}
</script>

<style scoped></style>
