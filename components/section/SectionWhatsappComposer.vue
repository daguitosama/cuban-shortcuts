<template>
  <div class=" ">
    <h1
      class="text-light-text-normal dark:text-dark-text-dimmed capitalize ml-2"
    >
      Whatsapp Composer
    </h1>
    <ul class="mt-2 shadow-md rounded-xl">
      <!-- render simple items -->
      <div
        class="w-full h-full block px-5 py-5 bg-light-elevation dark:bg-dark-elevation rounded-xl"
      >
        <div>
          <label for="phone-number"> Full Phone Number </label>
          <div
            class="mt-2 px-2 py-1 w-full rounded-lg relative flex items-baseline bg-white dark:bg-dark-secondSurface font-mono"
          >
            <span>+</span>
            <input
              type="text"
              name=""
              id="phone-number"
              v-model="number"
              inputmode="numeric"
              class="ml-2 bg-white dark:bg-dark-secondSurface"
            />
          </div>
        </div>
        <div class="mt-4">
          <label for="message"> Message </label>
          <textarea
            type="text"
            name=""
            id="message"
            v-model="message"
            class="mt-2 px-2 py-1 w-full rounded-lg bg-white dark:bg-dark-secondSurface font-mono"
          />
        </div>
        <div class="mt-4">
          <a
            :href="w_route"
            class="block w-full bg-gray-800 text-white text-center py-2 px-2 rounded-xl"
          >
            Send
          </a>
        </div>
      </div>
    </ul>
  </div>
</template>

<script setup>
import { computed, ref } from "@vue/composition-api";
const number = ref(53);
const message = ref("Hey");
const w_route = computed(() =>
  asWhatsappIntentLink(number.value, message.value)
);

function asWhatsappIntentLink(number, message) {
  return `https://wa.me/${number}?text=${message}`;
}
</script>

<style scoped></style>
