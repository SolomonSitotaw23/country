<script setup>
import { ref } from "vue";
defineProps(["department", "name"]);
const emit = defineEmits(["sayHello"]);

const count = ref(0);

const YourName = () => {
  emit("sayHello");
};
</script>

<template>
  <button @click="count++">Click me {{ count }}</button>
  <p>Hello {{ name }} your department is {{ department }}</p>

  <button @click="$emit(sayHello)">emit</button>
</template>
