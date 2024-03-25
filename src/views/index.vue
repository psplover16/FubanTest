<template>
  <div v-if="usescreenWidth().special == 'true'">
    <firstPage />
  </div>
  <div v-else>
    <firstPage2 />
  </div>
  <div v-if="usescreenWidth().special == 'true'">
    <secondPage />
  </div>
  <div v-else>
    <secondPage2 />
  </div>


  <footers />
</template>



<script setup>
import firstPage from '@/components/firstPage.vue';
import firstPage2 from '@/components/firstPage2.vue';
import secondPage2 from '@/components/secondPage2.vue';
import secondPage from '@/components/secondPage.vue';
import footers from '@/components/footer.vue';


import { onMounted } from 'vue';

import { useStore } from "@/store";
const { usescreenWidth } = useStore();


defineProps({
  msg: String,
})

onMounted(() => {
  if (usescreenWidth().special == 'true') {
    console.log("Z1")
  } else {
    console.log("Z2")
  }
  // http://localhost:5173/?special=true#/
})

</script>


<style lang="scss" scoped></style>