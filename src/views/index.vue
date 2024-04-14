<template>
  <div v-if="usescreenWidth().special == 'true'">
    <firstPage />
    <secondPage />
    <footers />
  </div>

  <div v-else-if="route.query.notTailwind">
    <firstPage2_notTailwind />
    <secondPage2_notTailwind />
    <footers_notTailwind />
  </div>

  <div v-else>
    <firstPage2 />
    <secondPage2 />
    <footers />
  </div>



</template>



<script setup>
import firstPage from '@/components/firstPage.vue';
import firstPage2 from '@/components/firstPage2.vue';
import secondPage2 from '@/components/secondPage2.vue';
import secondPage from '@/components/secondPage.vue';
import footers from '@/components/footer.vue';


import firstPage2_notTailwind from '@/components/notTailwind/firstPage2.vue';
import secondPage2_notTailwind from '@/components/notTailwind/secondPage2.vue';
import footers_notTailwind from '@/components/notTailwind/footer.vue';

import { onMounted } from 'vue';

import { useStore } from "@/store";
const { usescreenWidth } = useStore();
import { useRoute } from "vue-router";
const route = useRoute();
defineProps({
  msg: String,
})

onMounted(() => {
  if (usescreenWidth().special == 'true') {
    console.log("這是特殊版本，手機版面特化")
  } else {
    console.log("非特殊版本");
    if (route.query.notTailwind == 'true') {
      console.log("並非tailwind版本")
    } else {
      console.log("tailwind版本")
    }
  }
  // http://localhost:5173/#/  tailwind版本
  // http://localhost:5173/#/?notTailwind=true  並非tailwind版本
  // http://localhost:5173/?special=true#/  特化版型
})

</script>


<style lang="scss" scoped></style>