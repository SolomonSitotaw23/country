<script setup>
import { ref, reactive } from "vue";
import "./../index.css";
import app from "./App.vue";

defineProps({
  msg: String,
});
</script>

<template>
<div class=" from-indigo-300 to-purple-400 scroll-smooth ">
    <div class="bg-gradient-to-r text-center pt-6 sticky top-0 z-10 shadow-md">
    <h1 class="text-7xl text-blue-800 ">Countries</h1>
    <span class="text-bold">and their info</span>
  </div>

  <div class="w-full bg-gradient-to-r from-indigo-300 to-purple-400 grid gap-4 grid-cols-3 ">
    <app />
  </div>
</div>

</template>

<style scoped></style>
